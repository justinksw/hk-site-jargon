# 香港地盤用語

Phone-first public dictionary of Hong Kong engineering-site jargon. This branch is the preview build. The page keeps the 「預覽版本」 banner.

The site at the repository root loads only `data.csv` from the same origin. `schema.md`, `sources.md`, `report.md`, `SUBSTANCE-REVIEW-v1.md`, `briefs/`, and `mocks/` are provenance. The page does not fetch them.

## Local preview

From the repository root:

```bash
python3 -m http.server 4173
```

Open the site root. Reproducible query parameters: `q`, `cat`, `char`, `term`, `id`, `sensitive`, `chars`.

Leave `data.csv` unchanged in this preview.
