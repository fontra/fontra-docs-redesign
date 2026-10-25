---
title: "Drawing: tools & panels · Fontra Docs"
description: "A tour of Fontra's drawing tools and of the panels you draw with: Glyph info, Transformation, Related glyphs, Reference font, Glyph note."
layout: article.html
top: learn
active: tour-drawing
toc:
  - { id: pointer, label: "Pointer" }
  - { id: pen, label: "Pen" }
  - { id: knife, label: "Knife" }
  - { id: shape, label: "Shape" }
  - { id: metrics, label: "Metrics" }
  - { id: ruler, label: "Power Ruler" }
  - { id: hand, label: "Hand and preview" }
  - { id: panels, label: "The panels" }
  - { id: glyph-menu, label: "The Glyph menu" }
  - { id: next, label: "Where to go next" }
---

<div class="breadcrumb"><a href="index.html">Docs</a> › <a href="learn.html">Learn</a> › Drawing: tools &amp; panels</div>

# Drawing: tools &amp; panels

<p class="lede">Every tool of the toolbar, what its modifier keys do, and the panels you draw with. Four minutes, with a glyph open in the editor.</p>

<div class="pill-row">
<span class="pill">⏱ 4 minutes</span>
<span class="pill">🎚 Beginner</span>
<span class="pill">Tour</span>
</div>

The tools are on the keys <kbd>1</kbd> to <kbd>7</kbd>, in the toolbar's order. **Click and hold** a tool (or right-click it) for its variants; the one you pick stays at the front of the button and takes the key. On Windows and Linux, read <kbd>Ctrl</kbd> where this page says <kbd>⌘</kbd>.

<h2 id="pointer">Pointer <kbd>1</kbd></h2>

<div class="video"><div class="play">▶</div><div class="cap">🎬 select, drag, double-click a point, transform box</div></div>

- **Click** selects; <kbd>⇧</kbd>-click toggles a point in the selection, <kbd>⌘</kbd>-click adds to it. Drag on empty space for a selection rectangle.
- **Drag** the selection to move it; <kbd>⇧</kbd> keeps the move horizontal, vertical or at 45°. The arrow keys nudge it by 1, by 10 with <kbd>⇧</kbd>, by 100 with <kbd>⇧</kbd><kbd>⌘</kbd> (change these steps in [Settings](tour-settings.html#editor-behavior)).
- **Double-click** a point to make it smooth or sharp; double-click a segment to select its whole contour.
- **The box around the selection**: drag a handle to scale (<kbd>⇧</kbd> keeps the proportions, <kbd>⌥</kbd> scales from the centre); just outside a corner, drag to rotate.
- <kbd>⌥</kbd> over a straight segment: click to add handles and make it a curve.

**Pointer Tool (scaling)**, its variant: when you move points, the handles of the curves around them are scaled to follow instead of staying where they were — the one to thicken a stroke with.

<h2 id="pen">Pen <kbd>2</kbd></h2>

Click to place a point, **click and drag** to pull out handles. <kbd>⇧</kbd> keeps the new point at 0°, 45° or 90° from the previous one. Click the first point to **close** the contour; click the end of another open contour to join them. With nothing selected, click on a segment to insert a point.

The variants draw **cubic** curves (PostScript, the usual choice) or **quadratic** ones (TrueType). More in [Drawing with the pen tool](pen-tool.html).

<h2 id="knife">Knife <kbd>3</kbd></h2>

Drag a line across the glyph: when you let go, the contours are cut along it. <kbd>⇧</kbd> keeps the line straight.

<h2 id="shape">Shape <kbd>4</kbd></h2>

Drag a **rectangle** or, with the variant, an **ellipse**. <kbd>⇧</kbd> makes a square or a circle, <kbd>⌥</kbd> draws from the centre, and <kbd>⌘</kbd> draws the contour the other way round — a counter. The quickest way to a first letter: see [Your first variable font](tutorial-first-font.html).

<h2 id="metrics">Metrics <kbd>5</kbd></h2>

Its two variants, the **Sidebearing tool** and the **Kerning tool**, space and kern in the text itself. They have a lesson of their own: [Spacing &amp; kerning](kerning-spacing.html).

<h2 id="ruler">Power Ruler <kbd>6</kbd></h2>

Click near the outline: a ruler crosses the glyph at right angles to the contour and shows every thickness and gap along it, sidebearings included. Drag to move it, <kbd>⇧</kbd> for 0°, 45° or 90°; double-click to hide it, <kbd>⌫</kbd> to remove it. Each glyph keeps its ruler, measured again when you move the sliders: the way to compare stems across weights.

<h2 id="hand">Hand <kbd>7</kbd> and preview</h2>

Drag to pan. **Hold the space bar** with any tool for the same thing, with the glyphs shown filled and without points: a preview that ends when you let go.

<h2 id="panels">The panels</h2>

In the right column:

- **Glyph info** (Selection Info): the glyph's name, Unicode, advance width and sidebearings, its kerning groups, the dimensions of the selection, and for a component its transformation and location. Numbers can be typed in.
- **Transformation**: move, scale, rotate, skew and resize the selection by exact values, around the origin you pick; flip, align and distribute; and the **Path Operations** — Remove overlaps, Subtract, Intersect and Exclude contours.
- **Glyph Note**: a note kept with the glyph.
- **Related Glyphs &amp; Characters**: the glyph's alternates, the components it uses, the glyphs that use it as a component. Double-click one to show it in the text.
- **Input characters and output glyphs**: what the text becomes once shaped, glyph by glyph.

In the left column, beside Preview text and Designspace:

- **Reference Font**: drop a `.ttf`, `.otf`, `.woff` or `.woff2` here and its letter is drawn in grey behind the one you are editing — to trace, or to compare.

<h2 id="glyph-menu">The Glyph menu</h2>

What is not a tool is in the **Glyph** menu, or on a right-click in the canvas: add a component, an anchor or a guideline; join, break or reverse contours, set the start point; convert curves between cubic and quadratic; decompose components (<kbd>⇧</kbd><kbd>⌘</kbd><kbd>D</kbd>); add a background image to trace.

<h2 id="next">Where to go next</h2>

<div class="cardgrid">
<a class="card" href="pen-tool.html"><div class="t">Drawing with the pen tool</div><div class="d">Real Bézier contours, points and handles.</div></a>
<a class="card" href="kerning-spacing.html"><div class="t">Spacing &amp; kerning</div><div class="d">The metrics tools, across the designspace.</div></a>
<a class="card" href="keyboard-shortcuts.html"><div class="t">Keyboard shortcuts</div><div class="d">All of them, and how to change them.</div></a>
</div>

<div class="pager">
<a class="prev" href="tour-editor.html"><div class="dir">← Previous</div><div class="ttl">Around the editor</div></a>
<a class="next" href="tour-font-info.html"><div class="dir">Next →</div><div class="ttl">Font info and the designspace</div></a>
</div>

<div class="editline">🎬 = a 10–20 s screen recording goes here · <a href="#">Improve this page on GitHub</a> · Last updated 2026-10</div>
