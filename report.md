# First dataset brief — Hong Kong engineering-site jargon dictionary

For Sua, to present a first list to Justin later. Data only: no page design, no GitHub repo, no contact with other bots or with Justin.

**Deliverable path:** `/workspace/hk-jargon-dict/`

| File | Role |
|---|---|
| `schema.md` | Proposed CSV schema, categories, register/confidence rules, suggested later fields |
| `data.csv` | First word list (UTF-8 with BOM) |
| `sources.md` | Source IDs, URLs, confidence policy, conflicts and gaps |
| `report.md` | This brief |

Compiled 25 November 2026 (Hong Kong Time, UTC+8).

## Entry count

- **181 rows** (one row = one sense)
- **177 distinct headwords** (four headwords have two senses: 大力佬, 地盤三寶, 砂紙, FD)
- This is a little above the 80–150 “ideal” band because official titles and their slang names were entered as separate look-up lemmas (e.g. 入伙紙 and 佔用許可證; 開工紙 and BA8), and because a Building Services Inspector also needs statutory forms (WR1, WWO 46, FS 251). Padding was avoided: every row has an attested source ID, and thin items are marked `medium` or `low`.

Justin’s example **「幫辦」= Inspector of Works / 工程督察** is in the file (`id=bong-baan`, confidence `high`).

### By category

| Category | Rows |
|---|---|
| role | 31 |
| site_process | 28 |
| material | 21 |
| bse_mep | 21 |
| plant_tool | 17 |
| trade | 16 |
| structure | 16 |
| statutory | 14 |
| labour_slang | 9 |
| safety_credential | 8 |

### By register

| Register | Rows |
|---|---|
| slang | 121 |
| official | 26 |
| formal | 24 |
| mixed | 10 |

### By confidence

| Confidence | Rows |
|---|---|
| high | 124 |
| medium | 55 |
| low | 2 (佛沙, 飛土) |

## Schema (short)

One **sense per row**. Main columns:

- `term` — Traditional Chinese headword, or the Latin abbreviation if that is what people look up (AHU, WR1, FS 251)
- `sense_no` — 1, 2… for multiple meanings
- `alt_terms`, `formal_zh`, `jyutping`, `spoken_form`
- `english` — official English title where one exists
- `short_def`, `note`
- `category`, `register` (slang / official / formal / mixed)
- `confidence`, `ambiguity`, `sources` (IDs resolved in `sources.md`)

Rationale is in `schema.md`. Jyutping was added by the compiler, not printed in the sources, so it should be reviewed by a Cantonese speaker before any teaching or audio use.

## Notable decisions

- **Slang is the lemma people hear; official titles get their own rows too.** 幫辦 points to Inspector of Works / 工程督察, but Authorized Person, Occupation Permit, Licensed Plumber and so on are also first-class entries, because a site engineer looks them up both ways.
- **Do not invent.** Definitions stay close to Hong Kong sources (HKIE cards, Labour Department, CIC, Buildings Department, EMSD, WSD, FSD, VTC, plus HK career/trade articles). Folk etymology is labelled as such (e.g. the Qing-dynasty story for 幫辦).
- **BSE bias is deliberate**, as requested: 風火水電, 嘩佬, 膠批, 有氣, 九線掣, 鹽水喉, plus the forms and titles a Building Services Inspector actually chases (WR1, WR2, WWO 46, FS 251, REW, RFSIC, LP, MVAC, AHU, FCU, PAU). Public sources for *spoken* plant-room nicknames are thinner than for structural labour slang; that is a documented gap, not filled with guesses.
- **Traditional Chinese** throughout. Official English titles left in English.
- **Public-page ban observed.** No hospital names, block names, operating theatres, project IDs, personal names, or anything that would identify a workplace.
- **Sensitive slang** (咖喱 as illicit kickback; 飛土 as a serious / fatal accident; 爛仔會 as a coarse alias for a sub-contractor meeting) is documented only as vocabulary, with a caution in the note. Whether those belong on a public page is an editorial choice for Justin.

