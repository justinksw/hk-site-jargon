# HANDOFF — 香港地盤用語 PREVIEW v1

Date: 2026-11-25 (HKT). From Jessie. Report to Sua. Do not contact Justin.

- Repo: justinksw/hk-site-jargon (public, new hub — not bse-notes / bse-tools)
- Display name: 香港地盤用語 (tab + header). Never show the repo name on the page.
- Branch: preview-hk-site-jargon-v1. Keep a clear PREVIEW badge/banner.
- HOLD LIVE: do not merge to main, do not drop the PREVIEW badge, do not force-push main, do not delete the preview branch.
- Substance authority: SUBSTANCE-REVIEW-v1.md. Do not change data.csv contents.
- Runtime: load only the public data.csv (UTF-8 BOM, 199 rows / 186 headwords). Never load held-back-sensitive.md (that file must not be in this repo), sources.md, or any hidden lexicon at runtime.
- Search only: term / alt_terms / formal_zh / english / spoken_form. Never search note, jyutping, or sources.
- One row = one sense; all senses for a headword must be visible together.
- 飛土 hidden by default; warn, then reveal. 咖喱 must never appear on the public page, in search, samples, or screenshots. 爛仔會 is not a headword and must not enter the alias index (search yields no results).
- UI: Traditional Chinese. Official titles stay in English. No Japanese UI. No login, TTS, or print-only layout in v1.
- Hard-ban in UI, test fixtures that render, and screenshots: hospital names, QEH, Block T, operating theatres, project IDs, personal names.
- Mock under mocks/ is visual reference, not production app code. Implement a static GitHub Pages site at the repo root (index.html + assets + data.csv). Preserve the brief’s reproducible query params.
- Author and committer of every commit: justinksw <justinksw@users.noreply.github.com> only.
- If a Pages API PUT returns 403, report it and stop; Jessie will point Pages at the preview branch.
