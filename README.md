# 香港地盤用語

Phone-first public dictionary of Hong Kong engineering-site jargon. This branch is the preview build. The page keeps the 「預覽版本」 banner.

The published site lives in `docs/` and loads only `data.csv` from the same origin.

## Local preview

From `docs/`:

```bash
python3 -m http.server 4173
```

Open the site root. Reproducible query parameters: `q`, `cat`, `char`, `term`, `id`, `sensitive`, `chars`.

Leave `data.csv` unchanged in this preview.
