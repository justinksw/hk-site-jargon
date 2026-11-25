# 香港地盤用語 — layout brief v1

- Date: 2026-11-25（Hong Kong Time, UTC+8）
- From: Celine（頁面 IA／視覺。本 brief 與 mock 只交給 Sua）
- Report to: **Sua**（Sua 再給 Justin 看 visual OK）
- Jessie: **HOLD**。Handoff 只在 Justin visual OK 之後，經 Sua。Celine 不聯絡 Jessie，也不動 repo。
- LIVE: **HOLD**。PREVIEW 同樣要等 Justin visual OK 之後由 Jessie 開。
- Skill used: Impeccable v4.5.1（plugin cache）。未寫 PRODUCT.md / DESIGN.md：context 報了 `NO_PRODUCT_MD` / `PRODUCT_INIT_REQUIRED`，本靜態 mock 改以本 brief 與 kickoff `CELINE-BRIEF-jargon-dict-v1.md` 為 pinned 權威。
- Working folder: `/workspace/hk-jargon-dict/`
- Repo name: 仍未定。不要把 repo 名當成品牌標。

鎖定資料（本 brief 與 mock 都沒有改這些檔）：`data.csv`、`SUBSTANCE-REVIEW-v1.md`、`schema.md`、`held-back-sensitive.md`、`sources.md`、`report.md`、`briefs/CELINE-BRIEF-jargon-dict-v1.md`。中身衝突時以 SUBSTANCE-REVIEW-v1 為正。

---

## Direction

**目標。** 一本公開、用手機即可查的香港工程現場用語辭典。讀者先是 Justin 與同場的香港人，也要讓外來的人看得懂。畫面用語是繁體中文；官銜與正式英語保持英文（Inspector of Works、Authorized Person、Building Services 等）。沒有日文 UI。

**顯示名。** 「香港地盤用語」（tab 與頁首）。Repo 名不出現在畫面上。

**一句說明（說明面板／桌面空詳情，可選顯示）。** 「這是一本公開的香港工程現場用語辭典。俚語與官銜並非同一回事。圖面略語須按圖例與文脈解讀。」

**視覺世界。** 安靜的現場手冊／袋裝語彙。淺暖紙色／淡石底、深墨、靠字階與規矩線，不是卡片牆。標題語（headword）最突出；釋義短、可讀。不是可愛教材卡（不要 mallow-cal 粉、不要 koko-hangul 學習卡），也不是沉重的「地盤」主題（不要黃黑警示條、安全帽裝飾、工業污跡）。不要抄 bse-notes / bse-tools 或其他既有 justinksw Pages。這是新的 hub。

**標籤系統（墨印式小章，不是粉彩色 pill）。**

| 資料值 | 畫面 |
|---|---|
| slang | 俚語 |
| official | 官式 |
| formal | 正式 |
| mixed | 兩者 |
| pejorative（鎖定詞或注記） | 貶義 |
| 飛土（顯示後） | 警告 |
| confidence high / medium / low | 可信度高／中／低（詳細頁每義都寫；低、中另外在標題旁用小章標出） |
| 多義 | *n* 義 |

分類顯示名（CSV 值不動）：職位 · 工種 · 材料 · 機械／工具 · 構件 · 法例／表格 · 工序 · 屋宇裝備 · 安全／證件 · 職場用語。

---

## IA

手機為本（320–430px，含短、高比例）。電話上是「搜尋＋一覽 → 詳情（全幅，可返回）」。960px 以上改為左一覽、右詳情的分欄；未選詞時右欄是短說明。

必做畫面：

1. **首頁／一覽** — 進來就能搜。分類一列橫向可捲（可以看到下一粒的邊緣）。「按首字瀏覽」可開關 120 個首字（拉丁在前，其後中文）。預設列出 185 個詞（藏起 飛土）。
2. **搜尋結果** — 只匹配 `term` / `alt_terms` / `formal_zh` / `english` / `spoken_form`。不搜 `note`、不搜 `jyutping`、不搜 `sources`。多義詞在同一標題下以「義 1、義 2」列出，不默默併成一義。
3. **詞目詳情** — 標題語最大；其下是標籤、細字粵拼（僅供參考）、正式中文、英文、短定義。多義時先有一份「全部語義」索引（正式中文或英文作一行標），再分段寫各義。注記預設收合，避免長英文注記把其他義推出首屏。出處 ID 只在詳情頁右下角，細字。

