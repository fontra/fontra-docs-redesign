# docs.fontra.xyz — redesign prototype

A navigable, static prototype proposing an update to [docs.fontra.xyz](https://docs.fontra.xyz) in both **shape** (information architecture + visual design) and **content** (what's written, and what's missing).

**Start here:** open [`index.html`](index.html) in a browser. Everything is plain HTML/CSS/JS — no build step, works from `file://` or GitHub Pages.

## What's in the prototype

| Page | Demonstrates |
|---|---|
| `index.html` | Home: three-audience "doors", featured cards, mock search |
| `get-started.html` | Section hub template |
| `tutorial-first-font.html` | **Tutorial page template** — video blocks, numbered steps, checkpoints, on-this-page TOC, prev/next |
| `reference.html` · `reference-axes.html` | **Reference hub + page template** — tables, see-also, scroll-spy TOC |
| `learn.html` · `guides.html` · `explanations.html` | Hub templates for the Diátaxis quadrants |
| `workflow.html` | Proposed new section for the Workflow CLI (currently undocumented) |
| `migrate.html` | Proposed new section: Rosetta-stone pages for Glyphs/RoboFont users |
| `about-redesign.html` | **The written rationale** — what changed and why, and how it would be built |

## Design system

- `assets/style.css` — themeable via CSS variables, light + dark, responsive.
- `assets/app.js` — theme toggle, mobile nav, mock search (⌘K), heading anchors, scroll-spy TOC.
- `assets/nav.js` — injects the shared topbar + sidebar so hub pages stay DRY (a page declares `data-active` / `data-top` and drops in `#chrome-top` / `#chrome-side`). The three richest pages (`index`, `get-started`, `tutorial-first-font`) hardcode their chrome instead, as worked examples.

## Conventions

- **🎬** striped placeholders = where a 10–20 s screen recording goes.
- **⚠** = a claim to verify against the current app before publishing.
- Links to `#` or marked **planned** are illustrative stubs, not dead ends by oversight.

## Status

First draft for discussion. Copy is written but needs a review pass; the IA and page templates are the substance to react to. See [`about-redesign.html`](about-redesign.html) for the full proposal.
