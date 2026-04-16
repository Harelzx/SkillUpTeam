# OG cover image — needed

Produce `og-cover.png` in this directory with these specs:

- **Size:** 1200×630 (exact)
- **Format:** PNG (JPG also acceptable; update `layout.tsx` og image path if changed)
- **Content:** SkillUp logo, Hebrew headline "מורה פרטי בקליק", brand gradient background.
- **Safe area:** keep text ≥ 60px from all edges (Twitter/LinkedIn/iMessage crop differently).
- **Weight:** ≤ 300KB for fast social unfurl.

Path referenced in:
- `src/app/layout.tsx` → `openGraph.images[0].url` and `twitter.images[0]`

Once the file is dropped here, OG previews start working — no code changes needed.
