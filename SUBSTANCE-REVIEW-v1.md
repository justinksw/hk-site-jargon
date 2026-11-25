# Substance review v1 — Hong Kong engineering-site jargon dictionary

Reviewed 25 November 2026 (Hong Kong Time, UTC+8) for Sua, to show Justin. Data only: no page design, no contact with Celine or Jessie.

**Verdict: substance locked** (25 November 2026, afternoon, Hong Kong Time, UTC+8), after the dictionary owner answered the three remaining questions the same day. Official-title pairs, the three 地盤三寶 senses, both 大力佬 senses, abbreviation splits, and the sensitive-slang public default are locked. Design was not started; Celine and Jessie were not contacted.

Non-blocking residuals remain: Jyutping still needs a Cantonese reviewer; CCMS/CMCS and official Chinese for T&C were not invented; MSFD, VCD, BMS, O&M and similar stay on the consider-add list.

**Files**

| Path | Role |
|---|---|
| `/workspace/hk-jargon-dict/data.csv` | Revised public dataset (UTF-8 BOM, same schema) |
| `/workspace/hk-jargon-dict/SUBSTANCE-REVIEW-v1.md` | This note |
| `/workspace/hk-jargon-dict/sources.md` | Source IDs updated (`VTC-RFM`, `HA-ABBR`, `ARCHSD-TC`, `SITE-ATTEST-20261125`); conflict notes aligned to the lock |
| `/workspace/hk-jargon-dict/held-back-sensitive.md` | 咖喱 row preserved off the public CSV |
| `schema.md`, `report.md` | Unchanged first-pass files; where they conflict with this note, this note wins |

**Counts (after patches)**

- Public CSV: **199 rows / 186 headwords** (first pass 181 / 177; after first substance patches 197 / 186; plus 地盤三寶 sense 3 and 大力佬 sense 2)
- Corrections to existing rows: **16** in the first patch pass, plus note/ambiguity updates on this lock pass
- Dropped from public CSV: **2** (咖喱; the earlier false split of 大力佬 into two official titles, since merged into sense 1)
- Official-title rows added: **2** (工程督察, 監工)
- Abbreviation sense-rows added: **12** (FS ×3, SP ×3, BS ×3, BM ×2, BA ×1)
- Other adds now: **3** (BWIC, DB, T&C) plus **RSS** (role)
- Site-attested senses added on lock: **2** (地盤三寶 sense 3; 大力佬 sense 2)
- Consider add later: listed below, not invented as official titles

Hard-ban check (hospital names, Block T, operating theatres, project IDs, personal names): **clean.**

---

## 幫辦 / Inspector of Works / Clerk of Works / Works Supervisor / 皇家佬

**Do not collapse these.** Locked official pairs, from HAD works-grade pages and a Housing Authority / LegCo bilingual abbreviations list (`HA-ABBR`):

| Official English | Official Chinese | Notes |
|---|---|---|
| Inspector of Works (also Assistant / Senior) | 工程督察 | Usual precise mapping for 幫辦. VTC also lists the occupation as 工程檢查員; that is an occupation-dictionary variant, not the civil-service grade name. |
| Works Supervisor (I / II) | 監工（一級監工／二級監工） | Distinct, usually more junior government works grade. Everyday Cantonese 監工 can also just mean “supervising the works.” |
| Clerk of Works (also Resident / RCOW) | 工程監督 | Related but distinct official title, common on government or consultant resident-site-staff teams. |

**幫辦** stays the slang lemma people hear. `english` remains Inspector of Works (HKIE cards), but the short definition now says this is the *usual* official mapping, not a 1:1 for every use. Loose site speech may cover other inspecting staff. It is not the contractor’s 科文.

**皇家佬** is slang for government works site staff (typically 工程督察 or 監工), sometimes loosely extended to other client-side inspectors. It is **not a title**. The previous English field “Government inspector / Clerk of Works (slang)” over-promoted Clerk of Works; that was corrected. Xiaoluban’s CoW gloss is kept as a secondary, loose usage in the note only.

New official look-up rows: `工程督察`, `監工`. The existing `工程監督` row was kept and its sources tightened (removed a mismatched VTC-IOW citation).

---

## 地盤三寶

There are **three tellings**; **all three are now locked**. Nothing was picked silently.

