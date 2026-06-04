# Fontra for Glyphs Users

*Draft "Rosetta stone" page for docs.fontra.xyz → How-Tos. Audience: a Glyphs user evaluating Fontra. Tone: honest mapping, no conversion pressure. ⚠ marks claims to verify against the current builds before publishing.*

---

## The zero-risk way to try it

You don't have to leave Glyphs to use Fontra. Fontra opens `.glyphs` and `.glyphspackage` files directly (via the bundled fontra-glyphs plugin ⚠), and **auto-reloads when the file changes on disk**. So:

1. Drop your `.glyphs` file onto Fontra Pak.
2. Keep working in Glyphs. Hit save.
3. Watch Fontra update, live.

Fontra works as a second, synchronized view of your real project — useful on its own (e.g. full-designspace preview on a second monitor), and the safest possible test drive. Writing back to `.glyphs` is currently **partial** ⚠ — keep Glyphs as the source of truth until you've verified your round-trip, or convert a copy via *File → Export as* (`.fontra` or `.designspace + UFO`).

## Vocabulary map

| In Glyphs | In Fontra | Worth knowing |
|---|---|---|
| Master | **Font source** (*Font → Sources*) | Same idea: a full design at a designspace location |
| Instance | **Axis value labels** (*Font → Axes*) | No instance list yet: exports synthesize named instances from the labels you define per axis (all combinations for multiple axes) |
| Axes (Font Info → Axes) | *Font → Axes* | Plus visual avar mapping graph, and avar-2 cross-axis mapping |
| Brace layer `{400}` (intermediate master) | **Glyph-level source** at that location | First-class: click **+** in the Glyph sources list, pick a location — no name syntax |
| Bracket layer `[600]` (alternate glyph by axis range) | Designspace **rules / conditional substitutions** ⚠ | Supported in the data model; UI editing currently limited ⚠ |
| Smart component / smart glyph | **Variable component** | Deeper than smart components: variable components nest, and their axes interpolate across the whole designspace — this is the feature Fontra was built around |
| Corner / cap components | — | No equivalent yet |
| Master layer / backup layers | **Source layers** (foreground + any number of background layers) | Background layers don't need to be compatible; foreground is what interpolates |
| Mark color | **Status colors** (*Font → Status definitions*) | Customizable per project, designed for tracking development progress |
| Features (auto-generated) | *Font → Features* — manual FEA | No suffix-driven auto features (no auto `liga`, `ccmp`…). Kerning and anchor-based mark positioning are generated at export ⚠ (fontmake feature writers) |
| Kerning window | **Kerning tool** in the editor | Kern in text context, per source, with live interpolation |
| Glyph Info database | Built-in glyph data + **Related glyphs & characters** panel | Unicode assignment from glyph names works as you'd expect |
| Text tool (T) | The canvas **is** a text view | There is no separate text mode: you type, then double-click a glyph to edit it in place, in line context |
| Preview area | `space` = preview mode | Filled contours, panels hidden |
| Palette: dimensions | **Selection info / Transformation panel** | Editable width/height fields for the selection |
| Filters (offset, round corners…) | — (partial: path operations, remove overlap) | No filter ecosystem; transformation panel covers union/subtract/intersect/exclude |
| Custom parameters | — | No equivalent; some map to font info fields, others to export options |
| Macro window / plugins | — today; scripting + plugin API on the 2026 roadmap | Fontra has a Plugin Manager for UI plugins ⚠ scope differs from Glyphs plugins |
| File → Export | *File → Export as* | TTF, OTF (incl. variable CFF2), UFO, designspace, `.fontra`, rcjk |

## Muscle-memory map

Fontra shortcuts are **fully customizable** (*Fontra → Application settings*), and presets can be exported/imported as JSON — a community "Glyphs-feel" preset would be a one-file contribution. Defaults:

| Action | Glyphs | Fontra |
|---|---|---|
| Select tool | `V` | `1` |
| Pen tool | `P` | `2` |
| Knife | `E` | `3` |
| Hand | `space` | `6` (and `space` previews) |
| Zoom in/out | `⌘+` / `⌘−` | same |
| Undo / redo | `⌘Z` / `⇧⌘Z` | same |
| Decompose | `⇧⌘D` | same |
| Previous/next master | `⌘1…9` ⚠ | `⌘↑` / `⌘↓` (previous/next source) |
| Edit across masters | select-all-layers tool | `⌘E` (toggle edit all source layers) |

## What you gain

The designspace is *ambient*: sliders always visible, every edit happens with live interpolation around it, and intermediate locations are one click, not name syntax. Multi-source editing (`⌘E`) edits all masters simultaneously with real-time feedback. Variable components go places smart components can't (nesting, full variation). It runs identically on macOS, Windows and Linux, it's free and open source, two windows on the same font stay in sync (and so do two *people* on a server). And it opens compiled binaries — drop a `.ttf` in to inspect it.

## What you'll miss (today)

Glyphs' automatic feature generation; the instance list with per-instance previews; corner/cap components; the filters and plugin ecosystem; custom parameters; color font tooling; manual hinting. Scripting is the big one — planned for 2026, not here yet. If your daily work leans on Python scripts or plugins like Speed Punk/Mekkablue, keep Glyphs in the loop and use Fontra side-by-side.

## Three ways in

1. **Second screen** — your `.glyphs` open in both apps, Fontra as live full-designspace proofing view. Zero risk, useful today.
2. **The variable-component project** — got a design with heavy component reuse (CJK, modular display faces, icon fonts)? That project will be *better* in Fontra. Convert a copy and compare.
3. **Teaching** — free + cross-platform + browser: for workshops where attendees can't all buy licenses or run macOS, Fontra is the practical answer.

*Questions? The [Fontra Discord](https://discord.gg/SeZWugEYzd) has several ex-and-current Glyphs users who've made the trip.*
