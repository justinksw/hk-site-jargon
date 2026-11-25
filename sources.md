# Sources and confidence

Compiled on 25 November 2026 (Hong Kong Time, UTC+8). Sources were checked by web search and page fetch. Updated the same day after the substance review (`SUBSTANCE-REVIEW-v1.md`): new IDs `VTC-RFM`, `HA-ABBR`, and `ARCHSD-TC` were added, and the conflict notes were aligned with the locked patches. Updated again the same afternoon after the dictionary owner answered the three lock questions: ID `SITE-ATTEST-20261125` was added, and 地盤三寶 sense 3 and 大力佬 sense 2 were locked as site speech. This is still not a finished scholarly glossary. No workplace-specific material, project identifiers, or personal names were used.

## Source IDs used in `data.csv`

### Professional body / education

| ID | Source | What it is good for | Limits |
|---|---|---|---|
| `HKIE-2012` | Hong Kong Institution of Engineers, 師傳薈, 「工程潮語卡」, published 2012. Text as transcribed on *Life of a Worker* (23 February 2012): http://lifeofaworker.blogspot.com/2012/02/blog-post_23.html | Attested HKIE-published slang-to-English / slang-to-formal-Chinese pairs, including 幫辦 / 工程督察 / inspector of works, 草鞋底, 嘩佬, 九線掣, 寶路華, 有氣, 三沙, 膠批, K批, 盲餅, 蝦片, 篩尾泥, 石頭皮, 燒炮, 龍, 判頭, 拾仔. | The blog transcribes a card set; the original cards are image-based and the public copy may be incomplete. A commenter describes it as an HKIE copy. Still the best professional-institution slang list found. |
| `VTC-IOW` | Vocational Training Council, Occupation Dictionary, *Inspectors of Works*: https://occupation-dictionary.vtc.edu.hk/occupation/inspectors-of-works (Chinese listing also appears as 工程檢查員). | Official occupation description of Inspector of Works: inspects building and civil works (including maintenance) for conformity with contracts, drawings, specifications, workmanship and legislation. Also confirms Green Card / worker-registration expectations when on site. | Describes the occupation, not the slang 幫辦. Chinese occupation title varies (工程督察 in slang cards and career articles; 工程檢查員 on the VTC Chinese listing). |
| `VTC-FM` | VTC Occupation Dictionary, 地盤管工 / Site Foremen: https://occupation-dictionary.vtc.edu.hk/tc/occupation/site-foremen | Official description of a site foreman (管工): supervises and coordinates workers; receives and checks materials, under a general foreman. | Does not itself use the slang 科文. |
| `VTC-RFM` | VTC Occupation Dictionary, 索具工 (叻㗎) / 金屬模板裝嵌工: https://occupation-dictionary.vtc.edu.hk/tc/occupation/riggers-metal-formwork-erectors | Official occupation title and duties: rigger and metal-formwork erector as one combined trade (slinging / lifting equipment, and erecting large metal formwork). | Occupation dictionary, not a slang list. Supports the official mapping for 大力佬 / 叻架佬; does not itself use those slang forms except 叻㗎 in the title. |
| `XLB` | 小魯班, 《圖則縮寫天書》 (v5.2, 309 entries), https://xiaoluban-hk.com/books/drawingbook | A contemporary Hong Kong compiled glossary of drawing abbreviations, official titles, and site slang (陣, 科文, 落石屎, 執漏, 入伙紙, 施工同意書, TCP, WIR, FS/FD clashes, trades, etc.). Useful for pairing slang with drawing marks. | Secondary compiled product, not a government glossary. The site itself warns that drawing abbreviations are not fully standardised and that the legend on the actual drawing governs. Used as supporting evidence, not as the sole authority for statutory titles. |
| `ARCHSD-GS` | Architectural Services Department, *General Specification for Building Services Installation in Government Buildings of the HKSAR*, 2022 Edition (with later corrigenda). Landing / PDF via https://www.archsd.gov.hk/ | Confirms that AHU, FCU, MVAC and related formal English equipment names are standard Hong Kong government building-services wording, not invented slang. | A specification, not a slang dictionary. Chinese equipment names follow the specification / Xiaoluban pairing. |
| `ARCHSD-TC` | Architectural Services Department, Testing and Commissioning Procedure series for government-building installations. Example landing page (emergency generator): https://www.archsd.gov.hk/tc/publications-publicity/t-c-procedure-for-emergency-generator-installation.html | Confirms that T&C is official Hong Kong government building-services English (Testing and Commissioning Procedures). The Chinese series title on that page is 測試及運作程序. | A procedure series, not a slang dictionary. Official Chinese wording may vary by document; do not flatten it to a single invented phrase. |
| `HAD-WG` | Home Affairs Department organisation note on Works Grades, including Inspector of Works and Works Supervisor grades: https://www.had.gov.hk/en/about_us/responsibilities/chart23.htm | Confirms that Inspector of Works and Works Supervisor are distinct government works grades. | Department-specific organisation chart, not a slang source. Used to keep Inspector of Works and Works Supervisor distinct. |
| `HA-ABBR` | Housing Authority / LegCo-published abbreviations list, *Architectural Manual on Site Inspection of Building Works*: https://www.legco.gov.hk/yr02-03/english/sc/sc_bldg/reports/rpt_1/name.pdf | Bilingual official titles: IOW = 工程督察 / Inspector of Works; COW = 工程監督 / Clerk of Works; WS = 監工 / Works Supervisor (also AIW, ACW, etc.). | An abbreviations list from a Housing Authority site-inspection manual, as published in a LegCo report. Used only to lock official English/Chinese title pairs, not as a slang source. |

