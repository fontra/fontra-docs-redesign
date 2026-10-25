---
title: "Around the editor · Fontra Docs"
description: "Two minutes around Fontra's editor: the canvas, Preview text, the tools, the Designspace panel, opening and exporting."
layout: article.html
top: learn
active: tour-editor
toc:
  - { id: canvas, label: "The canvas" }
  - { id: text, label: "Preview text" }
  - { id: tools, label: "Tools" }
  - { id: designspace, label: "Designspace" }
  - { id: files, label: "Opening and exporting" }
  - { id: next, label: "Where to go next" }
---

<div class="breadcrumb"><a href="index.html">Docs</a> › <a href="learn.html">Learn</a> › Around the editor</div>

# Around the editor

<p class="lede">A two-minute tour of the window you will spend your time in: where the glyphs are, where you type, which tools there are and where the designspace lives.</p>

<div class="pill-row">
<span class="pill">⏱ 2 minutes</span>
<span class="pill">🎚 Beginner</span>
<span class="pill">Tour</span>
</div>

<div class="callout note"><div class="h">Follow along</div><p>Open any variable font in Fontra Pak — <a href="https://github.com/LettError/mutatorSans" target="_blank" rel="noopener">MutatorSans</a>, a small designspace with Weight and Width axes, is a good one to play with — and go to the editor view.</p></div>

<h2 id="canvas">The canvas</h2>

<div class="video"><div class="play">▶</div><div class="cap">🎬 double-click a glyph to edit it, a grey placeholder to create it</div></div>

The middle of the window shows a line of text set in your font. **Double-click a glyph** to edit its outline, right there among its neighbours. **Double-click an empty grey place** to create that glyph. Scroll to pan; pinch, or <kbd>⌘</kbd>-scroll, to zoom.

<h2 id="text">Preview text</h2>

The **Preview text** panel, in the left column, holds the text the canvas shows. Type anything: the canvas sets it in your font, including the glyphs you have not drawn yet. A slash followed by a name stands for a glyph by its name, such as `/a.alt`.

<h2 id="tools">Tools</h2>

The toolbar at the top has the **Pointer**, **Pen**, **Knife**, **Shape**, **Metrics**, **Power Ruler** and **Hand** tools, on the keys <kbd>1</kbd> to <kbd>7</kbd> in that order. **Click and hold** a tool for its variants: the Shape tool, for instance, draws rectangles or ellipses — the quickest way to a first letter (see [Your first variable font](tutorial-first-font.html)). The [Drawing](tour-drawing.html) tour goes through each of them.

<h2 id="designspace">Designspace</h2>

<div class="video"><div class="play">▶</div><div class="cap">🎬 dragging the Weight and Width sliders</div></div>

The **Designspace** panel, in the left column, has a slider per axis: MutatorSans has Weight and Width. **Drag the sliders** and the canvas interpolates between the sources. Each source is a drawing in its own right: pick one in the list of sources to edit it.

<div class="callout tip"><div class="h">Editing between sources</div><p>Anywhere between sources, what you see is interpolated and can't be edited. To correct it there, add a glyph source at that place with the <strong>+</strong> under <em>Glyph sources</em>.</p></div>

<h2 id="files">Opening and exporting</h2>

Fontra Pak opens `.fontra`, UFO and designspace, `.glyphs` and `.glyphspackage`, and compiled TrueType and OpenType files: drop them on its window (see [Open an existing font](open-existing-font.html)). **File › Export as** writes what you did in another format: `.fontra`, designspace with UFOs, or a compiled TrueType, OpenType or WOFF2 font.

<h2 id="next">Where to go next</h2>

<div class="cardgrid">
<a class="card" href="tutorial-first-font.html"><div class="t">Your first variable font</div><div class="d">Draw two letters, add a Weight axis, export. 30 min.</div></a>
<a class="card" href="tour-drawing.html"><div class="t">Drawing</div><div class="d">The tools and the panels you draw with.</div></a>
<a class="card" href="tour-font-info.html"><div class="t">Font info and the designspace</div><div class="d">Names, axes, sources, features, statuses.</div></a>
</div>

<div class="pager">
<a class="prev" href="learn.html"><div class="dir">← Previous</div><div class="ttl">All tutorials</div></a>
<a class="next" href="tutorial-first-font.html"><div class="dir">Next →</div><div class="ttl">Your first variable font</div></a>
</div>

<div class="editline">🎬 = a 10–20 s screen recording goes here · Also a guided tour in <em>Try Fontra</em> · <a href="#">Improve this page on GitHub</a> · Last updated 2026-10</div>