其他狀態：載入失敗、沒有符合的詞、桌面未選詞、敏感語警告對話框、顯示後的警告標籤。

v1 不含：帳戶、編輯 UI、粵拼朗讀／TTS、自訂域名、列印專用 layout、PDF。

### 可重現的 query（mock 用，給截圖與之後的 PREVIEW）

以專案根目錄開靜態伺服器（`data.csv` 相對 mock 為 `../data.csv`）：

```
/mocks/jargon-dict-v1.html
/mocks/jargon-dict-v1.html?q=幫辦
/mocks/jargon-dict-v1.html?q=無此詞彙測試
/mocks/jargon-dict-v1.html?q=爛仔會          → 無結果（不查注記）
/mocks/jargon-dict-v1.html?cat=labour_slang
/mocks/jargon-dict-v1.html?char=飛            → 飛土預設不出現
/mocks/jargon-dict-v1.html?chars=1
/mocks/jargon-dict-v1.html?term=幫辦
/mocks/jargon-dict-v1.html?term=地盤三寶
/mocks/jargon-dict-v1.html?term=大力佬
/mocks/jargon-dict-v1.html?term=FS
/mocks/jargon-dict-v1.html?term=消防員
/mocks/jargon-dict-v1.html?term=企鵝
/mocks/jargon-dict-v1.html?term=判頭會
/mocks/jargon-dict-v1.html?sensitive=warn
/mocks/jargon-dict-v1.html?sensitive=1&term=飛土
```

可疊加：`q`、`cat`、`char`、`term`、`id`、`sensitive`、`chars`。`id` 用來捲到某一義，但同一標題的所有義仍全部渲染，絕不只顯示一義。

---

## Tokens

- 紙：`#F3EEE6`；略深帶：`#EBE4D8`；墨：`#1B1714`；次要墨：`#4A433C`；規矩線：`#C9BFAF`；可操作邊線：`#8A8074`（對紙 ≥ 3:1）。
- 俚語章 `#6A3228`／`#F8F1EA`；官式 `#1E3A52`／`#F4F6F8`；正式 `#2C3B2E`／`#F3F6F2`；兩者 `#3F3426`／`#F6F1E8`；貶義 `#7A1F1A`／`#FBF1EF`；警告 `#5C221C`／`#FBF1EF`，底 `#EDE0D4`。
- 字：Noto Serif TC（標題語）、Noto Sans TC（UI 與正文）；後備 Noto CJK TC / Source Han / PingFang TC。免費字，Google Fonts + 系統後備。
- 尺度：正文 16px、行長約 68ch；標題語 `clamp(1.85rem, 7.2vw, 2.6rem)`；點按目標 44px（可行處）。沒有 `background-attachment: fixed`，沒有 `backdrop-filter`（避免 Safari 差異）。停用／淡化狀態改填色與墨色，不只改透明度。
- 動效：只在電話打開詳情時一次短位移（`prefers-reduced-motion` 則關閉）。

---

## Components and states

- 頁首：顯示名 +「說明」。實心底，無玻璃模糊。
- 搜尋欄：立即過濾，可清除。
- 分類鈕、首字鈕、`顯示敏感語`（預設關閉；打開先出警告對話框）。
- 詞列：serif 標題、英文一行、單義摘錄或多義「義 n」清單、標籤。不是等大圖示卡。
- 詳情：標題 → 標籤 → 粵拼（細）→ 警示／貶義／圖例提示（如適用）→ 多義索引 → 各義正文 → 相關詞 → 出處。
- 相關詞（UI 策展，不要求新 CSV 欄）：幫辦／工程督察／監工／工程監督／皇家佬。皇家佬標「俚語，並非官銜」。說明句：「官銜與俚語分開收錄，並未合併為同一條。」
- 空結果、載入失敗、桌面未選詞、敏感語警告。

---

## UI copy（繁體中文）

香港地盤用語；說明；搜尋用語、別名、官銜或英文；清除；全部；按首字瀏覽；顯示敏感語；返回；選一個詞；沒有符合的詞；載入詞目／未能載入詞表；義 *n*；亦作；口語；注記（展開／收起）；相關詞；出處；粵拼（參考）；可信度高／中／低；圖面略語須按圖例與文脈解讀；有符合的敏感語，已預設隱藏；取消／顯示。

