# Fontra Docs — redesign preview

Preview at [fontra.github.io/fontra-docs-redesign](https://fontra.github.io/fontra-docs-redesign/).

This repository is the **redesigned [fontra-docs](https://github.com/fontra/fontra-docs)**:
the full content of docs.fontra.xyz (every page, at the same URL), with a new
theme and navigation, plus the new pages written for the redesign. It is a
copy of fontra-docs with the redesign applied, published here for review;
once agreed, the same commit goes to fontra-docs as a pull request and this
site will redirect to docs.fontra.xyz.

Differences from fontra-docs are confined to `package.json` (the build sets
`PATH_PREFIX`, `SITE_URL` and `VIDEO_BASE`, because this preview lives under a
sub-path and uses the videos of the live site rather than carrying them) and
to the deployment workflow. Everything below applies to both.

Built with [Eleventy (11ty)](https://www.11ty.dev/) — the same generator as
[fontra-blog](https://github.com/fontra/fontra-blog).

## Building the site locally

Requires [Node.js](https://nodejs.org/) 18 or newer.

```
npm install
npm start
```

Then open the address shown in the terminal (usually `http://localhost:8080`).
The dev server rebuilds and reloads on every change.

To produce a production build in `_site/`:

```
npm run build
npm run check-urls   # verifies all expected URLs exist in _site/
```

## How the site is organized

- `content/` — all pages, as Markdown with YAML front matter, by section:
  `introduction/`, `get-started/`, `tutorials/`, `how-tos/`, `reference/`,
  `explanations/`, `migrate/`, `workflow/`, plus `index.html` (home) and
  `about.md`.
- `_data/nav.js` — **the one map of the site**: the top bar, the sidebar,
  the breadcrumb and the prev/next links are all rendered from this tree,
  keyed by page URL. Adding a page means adding its URL there, where it
  belongs. The build fails if a URL in the tree is not a page.
- `content/assets/` — `style.css` (light and dark, CSS variables), `app.js`
  (theme toggle, mobile sidebar, heading anchors, scroll-spy), `fonts/`
  (Inria Sans, the typeface of Fontra's interface).
- `_layouts/default.html` (every page), `_layouts/home.html` (the home
  page), `_includes/` — the templates (Liquid).
- `_data/site.js` — site-wide values (`site.url`, `site.title`, …).
- `images/`, `videos/` — static assets, copied as-is (this preview has no
  `videos/`: `VIDEO_BASE` points the players at docs.fontra.xyz).
- `eleventy.config.js` — build configuration: the navigation helpers, the
  `cardgrid` shortcode used by the hub pages, and a kramdown-compatibility
  layer (see comments there) so the Markdown written for the previous
  Jekyll setup renders unchanged (`{: .lead }`, `alert alert-primary`,
  definition lists, …; `style.css` maps those class names onto the
  current components).
- `scripts/check-url-parity.mjs` — asserts that every URL the site has
  ever served still exists in the build output, and that every link of
  the navigation tree resolves.

### Front matter

```
---
title: Page title
description: One sentence, shown on the cards that link to the page.
permalink: /section/page-name/
status: ready        # or `planned` for an outline that is not written yet
---
```

Permalinks are explicit and must not be changed casually — existing links
into docs.fontra.xyz depend on them (`npm run check-urls` guards this).
`layout` defaults to `default.html` and `status` to `ready`; a page marked
`planned` gets a badge in the sidebar, on hub cards and at its top, and is
listed on the About page.

### Writing conventions

- Headings carry the hierarchy; no emoji, no decorative pictograms.
- A claim that must be checked against the current Fontra build is tagged
  `<span class="verify">verify</span>`.
- `<div class="video">…</div>` is a striped frame marking where a short
  screen recording goes; real recordings are `<video>` elements from
  `videos/`.
- Hub pages list their pages with the `cardgrid` shortcode, one URL per
  line; title, description and status come from the linked page.

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

# Credits

[Gustavo Ferreira](https://github.com/gferreira) initiated this documentation