### Government — labour, registration, safety

| ID | Source | What it is good for | Limits |
|---|---|---|---|
| `LD-MBST` | Labour Department, 強制性基本安全訓練課程（俗稱「平安卡」）: https://www.labour.gov.hk/tc/osh/content5_2a.htm | Official name of the mandatory basic safety training course, colloquially 平安卡. | Course-provider page; certificate legal basis is also in the FAQ / Cap. 59. |
| `LD-FAQ` | Labour Department OSH FAQ, including 平安咭 validity and renewal: https://www.labour.gov.hk/tc/faq/oshq4_whole.html | Certificate popularly called 平安咭; required for employment on construction work or container handling; validity 1–3 years as marked (default 3 years); renewal by recognised revalidation course. Also notes a past arrangement aligning worker-registration card and Green Card expiry. | FAQ language uses both 平安卡 and 平安咭. |
| `CAP59Z` | *Factories and Industrial Undertakings (Safety Officers and Safety Supervisors) Regulations* (Cap. 59Z). See also Labour Department / DevB site-safety personnel guidance, e.g. DevB Construction Site Safety Manual Chapter 7. | Statutory duty to employ a safety supervisor where 20 or more workers are directly employed (counting rules differ for principal and specialist contractors); Registered Safety Officer regime. | The 20-worker rule is often slightly over-simplified in career articles; the dataset note follows the regulation more carefully than the slang articles do. |
| `CIC-CWR` | Construction Industry Council, Construction Workers Registration (工人註冊; 大工 / 中工 qualifications): https://www.cic.hk/zh-hk/registrations/construction-workers-regi/application and recognised qualifications pages; *Construction Workers Registration Ordinance* (Cap. 583). | Official names: Construction Workers Registration Card (建造業工人註冊證); Registered Skilled Worker (註冊熟練技工, 大工); Registered Semi-skilled Worker (註冊半熟練技工, 中工). | CIC pages are administrative; they do not treat 大工／中工 as slang, but the short names are what sites use. |
| `HKIC-SILVER` | Hong Kong Institute of Construction (under CIC), 建造工友（指定行業）安全訓練課程（銀卡課程）: e.g. https://www.hkic.edu.hk/zh-hk/programmes/safety-training/aswz | Official course title behind 銀卡, including specified-trade modules such as A12 slinging and signalling. | Course catalogue, not a general slang article. Early informal articles sometimes under-described 銀卡 as only a lifting card. |

### Government — buildings, water, electricity, fire

