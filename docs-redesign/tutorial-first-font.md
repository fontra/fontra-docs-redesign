---
title: "Your first variable font · Fontra Docs"
description: "Make your first variable font in Fontra in under 30 minutes — no drawing skills required."
layout: article.html
top: get-started
active: first-font
toc:
  - { id: install, label: "1. Install & create" }
  - { id: first-glyph, label: "2. First glyph" }
  - { id: draw, label: "3. Draw H and o" }
  - { id: the-h, label: "The H", lvl3: true }
  - { id: the-o, label: "The o", lvl3: true }
  - { id: axis, label: "4. Weight axis" }
  - { id: black, label: "5. Draw the Black" }
  - { id: magic, label: "6. The magic" }
  - { id: export, label: "7. Export & install" }
  - { id: next, label: "Where to go next" }
---

<div class="breadcrumb"><a href="index.html">Docs</a> › <a href="get-started.html">Get started</a> › Your first variable font</div>

# Your first variable font

<p class="lede">Make a real, working variable font — two letters, a Weight axis, and a slider that morphs them from Regular to Black — and install it on your computer. No drawing skills needed.</p>

<div class="pill-row">
<span class="pill">⏱ ~30 minutes</span>
<span class="pill">🎚 Beginner</span>
<span class="pill">macOS · Windows · Linux</span>
</div>

<div class="callout note">
<div class="h">What you'll end up with</div>
<p>A <code>.ttf</code> variable font with a working Weight axis and two named styles, installed and usable in any app on your computer.</p>
</div>

<h2 id="install">1. Install &amp; create a font</h2>

<div class="video"><div class="play">▶</div><div class="cap">🎬 download → New font → browser opens</div></div>

<ol class="steps">
<li><div class="st-h">Download Fontra Pak</div> Grab it from <a href="https://fontra.xyz">fontra.xyz</a> and install it.</li>
<li><div class="st-h">Launch it and click <em>New font</em></div> Name it <code>Hello</code>, pick the <code>.fontra</code> format, choose where to save.</li>
<li><div class="st-h">Your browser opens</div> This <em>is</em> Fontra — running in your browser, but everything stays on your computer. No internet needed, nothing uploaded.</li>
</ol>

<div class="callout tip"><div class="h">✓ Checkpoint</div><p>A browser tab named after your font, showing an empty glyph overview.</p></div>

<h2 id="first-glyph">2. Create your first glyph</h2>

We'll start with **H** — the friendliest letter in type design.

<ol class="steps">
<li>Open the <strong>editor view</strong>, click in the <strong>Preview text</strong> panel (left column) and type <code>H</code>.</li>
<li>The canvas shows a grey, empty placeholder. <strong>Double-click it</strong> and confirm <strong>Create</strong>: Fontra assigns the right Unicode for you. <strong>Double-click it again</strong> to edit it.</li>
</ol>

<div class="callout tip"><div class="h">Any glyph, any name</div><p>In Preview text, a slash followed by a name stands for a glyph: <code>/a.alt</code> shows (and lets you create) a glyph named <code>a.alt</code>.</p></div>

<h2 id="draw">3. Draw H and o — no Bézier required</h2>

<div class="video"><div class="play">▶</div><div class="cap">🎬 three rectangles → H · two ellipses, one reversed → o</div></div>

<h3 id="the-h">The H — three rectangles</h3>

Pick the **Shape tool** (rectangle) and drag three rough rectangles. Then make them exact: take the **Pointer tool**, **double-click** a rectangle to select the whole contour, and type its values in the **Transformation** panel (*Dimensions* for the width and height, *Move* for the position):

| Part | x | y | width | height |
|---|---|---|---|---|
| Left stem | 60 | 0 | 110 | 700 |
| Right stem | 430 | 0 | 110 | 700 |
| Crossbar | 60 | 300 | 480 | 100 |

Select all (<kbd>⌘</kbd><kbd>A</kbd>) and click **Remove overlaps** under *Path Operations* in the Transformation panel, so the three boxes fuse into one H. In **Glyph info**, set both **sidebearings** to `60`: the advance width follows by itself, `600`. No need to deselect first.

<h3 id="the-o">The o — two ellipses</h3>

Type `o` in Preview text, double-click its placeholder to create it, and again to edit it. **Hold the Shape tool down** to open its menu and pick the **ellipse**. Draw the outer oval (x 40, y −10, w 420, h 520 — the overshoot below the baseline is intentional), then the inner one (x 140, y 90, w 220, h 320) **holding <kbd>⌘</kbd> while you drag**: it is drawn the other way round, and a contour turning the other way is a counter. No path operation needed — that is how counters are drawn. Sidebearings `40` and `40`: advance width `500`.