1. **Locked (high) — documents.** 身份證、平安卡、建造業工人註冊證. This is what 齊三寶 usually means in job ads. Attested by CT Good Jobs, JobsDB, a 2021 workers’ article, and a construction workers’ union explainer.
2. **Locked (high) — PPE, vest set.** 安全帽、安全鞋、反光衣. Xiaoluban records this as 地盤三寶 (sometimes including the Green Card). JobsDB describes the same three items as 基本個人防護三寶, and lists a safety harness as *other* PPE.
3. **Locked (medium) — PPE, harness set.** 安全帽、安全帶、安全鞋. Locked as Hong Kong site speech on owner attestation of 25 November 2026 (`SITE-ATTEST-20261125`). A published Hong Kong source that uses this exact trio under the name 地盤三寶 was not found in the earlier review pass (Labour Department lists the items as PPE without the「三寶」label; the trio also resembles Mainland「施工三寶」). Do not merge with senses 1 or 2.

---

## 大力佬

**Not a general-labourer official title, and not two official titles.**

The official specified trade (VTC occupation dictionary; CIC schedule) is one combined occupation: **索具工（叻㗎）／金屬模板裝嵌工** = **Rigger / Metal Formwork Erector**. Xiaoluban lists 大力佬／飛模佬 under 索具工 with both lifting and large metal-formwork duties (also 鐵模佬). JobsDB treats 大力佬／叻架佬 as riggers and says the name is from the trade, not from being “strong.”

The first-pass CSV had split “rigger” vs “metal-formwork worker.” That official-title split is **merged** into sense 1, with a usage note that some speech (including a 2021 article) emphasises the metal-formwork side, as against 釘板佬 (timber formwork).

Do **not** map sense 1 to 雜工 / CID, or to a crane operator (天秤手). One career article’s wording 吊臂工人 is inaccurate and was not followed.

**Sense 2 (medium) — loose site speech.** Locked on owner attestation of 25 November 2026 (`SITE-ATTEST-20261125`): 大力佬 is also heard as a strong general labourer (大力雜工), not only as the official trade in sense 1. This sense has **no official title** and must not be mapped 1:1 onto 雜工 / CID.

---

## Abbreviation clashes

First pass often left clashes in a note. They are now **sense-per-row** where attested (Xiaoluban, plus existing statutory rows):

| Headword | Locked senses |
|---|---|
| **FS** | 1 Fire Services; 2 flat slab; 3 far side; 4 survey foresight (with BS / IS) |
| **FD** | already split: fire damper / floor drain (unchanged) |
| **BA** | 1 Building Authority only (and the BA form series). **Not locked:** Building Services (usually BS) or Building Automation. |
| **SP** | 1 sprinkler; 2 Supervision Plan; 3 soil pipe |
| **BS** | 1 Building Services; 2 British Standard; 3 survey backsight. Building Surveyor is flagged in the note as a possible professional-title reading, **not** a locked drawing default. |
| **BM** | 1 beam (B / BM = 陣); 2 survey benchmark. Other expansions (e.g. building management) were **not** locked. |

Always-read-the-legend wording is kept. The first-pass claim “BA = Building Authority vs Building Services” was not attested as a BA expansion in the Xiaoluban extract; it is treated as a confusion with BS, not as a locked BA sense.

---

## Sensitive slang — recommendation and default if Justin agrees

| Term | Default | Why |
|---|---|---|
| **咖喱** | **Drop** from the public page | The compiled source (2021 article) records a site sense “illicit kickback / 食咖喱.” That is not normal professional vocabulary. The same word is also used in general Cantonese as a **racist epithet** for South Asian people, including workers. The racist sense was not in the compiler’s sources, so it is not added as a locked definition; leaving only the kickback sense on a public learning page would still be incomplete and unsafe. **Dropped from `data.csv`.** Original kickback row is preserved in `held-back-sensitive.md`. If Justin later wants it behind a strong filter, it must be labelled pejorative / illicit, and must warn about the racist use; it must not be taught as neutral workplace vocabulary. |
| **飛土** | **Filter** (off by default / content warning) | Grim, typically fatal-accident slang; single informal source; already `low` confidence. Kept in the CSV with a public-default filter note. Not a slur. Do not embellish. |
| **爛仔會** | **Filter the alias**; keep **判頭會** as the headword | Coarse pejorative nickname for a sub-contractors’ meeting. Removed from `alt_terms` so a UI that indexes aliases will not promote it. Mentioned only in the 判頭會 note, labelled pejorative. |
| **企鵝, 消防員, 飛機師, 白紙, 蛇王** | **Stay**, clearly labelled pejorative recruitment / conduct slang | Useful for reading job ads. Not racial slurs. 消防員 and 飛機師 must stay disambiguated from the ordinary occupations. Notes were tightened so they are not presented as job titles or as neutral vocabulary. |

