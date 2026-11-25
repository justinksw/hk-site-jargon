# Proposed data schema

First-pass schema for a Hong Kong engineering / construction site jargon dictionary. One **row = one sense**. If a term has more than one attested meaning, repeat the headword with a new `sense_no` rather than collapsing the meanings into one cell.

Encoding: UTF-8 with BOM (Excel-friendly). Traditional Chinese (`zh-Hant`) for Cantonese / Hong Kong written forms. Official English titles stay in English (e.g. Inspector of Works, Authorized Person). Jyutping is used for romanization because it is unambiguous and easy to sort; the spoken-form column can still record how people actually say a term on site (e.g. 「N展」).

## CSV columns

| Column | Type | Required | Notes |
|---|---|---|---|
| `id` | string (slug) | yes | Stable identifier, unique per sense. Pattern: lowercase ASCII kebab-case, with a sense suffix when needed (`bong-baan`, `daai-lik-lou-1`). |
| `term` | string | yes | Headword as commonly written on site or in HK sources. Traditional Chinese for local terms; conventional Latin form for English abbreviations that are themselves the headword (e.g. `AHU`, `WR1`, `FS 251`). |
| `sense_no` | integer | yes | `1` for the only or primary attested sense; `2`, `3`… for further senses of the same headword. |
| `alt_terms` | string | no | Other written forms, aliases, or common abbreviations, separated by ` \| `. Do not repeat the headword. |
| `formal_zh` | string | no | Standard or official written Chinese equivalent when the headword is slang or an English abbreviation (e.g. 幫辦 → 工程督察). Leave blank when the headword is already the formal Chinese term. |
| `jyutping` | string | no | Jyutping of the headword, with tones, spaces between syllables (e.g. `bong1 baan6`). Leave blank for purely English abbreviations with no usual Cantonese reading in the sources, or when the reading is uncertain. |
| `spoken_form` | string | no | How the term is typically *said* or *written informally* on a Hong Kong site (e.g. N展, Green Card, 入伙紙). |
| `english` | string | yes | Official English title or conventional English equivalent. Prefer statutory / professional-body wording where one exists. |
| `short_def` | string | yes | One or two sentences. Attested meaning only; no invented folk etymology unless a source gives it, in which case attribute it in `note`. |
| `note` | string | no | Usage, scope, formal-vs-slang pairing, cautions, or conflicting accounts. Record multiple-meaning issues here as well as via separate rows. |
| `category` | enum | yes | See list below. One primary category per sense. |
| `register` | enum | yes | `slang` (spoken / site nickname), `official` (statutory or gazetted title, form, or certificate), `formal` (standard professional wording that is not itself a statute title), `mixed` (widely used in both registers, or an official thing commonly called by a slang name that is already the headword). |
| `confidence` | enum | yes | `high` = official source, or two or more independent Hong Kong sources agree. `medium` = one reasonably careful Hong Kong trade or compiled source, or official meaning plus thinly attested slang mapping. `low` = single informal source, uncertain written form, or unresolved conflict. |
| `ambiguity` | string | no | `none`, or a short tag such as `two_senses`, `loose_title_mapping`, `also_general_cantonese`. Details belong in `note`. |
| `sources` | string | yes | Semicolon-separated source IDs, matching `sources.md` (e.g. `HKIE-2012; CTGJ-2026; VTC-IOW`). |

## Categories

| Value | Scope |
|---|---|
| `role` | People and posts: inspectors, engineers, foremen, subcontractors, statutory professionals. |
| `trade` | Named trades / gangs (紮鐵佬, 棚佬, 水喉佬). |
| `material` | Materials and small components (石屎, 花鐵, 膠批, 鹽水喉). |
| `plant_tool` | Plant, tools, and site equipment (天秤, 開士機, 寶路華, 震筆). |
| `structure` | Structural or architectural elements in site speech (陣, 趷雞, 吊牆, 大砧板). |
| `statutory` | Ordinance titles, statutory registers, specified government forms and permits. |
| `site_process` | Construction or contract process jargon (落石屎, 執漏, RFI, 開工紙). |
| `bse_mep` | Building services / MEP systems, equipment, and specialist paperwork commonly heard by a BSI / site engineer. |
| `safety_credential` | Mandatory training, registration cards, and site-access documents. |
| `labour_slang` | Recruitment and workplace slang about attendance, experience, or conduct (白紙, 企鵝, 蛇王). |

## Design choices

1. **Sense-per-row, not term-per-row.** Several high-frequency items (地盤三寶, 大力佬, FS, FD) have more than one attested meaning. Splitting them avoids a UI later having to parse embedded “also means…”.
2. **Slang headword + formal fields.** Justin’s example 「幫辦」 is the lemma people *hear*. The official English title and formal Chinese go in `english` and `formal_zh`, not as rival headwords only. Official titles also get their own rows when a site engineer would look them up that way (e.g. Authorized Person, Occupation Permit).
3. **Register is separate from category.** 「安全主任」 is an official role; 「安督」 is slang for a related official role. Both are `role`, but the register differs.
4. **Confidence is mandatory.** Public slang lists are uneven. The first dataset should make that visible rather than looking more authoritative than the sources.
5. **Sources are IDs, not full citations.** Full bibliographic detail lives in `sources.md`, so the CSV stays readable.
6. **Out of scope for this schema.** Audio, images, example sentences, and UI language flags can be added later if Justin wants them. Workplace-specific names, project IDs, and personal names must never be entered.

## Suggested later fields (not in this CSV)

- `example` — a short invented or quoted usage sentence, only after a style decision.
- `related_ids` — explicit see-also links (幫辦 ↔ 皇家佬 ↔ Inspector of Works ↔ Clerk of Works).
- `audience` — general site / BSE / civil / recruiting, if the dictionary later filters by trade.
- `last_verified` — date a source was rechecked.