## Important ambiguities (show these to Justin)

1. **幫辦 is not a perfect synonym of every “inspector.”** Best official English: Inspector of Works. Related but distinct: government Works Supervisor (usually more junior); Clerk of Works / 工程監督 (common on consultant or government resident-site-staff teams); 皇家佬 (originally government inspectors, sometimes loosely extended to all client-side inspectors). A contractor 科文 (foreman) is the other side of the table.
2. **地盤三寶 has two live meanings.** (a) the three *documents* to enter a site (HKID, Green Card, worker registration card) — this is what 齊三寶 usually means in job ads; (b) three items of *PPE* (helmet, safety shoes, reflective vest), sometimes including the Green Card. Both are in the CSV as separate senses.
3. **大力佬 has two attested senses:** rigger (with 叻架佬; better attested) and, in one 2021 workers’ article, metal-formwork worker. Both senses are recorded.
4. **Abbreviation traps:** FS, FD, BA, SP, BS, BM all change meaning with the drawing discipline. These are exactly the mistakes a new inspector makes.
5. **Job-ad slang collides with ordinary words:** 消防員, 飛機師, 企鵝, 蛇頭, 蛇王, 砂紙, 龍. The dictionary must disambiguate, not overwrite the general meaning.
6. **Written forms vary:** 吼 vs 窿, 馬蹓頭 vs 馬騮頭, 人（車立）vs 人𨋢, 石屎 vs 石矢, 平安卡 vs 平安咭. The CSV prefers the transparent character and keeps the source spelling in `alt_terms`.

## Gaps

- HKIE 工程潮語卡 are only partly transcribed in public HTML; a full card capture would upgrade the slang list.
- The Development Bureau bilingual construction glossary was noted but not mined (it is a translation glossary, not slang).
- More BSE site talk still needed from attested HK sources: chiller / pump-room nicknames, ductwork, BMS, T&C, isolation / 送電, flushing, pressure test, witness test, builder’s work openings.
- A few nicknames rest on a single career article (蛇頭, 蛇仔, CID).
- No audio, example sentences, or related-term links yet (suggested as later schema fields).

## Open questions worth asking Justin later

Sua may want to raise these when showing the first list. Do not ask him from this task.

1. **UI language.** Japanese only, Traditional Chinese, English, or bilingual/trilingual? Justin has been working in Japanese in this thread, but the headwords are Cantonese / zh-Hant.
2. **Audience.** Himself and other Hong Kong inspectors; newcomers from outside HK (including Japanese readers); Mainland tradesmen; or a public general glossary?
3. **Scope.** Keep the present mix (roles, trades, materials, statutory, BSE), or narrow to Building Services, or widen further into civil / geotechnical / survey slang?
4. **Repo and page name.** Any preferred GitHub repo or Pages title (e.g. `hk-site-jargon`, `hk-engineering-dict`)?
5. **Romanisation.** Jyutping is in the CSV; Yale, or a looser “how it is said” column only, may be preferred.
6. **Editorial tone for sensitive or coarse entries.** Keep, move behind a filter, or drop 咖喱, 飛土, 爛仔會, and pejorative recruitment slang (企鵝, 消防員, 飛機師)?
7. **Official-and-slang pairs.** Keep both 入伙紙 and Occupation Permit as separate pages, or show one lemma with a formal-name field?
8. **How far to go on forms.** Is a short “what this form is” enough (current approach), or does he want a later “papers you will actually chase” subset (BA8, BA13, WR1, WWO 46, FS 251, Supervision Plan)?
9. **Reviewer.** Can a Cantonese-speaking site colleague later check Jyutping and the contested items (大力佬, 地盤三寶, 幫辦 vs CoW)?
10. **Next step.** He originally said: collect data first, then design the page. After he has seen this list, is the next move a short review of the headword list, or should design start on a subset?