| ID | Source | What it is good for | Limits |
|---|---|---|---|
| `BD-PROF` | Buildings Department, Building Professionals (AP / RSE / RGE / RI): https://www.bd.gov.hk/en/resources/registration-guides/index_building_professionals.html | Official English and statutory basis for Authorized Person, Registered Structural Engineer, Registered Geotechnical Engineer, Registered Inspector. | English page used; official Chinese titles are the standard BD equivalents (認可人士, 註冊結構工程師, 註冊岩土工程師, 註冊檢驗人員). |
| `BD-RGBC` | Buildings Department, Registered General Building Contractors and Registered Specialist Contractors: https://www.bd.gov.hk/en/resources/registration-guides/index_RGBS_RSC.html | Official titles RGBC and RSC. | Administrative registration guide. |
| `BD-FORMS` | Buildings Department forms lists, including new building / A&A forms: https://www.bd.gov.hk/en/resources/forms/form_nbw.html ; and Practice Note APP-60 on specified forms. | Official form numbers and descriptions: BA8 (consent to commence), BA12 (temporary occupation), BA13 (completion / OP application). | Form titles are long; the dataset shortens spoken names (開工紙, 入伙紙) and keeps official English in the `english` column. |
| `BD-APP78` | Buildings Department, PNAP APP-78, *Occupation of New Buildings*, Buildings Ordinance s.21. PDF via https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/signed/APP078se.pdf | OP must be processed within 14 days; BA13 is the formal application; inspection practice. | Practice note, not slang. |
| `CAP123` | *Buildings Ordinance* (Cap. 123) and the Code of Practice for Site Supervision (2009, later revision cited in Xiaoluban as 2024). | Statutory backbone for AP/RSE/RGE, consent, occupation permit, supervision plan, TCP. | Cited at ordinance / code level; individual section numbers are given in notes only where a practice note states them (e.g. s.21 for OP). |
| `WSD-LP` | Water Supplies Department, 持牌水喉匠 / Licensed Plumber: https://www.wsd.gov.hk/tc/plumbing-engineering/licensed-plumbers/ | Official title Licensed Plumber (持牌水喉匠) under the Waterworks Ordinance (Cap. 102). | Directory / practice-guide context. |
| `WSD-WWO46` | Water Supplies Department, Form WWO 46, *Application for constructing, installing, altering or removing an inside service or fire service*: https://www.wsd.gov.hk/filemanager/en/share/pdf/wwo46e.pdf | Official form title used constantly on plumbing and fire-main packages. | Form filling instructions are out of scope for the dictionary. |
| `EMSD-REW` | Electrical and Mechanical Services Department, registering as an electrical worker: https://www.emsd.gov.hk/en/electricity_safety/how_to_apply/registering_as_an_electrical_worker/index.html ; Form 8. | Official title Registered Electrical Worker; grades A/B/C/H/R are the grades discussed on site. | Grade duties are not copied in full; the entry only flags that grades exist. |
| `EMSD-WR1` | EMSD Form WR1, Work Completion Certificate (表格 WR1 完工證明書): https://www.emsd.gov.hk/filemanager/en/share/electricity_safety/public_forms/wr1.pdf and the specified-forms list: https://www.emsd.gov.hk/en/electricity_safety/how_to_apply/specified_forms/index.html | Official electrical completion certificate. | — |
| `EMSD-WR2` | EMSD Form WR2, Periodic Test Certificate (表格 WR2 定期測試證明書). | Official periodic test certificate, distinct from WR1. | — |
| `FSD-FS251` | Fire Services Department circulars and FAQ on F.S. 251, *Certificate of Fire Service Installations and Equipment* (including Circular Letter No. 5/2025 on the revised form). Start from https://www.hkfsd.gov.hk/ | Official certificate issued by an RFSIC after FSI work; copy to FSD. Submission arrangements have been changing (online system). | Always re-check the circular in force before describing *how* to submit. The dictionary records the existence and name of the form, not a filing procedure. |
| `FSD-RFSIC` | Fire Services Department, Registered Fire Service Installation Contractor register: https://www.hkfsd.gov.hk/rfsic/ | Official contractor title RFSIC (註冊消防裝置承辦商). | Register search page, not a glossary. |

### Career / trade articles (Hong Kong, informal but useful for slang)

