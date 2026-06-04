# Fontra for RoboFont Users

*Draft "Rosetta stone" page for docs.fontra.xyz → How-Tos. Audience: a RoboFont user evaluating Fontra. Same UFO blood, different temperament. ⚠ marks claims to verify before publishing.*

---

## The zero-risk way to try it

You and Fontra already share a data model: **UFO + designspace are Fontra's native read/write formats.** Fontra watches the files and reloads precisely what changed: `.glif` edits per glyph, `kerning.plist`/`groups.plist`, `features.fea`, and `fontinfo.plist`. Font info coverage is near-exhaustive — the common fields are first-class, and the long tail of UFO fontinfo (OS/2 metrics and Panose, hhea/vhea, PostScript blues and stems…) round-trips untouched. So:

1. Drop your `.designspace` (or a single `.ufo`) onto Fontra Pak.
2. Keep working in RoboFont. Save.
3. Fontra updates live.

No conversion, no export, no risk: it's *your* UFOs on disk, edited by either app. The one mental adjustment: Fontra reads the designspace as a whole — sources, axes, rules — where RoboFont thinks one UFO at a time.

## Vocabulary map

| In RoboFont | In Fontra | Worth knowing |
|---|---|---|
| Font (one UFO) | One **font source** in a project | A Fontra "project" ≈ your whole designspace; single UFOs open fine too |
| Designspace (via DesignspaceEditor extension) | **Built in**: *Font → Axes*, *Font → Sources*, designspace panel | Axes, mappings (with a visual avar graph), avar-2, discrete axes — no extension needed |
| Font window (glyph cells) | **Font overview** | Plus preset/custom glyph sets and grouping — built for very large fonts |
| Glyph window | The **canvas** — a multi-glyph text view | The big shift: you edit glyphs *in line context*, not in isolation. Double-click to enter a glyph; neighbors stay live around it |
| Space Center | Canvas + **Preview text** panel + `space` preview; **sidebearing tool**, numeric metrics in Glyph info | Metrics proofing happens where you edit, with interpolation live |
| Inspector (transform, points) | **Selection info** + **Transformation** panels | Editable dimension fields included |
| Layers | **Source layers** (foreground + backgrounds per source) | Backgrounds don't affect interpolation and needn't be compatible |
| Mark colors | **Status colors** (*Font → Status definitions*) | Semantic by design (in progress / checking / finished…), customizable, and queryable in the [Workflow](../workflow/documentation.md) pipeline |
| Groups & kerning editor | **Kerning tool** in the editor ⚠ group editing scope | Kern per source with live interpolation between them |
| Features (feature text editor) | *Font → Features* | FEA editing; live shaping preview is the headline 2026 feature |
| Sets / smart sets | **Glyph sets** in the font overview | Preset and custom, shareable ⚠ |
| Test install (`⌘T`) | — ; *File → Export as* TTF/OTF, then install | A real gap for proofing rhythm; see workflow note below |
| Scripting window, fontParts, observers | — today; Python scripting + plugin API on the 2026 roadmap | The honest big gap; see below |
| Extensions / Mechanic | Plugin Manager ⚠ (UI plugins), no ecosystem yet | The 2026 plugin API is the watershed |
| Output window | Browser console (for the curious) | Fontra's client is inspectable web tech |

## Muscle-memory map

Shortcuts are **customizable** (*Fontra → Application settings*) with JSON import/export — an "RF-feel" preset would be a tiny, welcome community contribution. Defaults: tools on `1–6` (pointer, pen, knife, shape, ruler, hand), `space` for filled preview, `⌘E` to edit all sources at once, `⌘↑/⌘↓` to step between sources, `⇧⌘D` decompose, `⌘0` zoom-to-fit.

## What you gain

**The designspace as a place you work in**, not a file you compile: axis sliders always at hand, every edit made against live interpolation, intermediate sources added with a click. Multi-source editing moves points in all masters simultaneously. Quadratic curves are first-class (rare in UFO-land). The font overview was designed for tens of thousands of glyphs. Two windows — or two *people*, with a shared server — stay in sync in real time. It's free, open source (GPLv3), and identical on macOS, Windows, Linux. And your files stay UFOs the entire time.

## What you'll miss (today)

**Scripting, scripting, scripting.** RoboFont is a Python IDE wearing a font editor's clothes; Fontra currently has no macro window, no fontParts, no observers, no startup scripts. Two partial consolations: the **Workflow** engine covers much of what production scripts do (subsetting, designspace surgery, batch conversion — declaratively — see the [Workflow documentation](../workflow/documentation.md)), and the server's Python core means the 2026 scripting API lands in familiar territory. Also missing: test-install, the extension ecosystem, custom tools, global (font-level) guidelines ⚠, and manual hinting.

If RoboFont is your scripting platform more than your drawing tool, Fontra today is a complement, not a replacement — and the side-by-side mode is built for exactly that.

## Three ways in

1. **Side-by-side from day one** — RoboFont for scripts and surgical edits, Fontra for designspace navigation, multi-source drawing, and proofing. Same UFOs, both live.
2. **The interpolation-heavy project** — anything with many masters or intermediates: Fontra's ambient designspace pays off immediately.
3. **Replace the conversion shuffle** — Fontra opens `.glyphs`, `.ttf`, `.otf` and exports UFO/designspace: a quick, visual converter when collaborators send you non-UFO files.

*Questions? The [Fontra Discord](https://discord.gg/SeZWugEYzd) — Just is usually around, and he speaks fluent RoboFont.*