The dictionary owner accepted this default on 25 November 2026. It is now **locked** as the public-page rule.

---

## Key corrections made (existing rows)

- 幫辦, 皇家佬, 工程監督: titles un-collapsed; official Chinese locked; 皇家佬 English corrected.
- 叻架佬 / 大力佬: official combined trade; sense 2 merged; no labourer or crane-operator title.
- 地盤三寶: senses 1–2 kept from published sources; sense 3 (harness set) locked on `SITE-ATTEST-20261125`.
- 大力佬 sense 2 (loose 大力雜工) locked on `SITE-ATTEST-20261125`; no official title invented.
- 監工計劃書, 灑水, 機電, 陣, 建築事務監督: cross-references to new abbreviation rows.
- 判頭會, 飛土, 企鵝, 消防員, 飛機師, 蛇王: sensitive-register wording tightened; public default accepted 25 November 2026.

No Jyutping was changed (compiler-added; only correct if sure).

---

## Missing BSE / MEP terms

**Added now** (attested, conventional English, useful to a Building Services Inspector):

- T&C = Testing and Commissioning (`ARCHSD-TC`; official Chinese **not** locked — ArchSD also uses 測試及運作程序)
- BWIC = Builder’s Work in Connection (with services) (XLB)
- DB = Distribution Board (XLB; other DB expansions possible, not locked)
- RSS = Resident Site Staff (XLB; a team name, not a grade)
- Abbreviation headwords above

**Consider add later** (reasonably sure of the English, but not given a locked row because this pass did not cite a specification page, or the expansion still clashes):

- MSFD (Motorised Smoke and Fire Damper / 電動防煙防火閘), VCD (Volume Control Damper), and related damper / grille marks (TAG, SAG, EAG, TAD, MOD, MMD)
- BMS (Building Management System); **CCMS / CMCS** — site talk often uses CCMS, but ArchSD’s AC specification title is *Central Monitoring & Control System*; do not invent one official expansion
- O&M (Operation and Maintenance / often 操作及保養)
- 建築測量師 / Building Surveyor as its own official lemma (profession is certain; statutory registration path should be written from a cited page, not guessed)
- CWP / CHWP (chilled water pipe / pump), smoke extraction, staircase pressurization, EVA, CBWD, material submission (all appear in Xiaoluban; easy later adds)
- Witness test, pressure test, flushing, isolation, 送電, plant-room nicknames, silencer, fire-rated board systems — still need attested HK wording

Do not invent official titles for any of the consider-add items.

---

## Residual uncertainties (not buried)

1. Jyutping still needs a Cantonese-speaking reviewer before any teaching or audio use. No Jyutping was changed in either pass.
2. CCMS vs CMCS, and official Chinese for T&C, wait for the contract / ArchSD wording actually in use.
3. BA = Building Automation, and BS = Building Surveyor as a *drawing* abbreviation, were not locked.
4. Thin single-source nicknames remain (蛇頭, 蛇仔, CID, 炮王, 佛沙, 飛土, 水線, 水氣).
5. First-pass `report.md` still describes the pre-review dataset; do not use its counts or 大力佬 / 三寶 / 咖喱 wording as the locked position.
6. A later published Hong Kong source could upgrade 地盤三寶 sense 3 and 大力佬 sense 2 from medium to high; they are already locked as site speech.

What **is** locked: the official title pairs; 幫辦 as loose slang with IoW as the usual mapping; 皇家佬 as slang not a title; 地盤三寶 senses 1–3; 大力佬 sense 1 (combined official trade) and sense 2 (loose labourer, no official title); the abbreviation splits listed above; the new T&C / BWIC / DB / RSS rows; the sensitive-slang public default; the hard-ban; and Traditional Chinese + official English as already designed.
