# Fontra Docs

The documentation site of **[Fontra](https://fontra.xyz)** — the open-source, browser-based, variable-first font editor — plus the notes and strategy documents it grew out of.

This repo came out of a working session (June 2026) that started with one question — *what is Fontra's philosophy?* — and kept pulling the thread: how the Workflow engine works, what friendlier UX for it could look like, and which documentation would bring more users in. The analysis is grounded in Fontra's actual source code (claims were verified against [`fontra/fontra`](https://github.com/fontra/fontra) at commit `e86dc88` and `main`), its [docs](https://docs.fontra.xyz), [blog](https://blog.fontra.xyz), and the ATypI 2023 slides. Drafted with AI assistance, directed and reviewed by a human who knows where the bodies are buried.

**Status:** the site (`docs-redesign/`) is live documentation in progress: written pages are drafts to review against the current Fontra build, planned pages are outlines marked as such. The repo documents (`understanding/`, `strategy/`, `drafts/`) are working notes; each ends with open questions inviting feedback.

---

## Repo map

### `understanding/` — what Fontra is

| Document | Contents |
|---|---|
| [philosophy.md](understanding/philosophy.md) | Fontra's five design commitments: variable-first, browser as cross-platform layer, strict separation of concerns, interoperate-don't-capture, community sustainability |

### Workflow UI: moved to its own repository

The Workflow engine analysis, the draft Workflow documentation, the proposed extensions and the clickable mockup of a graphical Workflow view now live in [fontra-workflow-ui](https://github.com/fontra/fontra-workflow-ui), where the view is being built as a Fontra extension. They moved with their history.

## Building the site

The published site (the root hub and the docs site) is built with [Eleventy (11ty)](https://www.11ty.dev/) — the same
generator as fontra-blog and the proposed fontra-docs migration:

```
npm install
npm start        # live-reloading dev server
npm run build    # production build in _site/
```

Pushes to `main` are deployed to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
(the repo's Pages settings must be set to "GitHub Actions").
The written documents (`understanding/`, `strategy/`, `drafts/`) are repo documents, not site pages — read them on GitHub.

### `strategy/` — growing the user base

| Document | Contents |
|---|---|
| [documentation-strategy.md](strategy/documentation-strategy.md) | The plan: three audiences (beginners, migrants, engineers), three doors; time-to-first-glyph tutorial, video-first how-tos, Workflow cookbook, Rosetta-stone pages, zero-install demo — with sequencing and metrics |
| [zero-install-deployment.md](strategy/zero-install-deployment.md) | Deployment plan for a public `try.fontra.xyz`: a read-only showcase (days) and ephemeral sandboxes (weeks), plus the three real blockers found in the source — path handling, missing server-side export, no tenancy |

### `drafts/` — strategy made concrete

Ready-to-review drafts of the user-facing pages the strategy calls for:

| Document | Contents |
|---|---|
| [tutorial-your-first-variable-font.md](drafts/tutorial-your-first-variable-font.md) | The beginner tutorial: download → two glyphs from primitive shapes → Weight axis → second source → live interpolation → exported, installable variable font. Under 30 minutes, zero prior knowledge |
| [fontra-for-glyphs-users.md](drafts/fontra-for-glyphs-users.md) | Rosetta stone for Glyphs users: vocabulary map (masters→sources, brace layers→glyph sources, smart components→variable components…), shortcuts, honest gaps, zero-risk side-by-side workflow |
| [fontra-for-robofont-users.md](drafts/fontra-for-robofont-users.md) | Rosetta stone for RoboFont users: shared UFO/designspace model, precision auto-reload, what scripting users will miss (and what Workflow already covers) |

---

## Suggested reading paths

- **"What is Fontra, really?"** → `understanding/philosophy.md`
- **"I produce fonts and want the pipeline"** → the Workflow section of the docs site, and [fontra-workflow-ui](https://github.com/fontra/fontra-workflow-ui) for the engine analysis
- **"How do we get more users?"** → `strategy/documentation-strategy.md` → the `drafts/`
- **"Show me something fun"** → the mockup in [fontra-workflow-ui](https://github.com/fontra/fontra-workflow-ui)

## Conventions

- In the repo documents, **⚠** marks a claim that should be verified against the current Fontra builds/UI before publishing, and **🎬** a placeholder for a 10–20 second screen recording (the docs strategy argues every how-to should open with one). On the site, the same two things are the `verify` tag and the striped video placeholder; the site itself uses no emoji.
- Every site page declares `status: ready` (written) or `status: planned` (outline only) in its front matter; only planned pages are marked (sidebar, hub cards, page banner, *About these docs*). See [MAINTENANCE.md](MAINTENANCE.md).
- Code-level statements cite the module they were read from.

## Contributing / feedback

Open an issue or PR — or pick any document and answer the *open questions* at its end. The drafts in `drafts/` are intended to eventually graduate, in some form, to [fontra-docs](https://github.com/fontra/fontra-docs) (CC BY 4.0), so feedback that moves them closer to publishable is the most valuable kind.

## License

CC BY 4.0