貶義提示（畫面框架，不改 CSV 定義）：

- 消防員：「貶義的職場用語，不是消防人員（Fire Services officer）。」
- 飛機師：「貶義的職場用語，不是飛機師（aircraft pilot）。」
- 企鵝、蛇王、白紙：貶義，不是職位或正式職級。

飛土警告（不加油、不寫故事）：「此語是重大、通常致命的地盤意外之俚語，與普通出土或泥頭無關。來源單薄，可信度低。」

---

## How locked rules appear in the UI

- **一列一義、多義不合併。** 同一 `term` 組成一條。地盤三寶 3 義、大力佬 2 義、FS 4、BS 3、SP 3、BM 2、FD 2、砂紙 2，詳情頁索引一次列齊。
- **幫辦** 是俚語。詳情保留「通常對應 Inspector of Works／工程督察」，並用相關詞走到 工程督察、監工、工程監督（皆官式）與 皇家佬（俚語，並非官銜）。不把官銜摺進幫辦。
- **略語。** `ambiguity === abbreviation_clash` 時在詳情頂出「圖面略語須按圖例與文脈解讀。」
- **粵拼。** 只在詳情、細字、標「參考」。不是教材，也不做發音。
- **出處。** 詳情右下角，ID 而已，不展開 sources.md。
- **可信度。** 每義寫高／中／低；低（飛土）與單義的中，另加小章，避免看起來比來源更權威。
- **咖喱。** 不在公開 CSV，mock 也不載入 `held-back-sensitive.md`。畫面、搜尋、樣本、截圖都不出現該字。
- **飛土。** 預設一覽與預設搜尋都隱藏。只有在目前搜尋／分類／首字本來就會命中它時，才出現「有符合的敏感語，已預設隱藏。」勾選「顯示敏感語」先出警告，確認後才入列、可開詳情，並帶「警告」與「可信度低」。與出土／泥頭無關；不是種族歧視語。不加油。
- **爛仔會。** 不是詞頭、不進別名索引。搜「爛仔會」沒有結果（因為不搜注記）。只在「判頭會」注記裏出現，並在該處加「貶義」小章。
- **企鵝、消防員、飛機師、白紙、蛇王。** 保留，貶義小章 + 上述分辨提示。消防員／飛機師與一般職業名分開。
- **Hard-ban。** 醫院名、QEH、Block T、手術室、專案 ID、人名：UI、樣本搜尋、截圖、本 brief 例句都沒有。
- **搜尋欄位。** 只五欄。故注記裏的「爛仔會」不會成為命中。

---

## Impeccable

- 開頭跑了 `scripts/impeccable context`（cwd：`/workspace/hk-jargon-dict`）。`NO_PRODUCT_MD` / `PRODUCT_INIT_REQUIRED`：沒有自造品牌 PRODUCT.md／DESIGN.md，改 pin 本 brief 與 kickoff。
- 沒有 subagent 工具，critique 改為設計者自己的視覺檢查（層級、字、色、間距、可及性），不是 CLI multi-agent critique。
- 第一份完整 mock 之後跑了 `impeccable detect --json`（檔案 + `390x844` + `1280x800` 的 URL）。唯一發現是 `cream-palette`（紙色 `#F3EEE6`）。這是鎖定的手冊紙色，不是detector 的預設奶油底；**沒有改成 detector 色盤**。其他機械項通過。
- 接著 **polish 一次**：修 `[hidden]` 被 `display:flex` 蓋掉；首頁不再無故提示敏感語；分類改一列橫向捲；選首字後收起字表；多義索引 + 注記預設收合，讓三寶三義能在一屏內同時看見；標題語放到標籤之上；電話詳情不再被列表 `scrollIntoView` 捲走；相關詞拿掉 inline style；量測後把標題／skip link 的點按區補到 44px，分類邊線改到 ≥ 3:1。
- 本機 Impeccable 是 v4.5.1，launcher 曾提示有 v4.10.0。本次沒有跑 `npx impeccable update`（會改正在讀的 skill 檔，要下一場才生效）。

