/* 香港地盤用語 — preview. Runtime fetches same-origin data.csv and nothing else. */
(() => {
  "use strict";

  const CSV_URL = new URL("data.csv", window.location.href);
  const SENSITIVE_IDS = new Set(["fei-tou"]);
  const SENSITIVE_TERMS = new Set(["飛土"]);
  const PEJORATIVE_TERMS = new Set(["企鵝", "消防員", "飛機師", "白紙", "蛇王"]);
  const DISAMBIG = {
    消防員: "貶義的職場用語，不是消防人員（Fire Services officer）。",
    飛機師: "貶義的職場用語，不是飛機師（aircraft pilot）。",
    企鵝: "貶義的求職／職場用語，不是職位名稱。",
    蛇王: "貶義的職場用語，不是中性詞彙。",
    白紙: "貶義的求職／職場用語，不是正式職級或證件名稱。",
  };
  const RELATED = {
    幫辦: ["工程督察", "監工", "工程監督", "皇家佬"],
    工程督察: ["幫辦", "監工", "工程監督", "皇家佬"],
    監工: ["幫辦", "工程督察", "工程監督", "皇家佬"],
    工程監督: ["幫辦", "工程督察", "監工", "皇家佬"],
    皇家佬: ["幫辦", "工程督察", "監工", "工程監督"],
  };
  const CAT_LABEL = {
    role: "職位",
    trade: "工種",
    material: "材料",
    plant_tool: "機械／工具",
    structure: "構件",
    statutory: "法例／表格",
    site_process: "工序",
    bse_mep: "屋宇裝備",
    safety_credential: "安全／證件",
    labour_slang: "職場用語",
  };
  const CAT_ORDER = Object.keys(CAT_LABEL);
  const REG_LABEL = { slang: "俚語", official: "官式", formal: "正式", mixed: "兩者" };
  const CONF_LABEL = { high: "高", medium: "中", low: "低" };

  const $ = (id) => document.getElementById(id);
  const app = $("app");
  const paneList = $("pane-list");
  const paneDetail = $("pane-detail");
  const termListEl = $("term-list");
  const resultMeta = $("result-meta");
  const sensitiveHint = $("sensitive-hint");
  const catBar = $("cat-bar");
  const charIndex = $("char-index");
  const qInput = $("q");
  const clearBtn = $("clear-btn");
  const aboutBtn = $("about-btn");
  const aboutPanel = $("about-panel");
  const charsBtn = $("chars-btn");
  const sensitiveBtn = $("sensitive-btn");
  const dialog = $("sensitive-dialog");
  const homeLink = $("home-link");

  /** @type {{id:string,term:string,sense_no:string,alt_terms:string,formal_zh:string,jyutping:string,spoken_form:string,english:string,short_def:string,note:string,category:string,register:string,confidence:string,ambiguity:string,sources:string}[]} */
  let rows = [];
  /** @type {Map<string, typeof rows>} */
  let byTerm = new Map();

  const state = {
    q: "",
    cat: "",
    char: "",
    term: "",
    id: "",
    sensitive: "off", // off | warn | on
    charsOpen: false,
    aboutOpen: false,
  };

  function parseCSV(text) {
    if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
    const out = [];
    let row = [];
    let cell = "";
    let i = 0;
    let inQ = false;
    const pushCell = () => { row.push(cell); cell = ""; };
    const pushRow = () => { out.push(row); row = []; };
    while (i < text.length) {
      const c = text[i];
      if (inQ) {
        if (c === '"') {
          if (text[i + 1] === '"') { cell += '"'; i += 2; continue; }
          inQ = false; i += 1; continue;
        }
        cell += c; i += 1; continue;
      }
      if (c === '"') { inQ = true; i += 1; continue; }
      if (c === ",") { pushCell(); i += 1; continue; }
      if (c === "\n") { pushCell(); pushRow(); i += 1; continue; }
      if (c === "\r") { i += 1; continue; }
      cell += c; i += 1;
    }
    if (cell.length || row.length) { pushCell(); pushRow(); }
    if (!out.length) return [];
    const header = out[0];
    return out.slice(1).filter((r) => r.some((v) => v && v.trim())).map((r) => {
      const obj = {};
      header.forEach((k, idx) => { obj[k] = r[idx] == null ? "" : r[idx]; });
      return obj;
    });
  }

  function firstChar(term) {
    const ch = Array.from(term)[0] || "";
    return /[A-Za-z]/.test(ch) ? ch.toUpperCase() : ch;
  }

  function isLatinTerm(term) {
    return /^[A-Za-z0-9&]/.test(term);
  }

  function cmpTerms(a, b) {
    const ax = isLatinTerm(a);
    const bx = isLatinTerm(b);
    if (ax !== bx) return ax ? 1 : -1;
    return a.localeCompare(b, "zh-Hant");
  }

  function isSensitiveRow(row) {
    return SENSITIVE_IDS.has(row.id) || SENSITIVE_TERMS.has(row.term);
  }

  function groupOf(term) {
    return byTerm.get(term) || [];
  }

  function primaryRegister(senses) {
    const set = new Set(senses.map((s) => s.register));
    if (set.size === 1) return senses[0].register;
    return "mixed";
  }

  function isPejorative(term) {
    return PEJORATIVE_TERMS.has(term);
  }

  function searchFields(row) {
    return [row.term, row.alt_terms, row.formal_zh, row.english, row.spoken_form]
      .filter(Boolean)
      .join("\n")
      .toLowerCase();
  }

  function matchesQuery(senses, q) {
    if (!q) return true;
    const needle = q.trim().toLowerCase();
    if (!needle) return true;
    return senses.some((row) => searchFields(row).includes(needle));
  }

  function readURL() {
    const p = new URLSearchParams(window.location.search);
    state.q = p.get("q") || "";
    state.cat = p.get("cat") || "";
    state.char = p.get("char") || "";
    state.term = p.get("term") || "";
    state.id = p.get("id") || "";
    const s = p.get("sensitive");
    state.sensitive = s === "1" || s === "on" ? "on" : s === "warn" ? "warn" : "off";
    state.charsOpen = p.get("chars") === "1";
    if (state.id && !state.term) {
      const hit = rows.find((r) => r.id === state.id);
      if (hit) state.term = hit.term;
    }
  }

  function writeURL({ push = false } = {}) {
    const p = new URLSearchParams();
    if (state.q) p.set("q", state.q);
    if (state.cat) p.set("cat", state.cat);
    if (state.char) p.set("char", state.char);
    if (state.term) p.set("term", state.term);
    if (state.id) p.set("id", state.id);
    if (state.sensitive === "on") p.set("sensitive", "1");
    else if (state.sensitive === "warn") p.set("sensitive", "warn");
    if (state.charsOpen && !state.char) p.set("chars", "1");
    const qs = p.toString();
    const url = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`;
    const method = push ? "pushState" : "replaceState";
    history[method]({ q: state.q, cat: state.cat, char: state.char, term: state.term, id: state.id, sensitive: state.sensitive }, "", url);
  }

  function visibleGroups() {
    const allowSensitive = state.sensitive === "on";
    const terms = Array.from(byTerm.keys()).sort(cmpTerms);
    const hiddenHits = [];
    const shown = [];
    for (const term of terms) {
      const senses = groupOf(term);
      const sensitive = senses.some(isSensitiveRow);
      if (state.cat && !senses.some((s) => s.category === state.cat)) continue;
      if (state.char && firstChar(term) !== state.char) continue;
      if (!matchesQuery(senses, state.q)) continue;
      if (sensitive && !allowSensitive) {
        hiddenHits.push(term);
        continue;
      }
      shown.push(term);
    }
    return { shown, hiddenHits };
  }

  function escapeHTML(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlightPejorativeAlias(note) {
    if (!note) return "";
    const safe = escapeHTML(note);
    return safe.replace(/爛仔會/g, `爛仔會<span class="pej-inline">貶義</span>`);
  }

  function stampsFor(senses, { warn = false } = {}) {
    const bits = [];
    if (warn) bits.push(`<span class="stamp stamp-warn">警告</span>`);
    if (isPejorative(senses[0].term)) bits.push(`<span class="stamp stamp-pej">貶義</span>`);
    bits.push(`<span class="stamp stamp-${primaryRegister(senses)}">${REG_LABEL[primaryRegister(senses)] || ""}</span>`);
    if (senses.length > 1) bits.push(`<span class="stamp stamp-count">${senses.length} 義</span>`);
    if (senses.some((s) => s.confidence === "low")) bits.push(`<span class="stamp stamp-conf">可信度低</span>`);
    else if (senses.some((s) => s.confidence === "medium") && senses.length === 1) bits.push(`<span class="stamp stamp-count">可信度中</span>`);
    return bits.join("");
  }

  function ellipsize(s, n) {
    const t = (s || "").trim();
    if (t.length <= n) return t;
    return `${t.slice(0, n).replace(/[，、。；;\s]+$/, "")}…`;
  }

  function renderCategories() {
    const items = [{ id: "", label: "全部" }, ...CAT_ORDER.map((id) => ({ id, label: CAT_LABEL[id] }))];
    catBar.innerHTML = items.map((c) =>
      `<button type="button" class="cat-btn" data-cat="${c.id}" aria-pressed="${state.cat === c.id ? "true" : "false"}">${c.label}</button>`
    ).join("");
    const pressed = catBar.querySelector('.cat-btn[aria-pressed="true"]');
    if (pressed) {
      const c = catBar.getBoundingClientRect();
      const b = pressed.getBoundingClientRect();
      if (b.left < c.left + 4 || b.right > c.right - 4) {
        catBar.scrollLeft += (b.left + b.right) / 2 - (c.left + c.right) / 2;
      }
    }
  }

  function renderCharIndex() {
    const chars = [];
    const seen = new Set();
    const terms = Array.from(byTerm.keys()).sort((a, b) => {
      const ca = firstChar(a), cb = firstChar(b);
      const ax = /[A-Z]/.test(ca), bx = /[A-Z]/.test(cb);
      if (ax !== bx) return ax ? -1 : 1;
      return ca.localeCompare(cb, "zh-Hant");
    });
    for (const t of terms) {
      const c = firstChar(t);
      if (!seen.has(c)) { seen.add(c); chars.push(c); }
    }
    charIndex.innerHTML = chars.map((c) =>
      `<button type="button" class="char-btn" data-char="${escapeHTML(c)}" aria-pressed="${state.char === c ? "true" : "false"}">${escapeHTML(c)}</button>`
    ).join("");
    charIndex.hidden = !state.charsOpen;
    charsBtn.setAttribute("aria-expanded", state.charsOpen ? "true" : "false");
    charsBtn.textContent = state.char && !state.charsOpen ? `首字「${state.char}」` : "按首字瀏覽";
    charsBtn.setAttribute("aria-pressed", state.char ? "true" : "false");
  }

  function renderList() {
    const { shown, hiddenHits } = visibleGroups();
    const q = state.q.trim();
    clearBtn.hidden = !q;

    let meta = "";
    if (q && state.cat) meta = `「${q}」· ${CAT_LABEL[state.cat] || state.cat}：${shown.length} 個詞`;
    else if (q) meta = `「${q}」：${shown.length} 個詞`;
    else if (state.cat && state.char) meta = `${CAT_LABEL[state.cat]} · 首字「${state.char}」：${shown.length} 個詞`;
    else if (state.cat) meta = `${CAT_LABEL[state.cat]}：${shown.length} 個詞`;
    else if (state.char) meta = `首字「${state.char}」：${shown.length} 個詞`;
    else meta = `${shown.length} 個詞`;
    resultMeta.textContent = meta;

    const narrowed = !!(q || state.char || state.cat);
    if (hiddenHits.length && narrowed) {
      sensitiveHint.hidden = false;
      sensitiveHint.innerHTML = `<p>有符合的敏感語，已預設隱藏。</p><p><button type="button" class="text-btn" id="hint-reveal">顯示敏感語</button></p>`;
      const btn = $("hint-reveal");
      if (btn) btn.addEventListener("click", openSensitiveWarning);
    } else {
      sensitiveHint.hidden = true;
      sensitiveHint.innerHTML = "";
    }

    if (!shown.length) {
      const reason = q
        ? `沒有符合「${escapeHTML(q)}」的詞。搜尋只查標題、別名、正式中文、英文與口語形式，不查注記。可改用其他寫法，或清除篩選。`
        : "沒有符合目前分類或首字的詞。可改選「全部」，或關閉首字篩選。";
      termListEl.innerHTML = `<div class="state" id="no-results"><h2>沒有符合的詞</h2><p>${reason}</p></div>`;
      return;
    }

    termListEl.innerHTML = shown.map((term) => {
      const senses = groupOf(term).slice().sort((a, b) => Number(a.sense_no) - Number(b.sense_no));
      const warn = senses.some(isSensitiveRow);
      const english = senses.length === 1 ? senses[0].english : "";
      let body = "";
      if (senses.length > 1) {
        body = `<ul class="sense-lines">${senses.map((s) =>
          `<li><span class="n">義 ${s.sense_no}</span>${escapeHTML(ellipsize(s.short_def, 42))}</li>`
        ).join("")}</ul>`;
      } else {
        body = `<p class="term-snip">${escapeHTML(ellipsize(senses[0].short_def, 72))}</p>`;
      }
      const active = state.term === term ? " is-active" : "";
      return `<a class="term-item${active}" href="?${detailQuery(term)}" data-term="${escapeHTML(term)}">
        <div class="term-top"><span class="term-headword">${escapeHTML(term)}</span><span class="term-marks">${stampsFor(senses, { warn })}</span></div>
        ${english ? `<p class="term-english">${escapeHTML(english)}</p>` : ""}
        ${body}
      </a>`;
    }).join("");
    const activeItem = termListEl.querySelector(".term-item.is-active");
    if (activeItem && window.matchMedia("(min-width: 960px)").matches) {
      activeItem.scrollIntoView({ block: "nearest" });
    }
  }

  function detailQuery(term, id) {
    const p = new URLSearchParams();
    if (state.q) p.set("q", state.q);
    if (state.cat) p.set("cat", state.cat);
    if (state.char) p.set("char", state.char);
    p.set("term", term);
    if (id) p.set("id", id);
    if (state.sensitive === "on") p.set("sensitive", "1");
    return p.toString();
  }

  function listQuery() {
    const p = new URLSearchParams();
    if (state.q) p.set("q", state.q);
    if (state.cat) p.set("cat", state.cat);
    if (state.char) p.set("char", state.char);
    if (state.sensitive === "on") p.set("sensitive", "1");
    if (state.charsOpen && !state.char) p.set("chars", "1");
    return p.toString();
  }

  function renderDetail() {
    const term = state.term;
    if (!term || !byTerm.has(term)) {
      paneDetail.innerHTML = `<div class="detail-idle"><h2>選一個詞</h2><p>在左欄搜尋或點選詞目，即可閱讀釋義。這是一本香港工程現場用語辭典。俚語與官銜並非同一回事。圖面略語須按圖例與文脈解讀。</p></div>`;
      app.classList.remove("is-detail");
      return;
    }
    const senses = groupOf(term).slice().sort((a, b) => Number(a.sense_no) - Number(b.sense_no));
    const warn = senses.some(isSensitiveRow);
    if (warn && state.sensitive !== "on") {
      paneDetail.innerHTML = `<div class="detail-idle"><h2>此詞已隱藏</h2><p>這是預設隱藏的敏感語，須先經警告再顯示。</p></div>`;
      app.classList.remove("is-detail");
      return;
    }

    app.classList.add("is-detail");
    const jp = (senses.find((s) => s.jyutping) || {}).jyutping || "";
    const clash = senses.some((s) => s.ambiguity === "abbreviation_clash");
    const dis = DISAMBIG[term];

    const senseHTML = senses.map((s) => {
      const title = senses.length > 1 ? `<h3 class="sense-title">義 ${escapeHTML(s.sense_no)}</h3>` : "";
      const formal = s.formal_zh ? `<p class="sense-formal">${escapeHTML(s.formal_zh)}</p>` : "";
      const eng = s.english ? `<p class="sense-english">${escapeHTML(s.english)}</p>` : "";
      const alts = s.alt_terms ? `<p class="sense-alts">亦作 ${escapeHTML(s.alt_terms.replace(/\s*\|\s*/g, "、"))}</p>` : "";
      const spoken = (s.spoken_form && s.spoken_form.replace(/[；;]/g, "").trim() !== s.term)
        ? `<p class="sense-spoken">口語 ${escapeHTML(s.spoken_form)}</p>`
        : "";
      const note = s.note ? `<details class="note"><summary>注記</summary><p>${highlightPejorativeAlias(s.note)}</p></details>` : "";
      const conf = CONF_LABEL[s.confidence] || s.confidence;
      const confMark = ` · 可信度${conf}`;
      return `<article class="sense" id="sense-${escapeHTML(s.id)}">
        ${title}
        <p class="sense-meta">${escapeHTML(CAT_LABEL[s.category] || s.category)} · ${escapeHTML(REG_LABEL[s.register] || s.register)}${confMark}</p>
        ${formal}${eng}
        <p class="sense-def">${escapeHTML(s.short_def)}</p>
        ${alts}${spoken}${note}
      </article>`;
    }).join("");

    let indexHTML = "";
    if (senses.length > 1) {
      indexHTML = `<nav aria-label="全部語義"><ol class="sense-index">${senses.map((s) => {
        const label = s.formal_zh || s.english || ellipsize(s.short_def, 28);
        return `<li><a href="#sense-${escapeHTML(s.id)}"><span class="sense-index-n">義 ${escapeHTML(s.sense_no)}</span><span class="sense-index-def">${escapeHTML(label)}</span></a></li>`;
      }).join("")}</ol></nav>`;
    }

    let relatedHTML = "";
    const rel = RELATED[term];
    if (rel && rel.length) {
      const items = rel.map((t) => {
        const ss = groupOf(t);
        if (!ss.length) return "";
        const reg = REG_LABEL[primaryRegister(ss)] || "";
        const en = ss.length === 1 ? ss[0].english : "";
        const slangNote = t === "皇家佬" ? "（俚語，並非官銜）" : "";
        return `<li>
          <a href="?${detailQuery(t)}" data-term="${escapeHTML(t)}">
            <span class="rel-term">${escapeHTML(t)}${slangNote ? `<span class="rel-aside">${slangNote}</span>` : ""}</span>
            <span class="term-marks"><span class="stamp stamp-${primaryRegister(ss)}">${reg}</span></span>
          </a>
          ${en ? `<p class="rel-en">${escapeHTML(en)}</p>` : ""}
        </li>`;
      }).join("");
      relatedHTML = `<nav class="related" aria-label="相關詞">
        <h3>相關詞</h3>
        <p class="lead">官銜與俚語分開收錄，並未合併為同一條。</p>
        <ul class="related-list">${items}</ul>
      </nav>`;
    }

    const sources = [...new Set(senses.flatMap((s) => (s.sources || "").split(";").map((x) => x.trim()).filter(Boolean)))];

    const callouts = [];
    if (warn) {
      callouts.push(`<div class="callout callout-warn"><p>此語是重大、通常致命的地盤意外之俚語。與普通出土或泥頭無關。來源單薄，可信度低。</p></div>`);
    }
    if (dis) {
      callouts.push(`<div class="callout callout-pej"><p>${escapeHTML(dis)}</p></div>`);
    }
    if (clash) {
      callouts.push(`<div class="callout callout-legend"><p>圖面略語須按圖例與文脈解讀。</p></div>`);
    }

    const backQs = listQuery();
    const backHref = `${window.location.pathname}${backQs ? `?${backQs}` : ""}`;
    paneDetail.innerHTML = `
      <a class="back-btn" href="${backHref}" id="back-btn">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path d="M10.2 2.6 4.8 8l5.4 5.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter"/>
        </svg>
        返回
      </a>
      <article class="entry">
        <header class="entry-head">
          <h1 class="entry-headword" tabindex="-1">${escapeHTML(term)}</h1>
          <div class="entry-marks">${stampsFor(senses, { warn })}</div>
          ${jp ? `<p class="entry-jyutping">粵拼（參考） ${escapeHTML(jp)}</p>` : ""}
        </header>
        ${callouts.join("")}
        ${indexHTML}
        ${senseHTML}
        ${relatedHTML}
        <footer class="entry-foot">
          <span></span>
          <p class="sources">出處 ${escapeHTML(sources.join("；"))}</p>
        </footer>
      </article>`;

    if (window.matchMedia("(max-width: 959px)").matches) {
      window.scrollTo(0, 0);
    }
    if (state.id) {
      const el = document.getElementById(`sense-${state.id}`);
      if (el) el.scrollIntoView({ block: "nearest" });
    }
  }

  function renderChrome() {
    aboutPanel.hidden = !state.aboutOpen;
    aboutBtn.setAttribute("aria-expanded", state.aboutOpen ? "true" : "false");
    sensitiveBtn.setAttribute("aria-pressed", state.sensitive === "on" ? "true" : "false");
    qInput.value = state.q;
    homeLink.setAttribute("href", "./");
    document.title = state.term ? `${state.term} · 香港地盤用語` : "香港地盤用語";
  }

  function renderAll() {
    renderChrome();
    renderCategories();
    renderCharIndex();
    renderList();
    renderDetail();
  }

  function openSensitiveWarning() {
    state.sensitive = "warn";
    writeURL({ push: false });
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function closeSensitiveWarning(confirm) {
    if (dialog.open) dialog.close();
    else dialog.removeAttribute("open");
    state.sensitive = confirm ? "on" : "off";
    writeURL({ push: false });
    renderAll();
  }

  function openTerm(term, { push = true, id = "" } = {}) {
    state.term = term;
    state.id = id;
    writeURL({ push });
    renderAll();
    const heading = paneDetail.querySelector(".entry-headword");
    if (heading) heading.focus?.();
    if (window.matchMedia("(max-width: 959px)").matches) {
      paneDetail.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }

  function closeTerm({ push = true } = {}) {
    state.term = "";
    state.id = "";
    writeURL({ push });
    renderAll();
  }

  function onSearchInput() {
    state.q = qInput.value;
    state.term = "";
    state.id = "";
    writeURL({ push: false });
    renderAll();
  }

  function bind() {
    $("search-form").addEventListener("submit", (e) => {
      e.preventDefault();
      onSearchInput();
      qInput.blur();
    });
    qInput.addEventListener("input", onSearchInput);
    clearBtn.addEventListener("click", () => {
      state.q = "";
      qInput.value = "";
      state.term = "";
      state.id = "";
      writeURL({ push: false });
      renderAll();
      qInput.focus();
    });

    aboutBtn.addEventListener("click", () => {
      state.aboutOpen = !state.aboutOpen;
      renderChrome();
    });

    charsBtn.addEventListener("click", () => {
      state.charsOpen = !state.charsOpen;
      if (!state.charsOpen) state.char = "";
      writeURL({ push: false });
      renderAll();
    });

    sensitiveBtn.addEventListener("click", () => {
      if (state.sensitive === "on") {
        closeSensitiveWarning(false);
      } else {
        openSensitiveWarning();
      }
    });

    $("warn-cancel").addEventListener("click", () => closeSensitiveWarning(false));
    $("warn-confirm").addEventListener("click", () => closeSensitiveWarning(true));
    dialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeSensitiveWarning(false);
    });

    catBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".cat-btn");
      if (!btn) return;
      state.cat = btn.getAttribute("data-cat") || "";
      state.term = "";
      state.id = "";
      writeURL({ push: false });
      renderAll();
    });

    charIndex.addEventListener("click", (e) => {
      const btn = e.target.closest(".char-btn");
      if (!btn) return;
      const c = btn.getAttribute("data-char") || "";
      state.char = state.char === c ? "" : c;
      state.charsOpen = false;
      state.term = "";
      state.id = "";
      writeURL({ push: false });
      renderAll();
    });

    termListEl.addEventListener("click", (e) => {
      const a = e.target.closest("a.term-item");
      if (!a) return;
      e.preventDefault();
      openTerm(a.getAttribute("data-term") || "");
    });

    paneDetail.addEventListener("click", (e) => {
      const back = e.target.closest("#back-btn");
      if (back) {
        e.preventDefault();
        closeTerm({ push: true });
        return;
      }
      const rel = e.target.closest(".related-list a[data-term]");
      if (rel) {
        e.preventDefault();
        openTerm(rel.getAttribute("data-term") || "");
      }
    });

    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      state.q = "";
      state.cat = "";
      state.char = "";
      state.term = "";
      state.id = "";
      state.charsOpen = false;
      writeURL({ push: true });
      renderAll();
    });

    window.addEventListener("popstate", () => {
      readURL();
      renderAll();
      if (state.sensitive === "warn") openSensitiveWarning();
    });
  }

  async function init() {
    bind();
    try {
      const res = await fetch(CSV_URL);
      if (!res.ok) throw new Error(String(res.status));
      const text = await res.text();
      rows = parseCSV(text);
      if (!rows.length) throw new Error("empty");
      byTerm = new Map();
      for (const r of rows) {
        if (!r.term) continue;
        if (!byTerm.has(r.term)) byTerm.set(r.term, []);
        byTerm.get(r.term).push(r);
      }
      readURL();
      renderAll();
      if (state.sensitive === "warn") openSensitiveWarning();
    } catch (err) {
      termListEl.innerHTML = `<div class="state"><h2>未能載入詞表</h2><p>未能讀取 data.csv。此頁只載入這份公開詞表，不會載入其他檔案。</p></div>`;
      resultMeta.textContent = "未能載入詞表";
      console.error(err);
    }
  }

  init();
})();