| ID | Source | What it is good for | Limits |
|---|---|---|---|
| `CTGJ-2026` | CT求職戰略師, CT Good Jobs, 「20個建築工程職位及招聘行業術語…蛇頭蛇佬蛇仔…地盤三寶」, published / updated 4 May 2026: https://cthr.ctgoodjobs.hk/HRInsight/… (full URL in the working notes). | A compact, recent Hong Kong career-site list: 皇家佬, 英展, 幫辦, 判頭, 蛇頭, 蛇仔, 叻架佬, 蛇佬, 科文, 老總, 安督, 電王, 墨王, 大偈, 阿姐, CID, 地盤三寶 (document sense), 銀卡, 大工, 中工, 白紙 / 企鵝 as recruitment phrases. | Journalism, not a statutory glossary. Folk etymology (e.g. Qing-dynasty 幫辦) is reported as such, not treated as historical proof. The 銀卡 description is broader and closer to the official course than some earlier informal articles. |
| `JOBSDB-2018` | Jobsdb content team, 「地盤佬日誌：地盤術語」, updated 9 October 2018: https://hk.jobsdb.com/zh/career-advice/article/地盤佬日誌地盤術語 | Clear explanations of job-ad slang (白紙, 齊三寶 as the three documents, 企鵝 / 消防員 / 飛機師, 洗手出糧) and of 寶路華, 貓仔 (Bobcat-type compact loader), 開士機, 叻架佬／大力佬 (rigger), 雞頭, 天秤. Author identified on the page as a Hong Kong site engineer writing under a pen name. | A short popular article, not exhaustive. 大力佬 is treated only as rigger here, which conflicts with another source. |
| `PONEWS-1` | 浪子老火, 「分享香港建築業之：炒散生活要懂的術語」, 13 April 2021: https://www.ponews.net/immigration/ttoftx1ynj.html | A long workers’-oriented slang list (documents, gates, trades, 草鞋, 科文, 老總, attendance slang, materials). Valuable for everyday spoken forms. | Informal blog-style article aimed at Mainland workers arriving on Hong Kong sites. Some items are single-source; a few written forms look phonetic (later flagged). One sense of 大力佬 (metal formwork) conflicts with JobsDB / CT Good Jobs. Early 銀卡 wording in this piece is narrower than the official specified-trade course. |
| `PONEWS-2` | 浪子老火, 「分享香港建築業之：炒散生活要懂的術語（二）」, 15 April 2021: https://www.ponews.net/news/8muhn45eh2.html | Second list: 風火水電, BS, 開士機, 人𨋢, structural slang (陣, 趷雞, 吊牆, 大砧板), 幫辦, 皇家佬, 有氣／水氣, plant nicknames, etc. | Same informal character as part 1. Some characters are non-standard (吼 for 窿, 馬蹓頭 for 馬騮頭). Definitions were kept close to the source and marked `medium` or `low` when only this article attests them. |

An unofficial Mainland reprint of PONEWS-1 (nibaku.com, 2024) was seen but not used as an independent authority.

### Noted but not used as a primary slang source

- Development Bureau, 《香港建造業常用英漢詞彙》: https://www.devb.gov.hk/tc/publications_and_press_releases/publications/glossary_of_terms/index.html — a large official *translation* glossary, not a slang list. Worth mining in a later pass for formal Chinese/English pairs.
- CIC BIM Dictionary 2024 — BIM-specific; out of scope for this first site-talk list.
- Labour Department specified-trade / confined-space course lists — used indirectly via HKIC and PONEWS-1, not harvested entry-by-entry.

### Owner site attestation

| ID | Source | What it is good for | Limits |
|---|---|---|---|
| `SITE-ATTEST-20261125` | Dictionary-owner confirmation of Hong Kong site usage, 25 November 2026 (Hong Kong Time, UTC+8). The public dataset records the date and the fact of attestation only; no personal name is stored in `data.csv`. | Locks two site-speech senses that published sources in the earlier pass did not securely attest: 地盤三寶 as 安全帽、安全帶、安全鞋; and 大力佬 used loosely for a strong general labourer. Also records acceptance of the sensitive-slang public default. | Single-attestation, so those two senses are **medium** confidence. Does not create official titles. A later published Hong Kong source can upgrade confidence. |

## Confidence policy

- **High.** An official Hong Kong government, CIC, VTC, or professional-body source; or two or more independent Hong Kong sources agree on the core meaning.
- **Medium.** A single reasonably careful Hong Kong trade or compiled source; or an official meaning with only a thin slang mapping; or a written form that may vary; or a site-speech sense locked on a single owner attestation (`SITE-ATTEST-20261125`).
- **Low.** Single informal source plus an uncertain written form, or a meaning that still needs a second attestation (in this file: 佛沙, 飛土).

`medium` is not a rejection. Many genuine site words only appear in informal lists. They are included, but marked, so a later pass can upgrade or drop them.

## What is well attested