---

## Measurements（Chromium on this Linux box, 2026-11-25）

原始數據：`/workspace/hk-jargon-dict/mocks/shots-v1/MEASUREMENTS.json`。

**Overflow。** 在 320、360、390、430、320×568、390×667、390×844、430×932、667×390、1280×800，各測首頁、搜尋「幫辦」、地盤三寶詳情、幫辦詳情：`documentElement` 與 `body` 的 `scrollWidth - clientWidth` **全部為 0**（40 組）。

**文字對比（WCAG 1.4.3）。** 抽樣首頁、幫辦詳情、消防員詳情、警告對話框、飛土顯示後、桌面首頁。實測比對最低 **8.26:1**（貶義提示），墨在紙上 **15.42:1**，次要墨 **8.42:1**，各色小章皆 ≥ 8.9:1。全部超過 4.5:1（大字 3:1）。佔位符與次要墨同色，同樣過關。

**非文字對比（1.4.11）。** 搜尋框與分類／首字按鈕邊線 `#8A8074` 對紙約 **3.35:1**。裝飾性分隔線 `#C9BFAF` 約 1.57:1，不當成必須辨認的控制件邊線。

**點按目標。** 搜尋、分類、首字、返回、對話按鈕、注記 summary、顯示敏感語，高度皆 44px。量測初稿裏低於 44px 的是頁首標題與未聚焦的 skip link；已把可點區域補到 44px（視覺幾乎不變）。裝飾性小章不是按鈕。

---

## Official shots

目錄：`/workspace/hk-jargon-dict/mocks/shots-v1/`（2× device-scale，視窗截圖，不是整頁長圖）。

| 檔 | 說明 |
|---|---|
| `home-390x844.png` | 電話首頁 |
| `home-320x720.png` / `home-320x568.png` | 320 與短比例 |
| `home-360x800.png` / `home-390x667.png` / `home-430x932.png` | 其他電話寬與高比例 |
| `home-667x390.png` | 橫向，搜尋與分類仍可用，列表可見 |
| `home-1280x800.png` | 桌面分欄 |
| `filter-labour-slang-390x844.png` | 職場用語；貶義可見；飛土不在列 |
| `search-bongbaan-390x844.png` | 搜尋「幫辦」 |
| `noresults-390x844.png` | 無結果 |
| `noresults-lanzai-390x844.png` | 搜「爛仔會」無結果 |
| `detail-bongbaan-390x844.png` | 幫辦；俚語；可見相關官銜入口 |
| `detail-bongbaan-related-390x844.png` | 相關：工程督察／監工／工程監督／皇家佬 |
| `detail-bongbaan-1280x800.png` | 桌面幫辦；左列會捲到該詞 |
| `detail-dei-pun-saam-bou-390x844.png` | 地盤三寶，三義索引同時可見 |
| `detail-daai-lik-lou-390x844.png` | 大力佬，兩義 |
| `detail-FS-390x844.png` | FS 四義 + 圖例提示 |
| `feitou-hidden-char-fei-390x844.png` | 首字「飛」：飛碟、飛機師；無飛土 |
| `feitou-warning-390x844.png` | 警告對話框 |
| `feitou-revealed-390x844.png` | 顯示後的飛土 |
| `detail-siu-fong-jyun-390x844.png` | 消防員：貶義 + 與消防人員分辨 |
| `detail-kei-ngo-390x844.png` | 企鵝：貶義 |
| `detail-pun-tau-wui-note-390x844.png` | 判頭會注記裏的爛仔會＋貶義（注記已展開） |
| `chars-index-390x844.png` | 首字表打開 |
| `MEASUREMENTS.json` | 量測原始數據 |

Mock 本體：`/workspace/hk-jargon-dict/mocks/jargon-dict-v1.html`（同目錄 CSS／JS）。

---

## Jessie memo（一次寫完。要等 Sua 在 Justin visual OK 之後才交）

Celine 不接觸 git remote，也不開 PREVIEW。以下是實作時要守的契約，不是現在開工的指令。

