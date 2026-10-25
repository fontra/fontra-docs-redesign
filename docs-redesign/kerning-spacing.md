---
title: "Spacing & kerning · Fontra Docs"
description: "Space and kern a variable font in Fontra: the Sidebearing and Kerning tools, kerning groups, and each source of the designspace."
layout: article.html
status: ready
top: guides
active: kerning
toc:
  - { id: before, label: "Before you start" }
  - { id: spacing, label: "1. Spacing" }
  - { id: kerning, label: "2. Kerning" }
  - { id: groups, label: "3. Kerning groups" }
  - { id: sources, label: "4. Across the designspace" }
  - { id: check, label: "5. Check the result" }
  - { id: next, label: "Where to go next" }
---

<div class="breadcrumb"><a href="index.html">Docs</a> › <a href="guides.html">Guides</a> › Spacing &amp; kerning</div>

# Spacing &amp; kerning

<p class="lede">Space and kern in the text itself, with the slider at hand: the sidebearings first, then the pairs that still need it, then the same in each source of the designspace.</p>

<div class="pill-row">
<span class="pill">6 minutes</span>
<span class="pill">Beginner</span>
<span class="pill">Lesson</span>
</div>

<h2 id="before">Before you start</h2>

Open a font with a few glyphs and two sources — [MutatorSans](https://github.com/LettError/mutatorSans), say, or the font of [Your first variable font](tutorial-first-font.html) — and type a word in **Preview text**: `HAVANA` shows straight and diagonal sides side by side.

Both tools are variants of the **Metrics** tool, <kbd>5</kbd>: click and hold it, then pick the **Sidebearing Tool** or the **Kerning Tool**. They keep an undo history of their own, apart from your drawing.

<div class="callout note"><div class="h">At a source</div><p>Spacing and kerning are values of each source. Between sources they are interpolated, so the tools only work on a source: anywhere else, Fontra offers <strong>Go to nearest source</strong>. <kbd>⌘</kbd><kbd>↑</kbd> and <kbd>⌘</kbd><kbd>↓</kbd> step through the sources.</p></div>

<h2 id="spacing">1. Spacing</h2>

<div class="video"><div class="play"></div><div class="cap">dragging a glyph's edges with the Sidebearing tool</div></div>

With the **Sidebearing Tool**, hover a glyph: its left sidebearing, right sidebearing and advance width show under it. Then drag:

| Where you drag | What changes |
|---|---|
| Near the left edge | The left sidebearing; the outline moves with it |
| Near the right edge | The right sidebearing, and so the advance width |
| The glyph itself | The outline moves inside its width: one sidebearing grows as the other shrinks |
| The glyph itself, with <kbd>⌥</kbd> | Both sidebearings, by the same amount |

The **←** and **→** keys do the same as dragging, 1 unit at a time, 10 with <kbd>⇧</kbd>. <kbd>Tab</kbd> steps from the left edge to the glyph, to the right edge, to the next glyph; <kbd>⇧</kbd>-click selects more than one glyph or side to change them together. To type exact values, **Glyph info** in the right column has the sidebearings and the advance width.

<h2 id="kerning">2. Kerning</h2>

<div class="video"><div class="play"></div><div class="cap">tightening the AV pair with the Kerning tool</div></div>

Switch to the **Kerning Tool** and hover the gap between `A` and `V`: click to select the pair, then drag it, or use **←** and **→**:

| Keys | Step |
|---|---|
| ← → | 1 unit |
| <kbd>⌥</kbd> ← → | 5 units |
| <kbd>⇧</kbd> ← → | 10 units |
| <kbd>⌥</kbd><kbd>⇧</kbd> ← → | 50 units |

<kbd>Tab</kbd> moves to the next pair of the text. <kbd>⌫</kbd> deletes the selected pair in every source, <kbd>⌥</kbd><kbd>⌫</kbd> in this source only; a right-click offers the same.

<div class="callout tip"><div class="h">If the tool asks first</div><p>Kerning is applied through text shaping, so the tool asks to turn on <em>Apply text shaping and features</em> if it is off. And it won't edit kerning that a hand-written <code>kern</code> feature in Font Info › OpenType Features would override.</p></div>

<h2 id="groups">3. Kerning groups</h2>

Letters with the same side kern alike: `A`, `À`, `Á`… on both sides; `V` and `W` more or less. Put them in **groups** and kern the group once.

In **Glyph info**, **Kern group L/R** has two fields: the group the glyph belongs to when it is on the **right** of a pair (its left side faces the other glyph), then the one when it is on the **left** of a pair. Give `A`, `À`, `Á` the same name in both. The Kerning tool then shows the pair with the group's name, `@A`, and changing it changes it for the whole group.

When one member needs a different value, right-click the pair and choose **Make kerning exception**: that glyph gets its own pair, and the rest of the group keeps the group's value.

<h2 id="sources">4. Across the designspace</h2>

Press <kbd>⌘</kbd><kbd>↓</kbd> to go to the next source — the Bold, say. The letters are wider there, the counters smaller: space and kern again, with the same tools. Then drag the Weight slider in the Designspace panel: spacing and kerning interpolate between your sources along with the outlines. If a weight in between needs a correction, add a source there (the **+** under *Glyph sources* or Font › Sources) and space it too.

<h2 id="check">5. Check the result</h2>

- **View › Glyph editor appearance** has *Sidebearings for non-editing glyphs* and *Kerning*: turn them on to see the values of every glyph of the line, whatever the tool.
- The **Input characters and output glyphs** panel lists each glyph of the shaped text with its advance; tick *Show kerning in Advance column* to see where kerning applies.
- Export (File › Export as) and test the font in a real text: kerning and groups go into the font, and back into your UFOs or designspace when you save in those formats.

<h2 id="next">Where to go next</h2>

<div class="cardgrid">
<a class="card" href="export-install.html"><div class="t">Export &amp; install</div><div class="d">From sources to an installable font.</div></a>
<a class="card" href="editing-across-sources.html"><div class="t">Editing across sources</div><div class="d">Change every source at once.</div></a>
</div>

<div class="pager">
<a class="prev" href="tour-settings.html"><div class="dir">← Previous</div><div class="ttl">Settings</div></a>
<a class="next" href="variable-components-tutorial.html"><div class="dir">Next →</div><div class="ttl">Variable components</div></a>
</div>

<div class="editline">Striped frames mark where a 10–20 s screen recording goes · <a href="https://github.com/fontra/fontra-docs-redesign/edit/main/docs-redesign/kerning-spacing.md" target="_blank" rel="noopener">Improve this page on GitHub</a> · Last updated 2026-10</div>
