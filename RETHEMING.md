# Re-theming how-to

A guided process for changing the look of the docs-redesign site — colors,
fonts, shape — without touching structure or content. Everything in this
guide happens in **one file**: `docs-redesign/assets/style.css`.

## 0. Set up your feedback loop

```
npm start
```

Open `http://localhost:8080/docs-redesign/` and keep three pages in tabs —
they cover every component:

- the **home page** (hero, doors, cards)
- `tutorial-first-font.html` (steps, callouts, videos, tables, TOC column)
- `get-started.html` (sidebar, hub cards)

Every save of `style.css` reloads the browser. Toggle dark mode with the
**◐** button in the topbar — you'll need it constantly (see step 2).

**Finding what to edit:** right-click any element → *Inspect*. Devtools
shows the rule and variable behind it, and you can live-edit values there
first, then copy the result into `style.css`.

## 1. Know the dials (the variable block, lines 6–33)

The whole theme is ~30 CSS variables at the top of the file. What each
group actually controls:

| Variables | What they paint |
|---|---|
| `--bg` | the page background |
| `--bg-soft` | "slightly raised" fills: hover states, search box, table headers, callout bodies |
| `--bg-sink` | "pressed" fills: active topnav item, video placeholder stripes |
| `--panel` | cards, doors, pager buttons |
| `--border` / `--border-strong` | all hairlines / their hover state |
| `--text` / `--text-soft` / `--text-faint` | headings & body / descriptions & ledes / metadata, breadcrumbs, labels |
| `--accent` / `--accent-text` | **the brand spots**: the F logo mark, CTA buttons, step-number circles, video play button |
| `--link` / `--link-soft` | links, the active sidebar entry, "note" callouts |
| `--ok` + `--tip-soft` | success/tips: checkpoint callouts, "new" badges |
| `--warn` + `--warn-soft` | warnings, the little "redesign" tag |
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
sitting** and check both with the ◐ toggle. If you skip this, the site looks
done until someone flips the theme.

(Non-color variables — fonts, widths, radius — are defined once in `:root`
and apply to both themes.)

## 3. Worked example: branding the site Fontra pink

Fontra's brand color is `#f11759`. A minimal, tasteful application — accent
spots only, links stay blue:

```css
:root {
  --accent: #f11759;        /* was #111111 — logo mark, CTAs, step numbers */
  --accent-text: #ffffff;
}
[data-theme="dark"] {
  --accent: #f11759;        /* was #ffffff */
  --accent-text: #ffffff;   /* was #111111 */
}
```

A louder version also moves links: set `--link: #d31350` (light) /
`--link: #ff7099` (dark), and tint `--link-soft` to match
(`#fdeef3` / `#40202c`) since it backs active sidebar entries and note
callouts. Check contrast on `--text-soft`-colored text over the tinted
backgrounds before settling.

## 4. Changing the typeface

For a system font change, edit `--sans` (UI + prose) or `--mono` (code).
For a webfont — say Inria Sans, which the current docs.fontra.xyz uses —
two edits:

1. Load it in `_includes/head.html` (this is the one step outside style.css):
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
   ```
2. Put it first in the stack:
   ```css
   --sans: "Inria Sans", -apple-system, "Segoe UI", Roboto, system-ui, sans-serif;
   ```

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
| `home hero` | hero, CTA buttons, doors, homewrap |
| `responsive` | the two breakpoints: ≤1080px (TOC hides), ≤860px (sidebar becomes a drawer) |

Typical knobs people want: overall text size (`body { font-size: 15.5px }`),
text column width (`--maxread`), heading sizes (`.article h1/h2/h3`), card
density (`.cardgrid` `minmax(230px,1fr)` and `.card` padding).

## 6. Before committing

- ◐ both themes, on all three test pages.
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