1. **執行期只有一份公開 CSV**（UTF-8 BOM，現為 199 列／186 個詞頭）。更新資料就是改這份 CSV。不要在執行期載入 `held-back-sensitive.md`、`sources.md` 或任何隱藏詞表。
2. **搜尋欄位** 只准 `term`、`alt_terms`、`formal_zh`、`english`、`spoken_form`。不要搜 `note`（否則爛仔會會變成命中）。
3. **一列一義。** 同一標題必須整組顯示（義 1、義 2…），不要只挑一義或合併。
4. **飛土** 預設從一覽與預設搜尋隱藏；先警告，後顯示。不要加油。可信度低。與出土無關。
5. **咖喱** 永遠不要出現在公開頁、搜尋或樣本。
6. **爛仔會** 不是詞頭，也不要進別名索引。
7. **相關連結** 本 mock 用鎖定的幫辦一組硬編碼。這不是新的必填欄。若以後要加 `related_ids`，那是資料工作，不是現在的設計要求。本設計不要求 CSV 沒有的欄。
8. **Hard-ban** 同樣適用於之後的 UI 文案與測試字串。
9. **粵拼** 維持編譯器附加、非正式教材；不要做 TTS。
10. **Safari／WebKit：** 本 Linux 箱只證明了 Chromium。沒有用 `backdrop-filter` 或 `background-attachment: fixed`。中文斷行請在 iPhone WebKit 再驗 320–430px（justinksw Pages 以前在這裏出過錯）。`details/summary` 樣式、系統滾動條、字體後備也要在真機看一次。
11. 正式實作請走 `pages-preview-live` / `pages-acceptance-proof`，而且只在 Justin visual OK 之後。

---

## Acceptance list（設計側自檢。實作仍是後來 Jessie 的事）

- [x] 寬 320 / 360 / 390 / 430px 的電話與桌面，主要三畫面（首頁、搜尋結果、詞目詳情）可讀可用
- [x] 不同直橫比（含 320×568、390×667、430×932、667×390）下，搜尋欄、篩選、詳情不會缺一塊或按不到（橫向分類改為一列可捲）
- [x] 點按區與對比足夠（見上；文字全過 4.5:1，控制件邊線 ≥ 3:1）
- [x] 資料只靠 `data.csv` 既有欄，沒有要求新欄
- [x] 多義詞的義沒有被吞掉，全部看得見
- [x] 幫辦與官銜（工程督察 / 監工 / 工程監督）可分開走進；皇家佬標為俚語而非官銜
- [x] 咖喱不出現在畫面、搜尋、樣本、截圖
- [x] 飛土預設隱藏，顯示前先警告
- [x] 爛仔會不是詞頭、不在別名一覽；搜尋無結果
- [x] 企鵝、消防員、飛機師、白紙、蛇王有貶義標示
- [x] 消防員、飛機師不易與一般職業混淆
- [x] hard-ban 內容不在 mock
- [x] UI 是繁體中文；官銜英語保持英語
- [x] 沒有列印專用、登入、語音

---

## Leftover risks（實說）

- **iPhone WebKit 未在本 Linux 箱驗證。** 只有 Google Chrome／Chromium。真機（尤其 320–430px 中文斷行、`details/summary`、系統字）要等 Jessie 的 acceptance 或之後在 macOS／真機補。
- 本箱沒有 VoiceOver / TalkBack 實測；結構有標題、label、dialog、`aria-pressed`，但螢幕閱讀器流程未證明。
- 注記預設收合：短定義與多義索引在首屏；完整 CSV 注記（包括飛土、判頭會裏較像內部流程的句子）要點開才看到。沒有改注記文字。
- 相關詞目前只策展幫辦一組。其他「See also」仍只活在注記裏。
- 分類在窄屏是橫向捲，選中項會捲進視野；若有人不知道可橫滑，可以靠露出的下一粒按鈕發現。
- Google Fonts 若離線會落到系統 Noto CJK / PingFang。截圖是在可連線 + 本機 Noto 的環境拍的。
- Impeccable detect 的 `cream-palette` 按鎖定方向忽略。Detector 有時會把「安靜紙色手冊」判成 AI 奶油底。
- 本 mock 是自足靜態頁（可示範搜尋、篩選、狀態的少量 JS），**不是** repo 裏的正式應用程式碼。

Celine 到此停止。不開 PREVIEW，不聯絡 Sua／Jessie／Justin；等 Sua 把本包拿給 Justin 看 visual OK。
