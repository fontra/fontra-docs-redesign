# docs.fontra.xyz — redesign prototype

A navigable, static prototype proposing an update to [docs.fontra.xyz](https://docs.fontra.xyz) in both **shape** (information architecture + visual design) and **content** (what's written, and what's missing).

**Start here:** run `npm install && npm start` at the repo root and open
`http://localhost:8080/docs-redesign/`. The prototype is built with
[Eleventy (11ty)](https://www.11ty.dev/) — the same toolchain as fontra-blog
and the proposed fontra-docs migration — so its templates and content
conventions can graduate into the real docs site without a rewrite.

Each page is an `.html` template with YAML front matter (`title`,
`top`/`active` for the highlighted nav entries); the shared chrome is
rendered at build time from `_data/nav.js` through `_includes/` and
`_layouts/` at the repo root.

## What's in the prototype

| Page | Demonstrates |
|---|---|
| `index.html` | Home: three-audience "doors", featured cards, mock search |
| `get-started.html` | Section hub template |
| `tutorial-first-font.md` | **Tutorial page template** (Markdown) — video blocks, numbered steps, checkpoints, on-this-page TOC, prev/next |
| `reference.html` · `reference-axes.md` · `reference-plugins.md` | **Reference hub + page template** (Markdown) — tables, see-also, scroll-spy TOC |
| `writing-plugins.md` | **Guide template** — a complete how-to for developers, paired with its reference page |
| `learn.html` · `guides.html` · `explanations.html` | Hub templates for the Diátaxis quadrants |
| `workflow.html` | Proposed new section for the Workflow CLI (currently undocumented) |
| `migrate.html` | Proposed new section: Rosetta-stone pages for Glyphs/RoboFont users |
| `about-redesign.html` | **The written rationale** — what changed and why, and how it would be built |

## Design system

- `assets/style.css` — themeable via CSS variables, light + dark, responsive. Defaults are Fontra's identity: Fontra red, the Fontra icon (`assets/img/`), Inria Sans (`assets/fonts/`, Fontra's UI typeface, SIL OFL, both copied from [fontra/fontra](https://github.com/fontra/fontra)).
- `assets/app.js` — theme toggle, mobile nav, mock search (⌘K), heading anchors, scroll-spy TOC.
- `../_data/nav.js` + `../_includes/topbar.html` / `sidebar.html` + `../_layouts/` — the shared topbar + sidebar, rendered at build time. A page selects its highlighted entries with `top:` / `active:` front matter. (This replaces the former client-side `assets/nav.js` injection; all pages now share the same chrome, including `index`, `get-started` and `tutorial-first-font`, which used to hardcode it.)

## Conventions

- Striped **video** placeholders = where a 10–20 s screen recording goes.
- The **verify** tag = a claim to verify against the current app before publishing.
- Every page has a `status:` — **Written** (real content, to review) or **Planned** (outline only) — shown in the sidebar, on hub cards, on the home page and in the status table of [`about-redesign.html`](about-redesign.html#status). Planned cards are not links.
- No emoji: titles and hierarchy carry the structure; the only pictograms are the inline SVG icons of the chrome.

## Status

First draft for discussion. Copy is written but needs a review pass; the IA and page templates are the substance to react to. See [`about-redesign.html`](about-redesign.html) for the full proposal.