- Justin’s example **幫辦 = Inspector of Works / 工程督察** is independently attested by the HKIE card set, CT Good Jobs (2026), and the 2021 trade article, and the official occupation exists in the VTC dictionary and government works grades.
- Core role slang: 科文, 判頭 / 拾仔, 英展, 皇家佬, 老總, 安督, 叻架佬.
- Safety documents: 平安卡 / Green Card (Labour Department), 工人註冊證 and 大工／中工 (CIC), 銀卡 (HKIC/CIC official course title).
- Statutory building and BSE titles and forms: AP, RSE, RGE, RI, RGBC, RSC, OP / 入伙紙, consent / 開工紙, BA8, BA13, Licensed Plumber, WWO 46, REW, WR1/WR2, RFSIC, FS 251.
- Widely repeated site words: 石屎, 落石屎, 花鐵, 草鞋底, 寶路華, 開士機, 天秤, 雞頭, 陣, 風火水電.

## Known conflicts and hearsay (do not flatten)

1. **地盤三寶.** Three locked senses: (A) recruitment / career / union sources: HKID + Green Card + Construction Workers Registration Card; (B) Xiaoluban, and JobsDB as 基本個人防護三寶: safety helmet, safety shoes, reflective vest (sometimes including the Green Card); (C) helmet, safety harness and safety shoes, locked as Hong Kong site speech on `SITE-ATTEST-20261125` (medium). A published HK source using that exact name as 地盤三寶 was not found in the earlier review pass. Do not merge the three. See `SUBSTANCE-REVIEW-v1.md`.
2. **大力佬.** Two locked senses: (1) official CIC / VTC occupation, one combined trade 索具工（叻㗎）／金屬模板裝嵌工 (Rigger / Metal Formwork Erector) — JobsDB, Xiaoluban and career lists point at this trade; a 2021 article emphasises the metal-formwork side; not two official titles, and not a crane operator; (2) loose site speech for a strong general labourer (大力雜工), locked on `SITE-ATTEST-20261125` (medium), with **no** official title and no 1:1 map to 雜工 / CID. See `SUBSTANCE-REVIEW-v1.md`.
3. **幫辦 vs Inspector of Works vs Works Supervisor vs Clerk of Works vs 皇家佬.** Related inspection / supervision roles, not automatic synonyms. Official pairs locked in the substance review: Inspector of Works = 工程督察; Works Supervisor = 監工; Clerk of Works = 工程監督. 皇家佬 is slang, not a title. See the 幫辦 note in `data.csv`.
4. **貓仔.** JobsDB is more precise (compact Bobcat-type loader). PONEWS-2 says “small bulldozer.” The entry follows JobsDB and flags the looser wording.
5. **銀卡.** Prefer the official specified-trade course title. Do not reduce it to “lifting card only.”
6. **有氣 and 水氣.** Both used for “electrically live.” 有氣 is on the HKIE cards; 水氣 is in PONEWS-2. Treated as alternatives, not as two electrical states.
7. **Abbreviation clashes** now split as sense-rows where attested: FS (Fire Services / flat slab / far side / survey foresight); FD (fire damper / floor drain); BA (Building Authority only, as a locked sense); SP (sprinkler / Supervision Plan / soil pipe); BS (Building Services / British Standard / survey backsight); BM (beam / benchmark).

## Gaps for a later pass

- The HKIE 工程潮語卡 set is only partly transcribed in public HTML; a complete card-by-card capture would add more high-quality slang.
- The DevB bilingual construction glossary has not yet been mined.
- Spoken **building-services** slang is thinner in public sources than structural / labour slang. The substance review added T&C, BWIC, DB and abbreviation-clash headwords from attested sources; more plant-room nicknames (chillers, ducts, BMS/CCMS, isolation, flushing, pressure test, MSFD/VCD and grille marks) still need a later pass or a cited specification page.
- A few occupational nicknames (蛇頭, 蛇仔, CID, 炮王) rest on a single career article and should be confirmed.
- Romanisation is Jyutping added by the compiler, not printed in the sources. Readings should be checked by a Cantonese-speaking reviewer before any audio or teaching use.
- No trade-union word lists or contractor in-house glossaries were available as public documents.
- Sensitive slang: the public default was accepted on 25 November 2026 — drop 咖喱 from the public dataset, filter 飛土, and keep 爛仔會 only as a pejorative alias in the 判頭會 note, not as a look-up lemma. See `SUBSTANCE-REVIEW-v1.md` and `held-back-sensitive.md`.

