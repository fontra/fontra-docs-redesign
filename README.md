# Fontra docs redesign

Notes, analysis, and draft deliverables about **[Fontra](https://fontra.xyz)** — the open-source, browser-based, variable-first font editor — and how to grow its user base.

This repo came out of a working session (June 2026) that started with one question — *what is Fontra's philosophy?* — and kept pulling the thread: how the Workflow engine works, what friendlier UX for it could look like, and which documentation would bring more users in. The analysis is grounded in Fontra's actual source code (claims were verified against [`fontra/fontra`](https://github.com/fontra/fontra) at commit `e86dc88` and `main`), its [docs](https://docs.fontra.xyz), [blog](https://blog.fontra.xyz), and the ATypI 2023 slides. Drafted with AI assistance, directed and reviewed by a human who knows where the bodies are buried.

**Status: draft for internal discussion.** Nothing here is official Fontra documentation. Every document ends with open questions inviting feedback.

---

## Repo map

### `understanding/` — what Fontra is

| Document | Contents |
|---|---|
| [philosophy.md](understanding/philosophy.md) | Fontra's five design commitments: variable-first, browser as cross-platform layer, strict separation of concerns, interoperate-don't-capture, community sustainability |
| [workflow-analysis.md](understanding/workflow-analysis.md) | A close reading of `src/fontra/workflow`: the pull-based pipeline engine, its action vocabulary, and why it's the project's best-kept secret |

### `workflow/` — the Workflow engine, documented and extended

| Document | Contents |
|---|---|
| [documentation.md](workflow/documentation.md) | **Draft user documentation**: CLI reference, concepts (steps, lazy pull, merge semantics, templating), complete action reference (core + fontra-compile), 9 recipes, writing your own actions, troubleshooting |
| [extensions.md](workflow/extensions.md) | Proposed extensions: 9 new actions (`rename-glyphs`, `validate`+`report`, mark-feature generation…), 8 engine features (introspection, `--watch`, persistent cache…), 3 ecosystem plays — with an impact/effort prioritization |
| [ux.md](workflow/ux.md) | Would Workflow need a UI? A layered answer: invisible fixes first, then a **Workflow view** inside Fontra — step stack, schema-generated inspectors, and a per-step font preview pin |
| [ui-mockup.html](workflow/ui-mockup.html) | **Clickable mockup** of that Workflow view. Select steps, drag the Weight slider, move the preview pin, toggle the YAML drawer, hit Run. Static — no engine behind it |

> 🖱 **Try the mockup:** open [`workflow/ui-mockup.html`](workflow/ui-mockup.html) in a browser, or visit
> `https://fontra.github.io/fontra-docs-redesign/workflow/ui-mockup.html`

## Building the site

The published site (the root hub, the docs-redesign prototype, and the Workflow
mockup) is built with [Eleventy (11ty)](https://www.11ty.dev/) — the same
generator as fontra-blog and the proposed fontra-docs migration:

```
npm install
npm start        # live-reloading dev server
npm run build    # production build in _site/
```

Pushes to `main` are deployed to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
(the repo's Pages settings must be set to "GitHub Actions").
The written documents (`understanding/`, `workflow/*.md`, `strategy/`,
`drafts/`) are repo documents, not site pages — read them on GitHub.

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
- **"I produce fonts and want the pipeline"** → `understanding/workflow-analysis.md` → `workflow/documentation.md`
- **"How do we get more users?"** → `strategy/documentation-strategy.md` → the `drafts/`
- **"Show me something fun"** → `workflow/ui-mockup.html`, then `workflow/ux.md` for why it looks that way

## Conventions

- **⚠** marks a claim that should be verified against the current Fontra builds/UI before publishing.
- **🎬** marks a placeholder for a 10–20 second screen recording (the docs strategy argues every how-to should open with one).
- Code-level statements cite the module they were read from; the Workflow material was verified against `fontra/fontra@e86dc88` and `fontra-compile@main`.

## Contributing / feedback

Open an issue or PR — or pick any document and answer the *open questions* at its end. The drafts in `drafts/` are intended to eventually graduate, in some form, to [fontra-docs](https://github.com/fontra/fontra-docs) (CC BY 4.0), so feedback that moves them closer to publishable is the most valuable kind.

## License

CC BY 4.0