<div class="callout note"><div class="h">Why the direction matters</div><p>A font's outlines are filled by their direction: the outer contour of the o turns one way, the counter the other. Drawn the same way round, the inner oval would be filled too.</p></div>

<div class="callout tip"><div class="h">✓ Checkpoint</div><p>Typing <code>HoHoHo</code> in Preview text shows your two letters spelling like a font.</p></div>

<h2 id="axis">4. Add a Weight axis</h2>

<div class="video"><div class="play">▶</div><div class="cap">🎬 Axes dialog: New axis</div></div>

Open **Font → Axes**, click **New axis…** and pick the **Weight** preset, then check:

<table>
<tbody>
<tr><th>Name / UI Name</th><td>Weight</td></tr>
<tr><th>OT tag</th><td><code>wght</code></td></tr>
<tr><th>Min / Default / Max</th><td>400 / 400 / 900</td></tr>
</tbody>
</table>

Under **Axis values**, add two labels: `Regular` = 400 and `Black` = 900. The export turns these into the font's named instances automatically.

<div class="callout note"><div class="h">Why 400–900, not 100–900?</div><p>An axis range should only span where you have actual designs. You'll draw a Black today; you won't draw a Thin. Extend the range the day you do.</p></div>

<h2 id="black">5. Draw the Black</h2>

<div class="video"><div class="play">▶</div><div class="cap">🎬 virtual source → fatten stems</div></div>

<ol class="steps">
<li><strong>Font → Sources</strong>, then <strong>New font source…</strong>: name <code>Black</code>, location Weight = 900.</li>
<li>Back in the editor, with the o still open, the <code>Black</code> source shows <strong>in grey</strong> under <em>Glyph sources</em> in the Designspace panel — a <em>virtual</em> source. <strong>Double-click it</strong> to copy the Regular's contours there.</li>
<li>Hold the Pointer tool down and pick <strong>Pointer Tool (scaling)</strong>: select each point of the inner contour and shift it inwards — the handles follow along — so the o gets heavier.</li>
<li>Open the H and do the same there: double-click <code>Black</code>, then drag the <em>inner</em> stem edges outward to fatten it.</li>
</ol>

<div class="callout warn">
<div class="h">⚠ One rule makes interpolation work</div>
<p>Every source must have the <strong>same contours, same order, same number of points</strong>. That's why we <em>copied</em> the Regular and pushed its points around. If sources diverge, Fontra shows a <strong>bug icon</strong> next to the source.</p>
</div>

<h2 id="magic">6. The magic</h2>

<div class="video"><div class="play">▶</div><div class="cap">🎬 the slider gliding, letters breathing</div></div>

Type `HoHoHo` and drag the Weight slider slowly from 400 to 900. Your letters *glide* through every weight in between. Stop anywhere: that weight exists now, and nobody drew it. What you see there is interpolated, so it is not editable — but the **+** under *Glyph sources* adds an editable source right at that location, the day you want to correct it. This is what **variable-first** means: you never configured interpolation, you never left it.

<h2 id="export">7. Export and install</h2>

<div class="video"><div class="play">▶</div><div class="cap">🎬 Export as → TTF → installed</div></div>

<ol class="steps">
<li><strong>File → Export as…</strong> → <strong>TrueType (.ttf)</strong> → save.</li>
<li>Install it (double-click → Install Font).</li>
<li>Open any app with a variable-font slider, or drop the file on <a href="https://wakamaifondue.com" target="_blank" rel="noopener">wakamaifondue.com</a>. Type <code>HoHoHo</code>. Try every weight.</li>
</ol>

<div class="callout tip"><div class="h">🎉 You made a variable font in half an hour.</div><p>Real, installable, with a working axis and two named styles.</p></div>

---

<h2 id="next">Where to go next</h2>

<div class="cardgrid">
<a class="card" href="pen-tool.html"><div class="t">Drawing with the pen tool</div><div class="d">Real Bézier outlines, in all weights at once.</div></a>
<a class="card" href="variable-components-tutorial.html"><div class="t">Variable components</div><div class="d">The clever stuff Fontra was built for.</div></a>
<a class="card" href="reference-axes.html"><div class="t">Axes reference</div><div class="d">Mappings, discrete axes, value labels.</div></a>
</div>

<div class="callout note"><div class="h">Stuck?</div><p>The <a href="https://discord.gg/SeZWugEYzd" target="_blank" rel="noopener">Fontra Discord</a> is friendly to beginners — this tutorial was written imagining you there.</p></div>

<div class="pager">
<a class="prev" href="get-started.html"><div class="dir">← Previous</div><div class="ttl">Get started</div></a>
<a class="next" href="learn.html"><div class="dir">Next →</div><div class="ttl">Drawing with the pen tool</div></a>
</div>

<div class="editline">🎬 = a 10–20 s screen recording goes here · <a href="#">Improve this page on GitHub</a> · Last updated 2026-06</div>
