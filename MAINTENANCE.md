# Documentation maintenance manual

How the Fontra documentation sites are built, edited and published — written
for maintainers, no web-development background assumed.

This repo (**fontra-docs-redesign**) and the live docs repo
(**[fontra-docs](https://github.com/fontra/fontra-docs)**, on its
`eleventy-migration` branch) now share one architecture, so almost everything
in this manual applies to both. Differences are called out at the end.

---

## 1. The mental model

Three things turn into the published website:

1. **Content files** — one file per page, Markdown (`.md`) or HTML, each
   starting with a small *front matter* block (the lines between `---` at the
   top) that describes the page: its title, which nav entries light up, etc.
2. **Templates** — the shared "chrome" around every page: topbar, sidebar,
   `<head>`. They live in `_layouts/` and `_includes/`, and the sidebar's
   entries are listed in one data file, `_data/nav.js`.
3. **The build** — [Eleventy (11ty)](https://www.11ty.dev/) combines 1 + 2
   into plain HTML files in `_site/`. Nobody edits `_site/`; it is thrown away
   and rebuilt every time.

The key property: **content is separated from presentation**. Writing a docs
page never involves touching HTML chrome, and restyling the site never
involves touching content.

## 2. Day-to-day: editing a page

### The browser-only way (recommended for content work)

1. Navigate to the file on GitHub (e.g. `docs-redesign/install.md`).
2. Click the **pencil icon** (Edit this file).
3. Make your changes, use *Preview* to sanity-check the Markdown.
4. Commit. Either directly to `main`, or — for anything you'd like reviewed —
   choose *Create a new branch and start a pull request*.

That's it. Every push to `main` triggers the **deploy workflow**
(`.github/workflows/deploy.yml`): GitHub builds the site and publishes it to
GitHub Pages. The whole cycle takes about a minute; progress is visible in
the repo's **Actions** tab.

### The local way (recommended for anything structural)

Requires [Node.js](https://nodejs.org/) ≥ 18, once: `npm install`.

```
npm start        # dev server at http://localhost:8080, rebuilds + reloads on save
npm run build    # production build into _site/, exactly what CI does
```

Use this when changing templates, nav, CSS, or doing anything where you want
to *see* the result before committing.

## 3. Anatomy of a page

```markdown
---
title: "Install Fontra Pak · Fontra Docs"   ← browser tab title
layout: article.html                         ← Markdown pages always use this
top: get-started                             ← which TOPBAR entry is highlighted
active: install                              ← which SIDEBAR entry is highlighted
---

<div class="breadcrumb"><a href="index.html">Docs</a> › <a href="get-started.html">Get started</a> › Install Fontra Pak</div>

# Install Fontra Pak

Regular Markdown from here on…
```

Things to know:

- `top:` and `active:` are **ids**, not labels. They must match an `id` in
  `_data/nav.js`. Omit `top:` for sections that have no topbar entry
  (Migrate, Understand).
- Headings (`##`) automatically get ids and `#` anchor links, and feed the
  scroll-spy table of contents.
- Raw HTML is allowed inside Markdown — that's how breadcrumbs, callouts and
  video placeholders are done. Copy-paste these patterns from any existing
  page:
  - callout: `<div class="callout note"><div class="h">Heading</div><p>Text.</p></div>`
    (also `callout tip`, `callout warn`)
  - video placeholder: `<div class="video"><div class="play">▶</div><div class="cap">🎬 description</div></div>`
- Long pages can show an **"On this page"** column: list the sections in the
  front matter and give your headings matching ids (write those headings as
  one-line HTML so the anchor ids stay stable):

  ```yaml
  toc:
    - { id: add, label: "Adding an axis" }
    - { id: continuous, label: "Continuous", lvl3: true }
  ```

  ```markdown
  <h2 id="add">Adding an axis</h2>
  ```

  See `tutorial-first-font.md` or `reference-axes.md` for complete examples.

### Why a few pages are still `.html`

**All content pages are Markdown.** The remaining `.html` files are *design
surfaces*: the section hubs (`get-started`, `learn`, `guides`, `reference`,
`explanations`, `migrate`, `workflow`) and `about-redesign`. They consist
almost entirely of card grids — as Markdown they would be the same HTML with
a different file extension. Editing them is copy-paste of small repeating
blocks (a card is an `<a class="card">` element with a title and description
inside). Editing `.md` files is writing work; editing hubs is design work.

### The home page is data, not markup

`docs-redesign/index.html` contains **no HTML at all** — its entire content
(hero, the three doors, every card section) is YAML front matter, rendered by
`_layouts/home.html`:

```yaml
sections:
  - heading: Popular right now
    cards:
      - href: tutorial-first-font.html
        title: Your first variable font
        desc: Download → draw → add a Weight axis → export. 30 minutes.
        meta: Tutorial · 🎬 video
```

Adding a card = adding a `- href:/title:/desc:` entry. Removing a whole
section = deleting its `- heading:` block. Reordering = moving lines.
Indentation matters in YAML — copy an existing entry and edit it.

## 4. Adding a brand-new page

1. **Create the file** in `docs-redesign/`, e.g. `docs-redesign/anchors.md`,
   with the front matter shown above. Pick a sensible file name: it becomes
   the URL (`anchors.md` → `/docs-redesign/anchors.html`).
2. **Give it a sidebar entry** in `_data/nav.js`: add
   `{ href: "anchors.html", label: "Anchors & marks", id: "anchors" }`
   to the right group, and use `active: anchors` in the page's front matter.
   (An entry can carry `tag: "planned"` to show the little *planned* badge.)
3. **Link it from the relevant hub page** (`learn.html`, `guides.html`, …) by
   pointing one of the cards at it — search the hub for `href="#"` stubs.

Deleting or renaming a page is the reverse — and remember that renaming
changes the URL, so update links pointing at it (`grep` for the old name).

## 5. How the pieces fit (what builds what)

| You edit… | …and this happens |
|---|---|
| `docs-redesign/*.md` / `*.html` | that one page is rebuilt |
| `_data/nav.js` | sidebar/topbar change on **every** page |
| `_includes/topbar.html`, `sidebar.html`, `head.html` | chrome changes on every page |
| `_layouts/docs.html`, `article.html`, `home.html` | page skeletons change |
| `docs-redesign/assets/style.css` | styling, copied as-is |
| `docs-redesign/assets/app.js` | client behavior (theme, mobile nav, ⌘K, scroll-spy) |
| `eleventy.config.js` | build rules: what's a page, what's copied, what's ignored |
| `.eleventyignore` | which files are repo-documents only, **not** site pages |

Repo documents (`understanding/`, `strategy/`, `drafts/`, `workflow/*.md`)
are intentionally not built — they're for reading on GitHub. When a draft is
ready to become a real page, copy it into `docs-redesign/` and give it front
matter (that's exactly how `from-glyphs.md` and `from-robofont.md` were made).

## 6. Publishing & infrastructure

- **Hosting:** GitHub Pages, deployed by Actions on every push to `main`.
  One-time setting: *Settings → Pages → Source: GitHub Actions*.
- **The build must pass before anything publishes.** The workflow also checks
  that key output files exist; if the Actions tab shows red, the previously
  published site stays up — nothing breaks for visitors.
- **URLs are stable by design.** Output paths mirror file names; don't rename
  casually. (In fontra-docs, URLs come from explicit `permalink:` front
  matter and are guarded by `npm run check-urls` in CI — treat permalinks as
  frozen.)
- `package-lock.json` is committed on purpose: it pins dependency versions so
  CI and contributors build identically. After pulling changes that touch
  `package.json`, run `npm install` once.

## 7. Reviewing contributions

For anything beyond a typo fix, prefer pull requests:

- The deploy workflow runs the **build** on PRs' merges to `main` only, but a
  reviewer can check out the branch and `npm start` to see the result.
- Content conventions to enforce in review: every claim about app behavior
  marked **⚠** until verified against a current build; every how-to opens
  with (or stubs out) a 🎬 recording; pages end without dead `href="#"`
  links unless the target is a known stub.

## 8. Differences in the live-docs repo (fontra-docs)

Same generator, same workflows, three extra things:

1. **Content is pure Markdown** under `content/<section>/`, written in
   Jekyll's kramdown dialect. A compatibility layer in `eleventy.config.js`
   translates kramdown-isms (`{: .class }` attribute lines,
   `<div markdown="1">`, `{:toc}`) at build time — keep writing in the
   existing style.
2. **`permalink:` is explicit on every page** and must not change;
   `order:` front matter drives prev/next pagination within a section.
3. **Styles are Sass** (`content/css/style.sass` + `_sass/`), compiled by the
   build.

## 9. Troubleshooting

- *Edited a page but the site didn't change* → check the **Actions** tab for
  a red ✗; click into the failed step. Most common cause: malformed front
  matter (an unclosed quote or missing `---`).
- *Page renders without sidebar highlight* → `active:` value doesn't match
  any `id` in `_data/nav.js`.
- *Markdown shows literally instead of formatted* → blank line missing
  between an HTML block and the Markdown after it.
- *`npm start` fails after pulling* → run `npm install` (dependencies
  changed).
- *Build works locally, fails in CI* → you likely forgot to commit a new
  file; `git status` before pushing.
