# Re-theming how-to

A guided process for changing the look of the docs-redesign site — colors,
fonts, shape — without touching structure or content. Everything in this
guide happens in **one file**: `docs-redesign/assets/style.css`.

## 0. Set up your feedback loop

```
npm start
```

Open `http://localhost:8080/docs-redesign/` and keep four pages in tabs —
they cover every component:

- the **home page** (hero, doors, cards, the generated *Written so far* section)
- `tutorial-first-font.html` (steps, callouts, videos, tables, TOC column)
- `guides.html` (sidebar, hub cards, planned cards)
- `install.html` (a planned page, with its banner)

Every save of `style.css` reloads the browser. Toggle dark mode with the
half-disc button in the topbar — you'll need it constantly (see step 2).

**Finding what to edit:** right-click any element → *Inspect*. Devtools
shows the rule and variable behind it, and you can live-edit values there
first, then copy the result into `style.css`.

## 1. Know the dials (the variable block at the top of the file)

The whole theme is ~30 CSS variables at the top of the file. The defaults
are Fontra's own identity: `--accent` is Fontra red (`#f11759`, the value of
`--fontra-red-color` in Fontra's `core.css`; `#ff3366` in dark mode, as in
Fontra), the mark in the topbar is Fontra's icon, and `--sans` is Inria
Sans, the typeface Fontra's interface uses (self-hosted in `assets/fonts/`,
copied from the Fontra repository). What each group actually controls:

| Variables | What they paint |
|---|---|
| `--bg` | the page background |
| `--bg-soft` | "slightly raised" fills: hover states, search box, table headers, callout bodies |
| `--bg-sink` | "pressed" fills: active topnav item, video placeholder stripes |
| `--panel` | cards, doors, pager buttons |
| `--border` / `--border-strong` | all hairlines / their hover state |
| `--text` / `--text-soft` / `--text-faint` | headings & body / descriptions & ledes / metadata, breadcrumbs, labels |
| `--accent` / `--accent-strong` / `--accent-soft` / `--accent-text` | **the brand spots**: CTA buttons, step-number circles, video play button, the active topbar and sidebar entries, "note" callouts, the "prototype" tag |
| `--link` / `--link-soft` | links (a slightly darker red, for contrast on white) |
| `--ok` + `--ok-soft` | success: checkpoint callouts |
| `--warn` + `--warn-soft` | warnings and the "verify" tag |
| `--code-bg` / `--code-text` / `--kbd-bg` | inline code, code blocks, keyboard keys |
| `--sans` / `--mono` | the two font stacks |
| `--radius` | corner rounding of every card, callout, image, code block |
| `--sidebar-w` / `--toc-w` / `--maxread` | sidebar width / TOC column width / text column measure |

Changing a variable restyles every component that uses it — that's the
point. Reach for component-level rules (step 4) only when a variable can't
express what you want.

## 2. The one rule: every color exists twice

Light values live in `:root { … }`, dark values in `[data-theme="dark"] { … }`
right below. **Whenever you change a color, decide its dark twin in the same
sitting** and check both with the theme toggle. If you skip this, the site looks
done until someone flips the theme.

(Non-color variables — fonts, widths, radius — are defined once in `:root`
and apply to both themes.)

## 3. Worked example: toning the red down

The default applies Fontra red to every accent spot *and* to links. For a
quieter page, keep the brand spots red and move links back to a neutral:

```css
:root {
  --link: #1f5fd0;          /* was #d0124c */
  --link-soft: #eef3fd;     /* backs the active sidebar entry and "note" callouts */
}
[data-theme="dark"] {
  --link: #79a8ff;
  --link-soft: #1d2740;
}
```

Then check the sidebar's active entry and the "note" callouts: they use
`--accent-soft` and `--link-soft` respectively, so decide whether both
should follow.

## 4. Changing the typeface

The site ships Inria Sans (weights 300, 400, 500, 700) in
`docs-redesign/assets/fonts/`, declared by the `@font-face` rules at the top
of `style.css` and preloaded in `_includes/head.html`. To switch to a system
font, edit `--sans` (UI + prose) or `--mono` (code) and remove the preload
lines. To switch to another webfont, replace the `.woff2` files and the
`@font-face` rules, then put the new family first in `--sans`.

After a font change, re-check: the topbar (it's height-constrained), tables,
and the sidebar at its 14px size.

## 5. Component-level changes

When the variables aren't enough, the rest of `style.css` is organized in
labeled sections — find the comment banner, edit the rule:

| Section comment | Components |
|---|---|
| `top bar` | topbar, brand, search box, icon buttons |
| `layout` | the sidebar/content/TOC grid, column widths, page padding |
| `sidebar nav` | nav groups, active state, "planned" badge |
| `on-this-page TOC` | the right-hand column on long pages |
| `article typography` | h1–h3, lede, lists, images, hr, anchor links |
| `tables`, `callouts`, `video placeholder`, `steps` | content components |
| `pager`, `cards / hubs`, `badges` | navigation components |
| `status badges` | the Planned and verify tags and the page banner |
| `home` | hero, CTA buttons, doors, homewrap |
| `responsive` | the two breakpoints: ≤1080px (TOC hides), ≤860px (sidebar becomes a drawer) |

Typical knobs people want: overall text size (`body { font-size: 15.5px }`),
text column width (`--maxread`), heading sizes (`.article h1/h2/h3`), card
density (`.cardgrid` `minmax(230px,1fr)` and `.card` padding).

## 6. Before committing

- Both themes, on all four test pages.
- Narrow the window below 860px: hamburger menu, sidebar drawer, door stack.
- One squint test: do the *accent spots* (logo, CTAs, step numbers) still
  point at the right things, or is color now everywhere?
- Commit `style.css` (and `head.html` if fonts changed) separately from
  content changes — design diffs are much easier to review alone.

## What this file is not for

New markup (footers, different page skeletons) lives in `_layouts/` and
`_includes/`; behavior (theme toggle, mobile nav) in
`docs-redesign/assets/app.js`; page content in the `.md` files and the home
page's front matter. See [MAINTENANCE.md](MAINTENANCE.md).
