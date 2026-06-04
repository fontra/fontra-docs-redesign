# A Documentation Strategy to Bring Users In

*Premise: documentation that attracts users documents their first success, not the tool. The current docs (Diátaxis structure, CC-BY, open repo, written-by-using) have good bones — the gap is onboarding paths, not infrastructure.*

---

## 1. Where the current docs stand

- Structure follows the Documentation System (tutorials / how-tos / reference / explanations) — right skeleton.
- Reference section is the most developed; it describes UI surfaces.
- The Quickstart is three links (install, open a UFO, workspace overview) — it **assumes you already have a font in progress**.
- Workflow, scripting, and deployment are essentially undocumented.
- The 2026 blog post itself concedes docs "have been neglected a bit" — so this is acknowledged, the question is sequencing.

## 2. Principle: three doors for three audiences

A single generic doc serves nobody. New users arrive from three distinct directions, and each needs a different first page:

| Audience | They arrive with | Their door |
|---|---|---|
| **Beginners** (students, educators' classes, curious designers) | Nothing. No UFO, no vocabulary. | "Make your first font" tutorial |
| **Migrants** (Glyphs, RoboFont, FontLab users) | Habits, vocabulary, existing files | A "Rosetta stone" mapping page |
| **Engineers** (production staff, toolmakers) | A pipeline problem | Workflow cookbook + architecture docs |

Educators deserve emphasis: per the blog, classrooms are already a proven adoption channel (free + cross-platform), and one convinced teacher converts thirty students per semester.

## 3. The plan, in priority order

### 3.1 Time-to-first-glyph tutorial *(highest impact)*

One page: download Fontra Pak → new font → draw two glyphs → add a Weight axis → second source → watch live interpolation → export an OTF. Target: **under 30 minutes, zero prior knowledge**. This is the page that creates users; everything else retains them. Fontra's "wow moment" — dragging an axis slider and watching glyphs interpolate live — should arrive as early as possible in it.

### 3.2 Show, don't describe

Fontra is visually impressive; nested variable components interpolating live sells itself in five seconds of video and reads as nothing in prose. The blog already does short MP4 clips well — the docs barely do. Standard: **every how-to opens with a 10–20 second clip**, captured at a consistent window size with a consistent sample font. Cheap to produce, transformative to read.

### 3.3 The migrants' Rosetta stone

"Fontra for Glyphs users" (then RoboFont): a mapping table — masters↔sources, instances, layers, components, export — plus keyboard shortcuts, plus "what Fontra doesn't do yet" stated honestly. Migrants churn on the *second* session, when habit friction beats curiosity; this page is friction removal. The fontra-glyphs backend (open your .glyphs file directly, auto-reload alongside Glyphs) is a uniquely low-risk migration story: **you can try Fontra without leaving your editor.** Say so, loudly.

### 3.4 Workflow: cookbook first, reference second

Currently invisible (see document 02). Two deliverables:

1. **Cookbook** — copy-pasteable YAML recipes: subset a font for web; extract one weight from a variable family; cubic→quadratic conversion; merge two fonts; ship only glyphs with "finished" status; scale a font's UPM. People adopt CLI tools by modifying recipes, not by composing from reference.
2. **Generated reference** — every action with arguments, types, defaults. The actions are dataclasses; the reference table can be **auto-generated from the source**, so it never rots. This also nudges the codebase toward docstrings on actions.

### 3.5 Zero-install try *(the strategic one)*

The irony of a browser-based editor: you must download an app to try it. A public sandbox instance — "open this sample variable font in your browser right now," read-only or throwaway sessions — linked from the fontra.xyz landing page would be the strongest acquisition tool available, and the client-server architecture already supports remote serving. Even a curated read-only showcase (a font with nested variable components to play with) beats any screenshot.

### 3.6 Close the loop with the community

- Every recurring Discord answer becomes a how-to page (lightweight habit, assign per release cycle).
- A "What's new" docs page synced to each Fontra Pak release — releases exist now; docs should ride them.
- Docs repo already public: add a visible "improve this page" link per page; educators in particular will contribute.
- The upcoming scripting/plugin API will need docs *at launch* — API docs published with the feature, not after, because toolmakers evaluate before they install. Same for the translations effort: doc pages structured for translatability extend the classroom channel beyond English.

## 4. Sequencing if effort is scarce

1. Beginner tutorial (3.1) — creates users
2. Video-fy existing how-tos (3.2) — multiplies everything else
3. Workflow cookbook (3.4.1) — unlocks the engineer audience
4. Glyphs Rosetta stone (3.3) — unlocks the migrant audience
5. Demo instance (3.5) — biggest payoff, biggest lift
6. Generated Workflow reference + community loop (3.4.2, 3.6) — ongoing

## 5. How I'd measure it

Crude but honest signals: Fontra Pak downloads per landing-page visit; Discord questions answered by a docs link vs. by typing; time from "joined Discord" to "first font exported" anecdotes; and for the cookbook — workflow YAML files appearing in public GitHub repos.

---

*Open questions for feedback: (a) who is the realistic primary audience for 2026 growth — education, migrants, or production? (b) is a public demo instance feasible with current funding/infrastructure? (c) should Workflow be promoted as a public, stable tool, or would documenting it now overcommit the team to API stability?*
