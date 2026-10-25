---
title: "Variable components · Fontra Docs"
description: "Make a variable component in Fontra: a glyph with an axis of its own, used as a component and set per glyph and per source."
layout: article.html
status: ready
top: learn
active: varcomp-t
toc:
  - { id: idea, label: "The idea" }
  - { id: base, label: "1. A stem to reuse" }
  - { id: axis, label: "2. An axis of its own" }
  - { id: source, label: "3. A source at the end of it" }
  - { id: use, label: "4. Use it as a component" }
  - { id: per-source, label: "5. Different in every source" }
  - { id: change, label: "6. Change it once" }
  - { id: next, label: "Where to go next" }
---

<div class="breadcrumb"><a href="index.html">Docs</a> › <a href="learn.html">Learn</a> › Variable components</div>

# Variable components

<p class="lede">A component that can change shape where it is used: one stem, drawn once, that is narrow in an I and wider in a Bold H. The feature Fontra was built around, in a short lesson.</p>

<div class="pill-row">
<span class="pill">10 minutes</span>
<span class="pill">Intermediate</span>
<span class="pill">Lesson</span>
</div>

<div class="callout note"><div class="h">Follow along</div><p>Use the font of <a href="tutorial-first-font.html">Your first variable font</a>, with its Weight axis and its Regular and Black sources, or any font with a Weight axis.</p></div>

<h2 id="idea">The idea</h2>

A component is a glyph placed inside another glyph. A **variable component** is one whose glyph has **axes of its own** — a stem with a *width* axis, say. Each glyph that uses it sets those axes as it needs: the same stem, thin in one place and thick in another, and still a single drawing to correct.

<h2 id="base">1. A stem to reuse</h2>

In **Preview text**, type `/_stem` (a slash and a name stands for a glyph; the underscore says it is a part, not a letter). Double-click the grey placeholder to create it, and again to edit it.

With the **Shape tool** draw a rectangle, then with the **Pointer** double-click it and give it exact values in the **Transformation** panel: width `80`, height `700`, moved to x `0`, y `0`.

<h2 id="axis">2. An axis of its own</h2>

<div class="video"><div class="play"></div><div class="cap">Edit glyph axes: + , name it width</div></div>

In the **Designspace** panel, find the **Glyph axes** section and click its tool icon, *Edit glyph axes* (also in the **Glyph** menu). Click **+**: a new axis appears, from 0 to 100, default 0. Name it `width` and click **Okay**.

A `width` slider now shows under *Glyph axes*. It is this glyph's own: no other glyph has it.

<h2 id="source">3. A source at the end of it</h2>

Drag the `width` slider to `100`. What you see there can't be edited yet: click the **+** under **Glyph sources** and **Add**. The new source starts as a copy of what is shown, at `width` 100.

In that source, select the two points on the right of the rectangle and move them 120 units to the right (**Move** X `120` in Transformation, or <kbd>⇧</kbd><kbd>→</kbd> twelve times). Now drag the slider: the stem grows from 80 to 200 units wide, and every width in between exists.

<div class="callout warn"><div class="h"><span class="verify" title="To verify against the current Fontra build">verify</span> Same points, moved</div><p>As with font sources, the glyph's sources must have the same contours and points; that is why you moved points of the copy rather than drawing a new rectangle.</p></div>

<h2 id="use">4. Use it as a component</h2>

<div class="video"><div class="play"></div><div class="cap">Add Component, then the Location slider in Glyph info</div></div>

Type `I` in Preview text, create the glyph and open it. Right-click the canvas and choose **Add Component** (or Glyph › Add Component), find `_stem` and click **Add**. The stem appears at its default, 80 units wide.

Select the component with the Pointer. In **Glyph info**, under the component, **Location** has a `width` slider: set it to `40` and the I's stem is 128 units wide. Set the sidebearings as you like.

Do the same for `H`: two `_stem` components, at the same `width`, and a crossbar drawn as an ordinary rectangle. A glyph can mix components and contours.

<h2 id="per-source">5. Different in every source</h2>

The component's location is set **per source**, like a point's position. Go to the `Black` source of `I` (double-click it in *Glyph sources* if it is still grey, a virtual source), select the component and set its `width` to `100`: the Black I gets a 200-unit stem. Drag the Weight slider: the I's stem thickens with the weight, and the stem itself was drawn once.

<h2 id="change">6. Change it once</h2>

Open `_stem` again and change it — round its ends, make it a little taller. Every I and H that uses it follows, at its own width and in every source. That is the point of components; with variable components it holds even when the parts differ in size.

When you need a glyph's outline as plain contours, select the component and choose **Decompose Component** (<kbd>⇧</kbd><kbd>⌘</kbd><kbd>D</kbd>). You don't need to before exporting: the export turns variable components into outlines by itself.

<h2 id="next">Where to go next</h2>

<div class="cardgrid">
<a class="card" href="variable-components.html"><div class="t">Variable components, explained</div><div class="d">How they work, and how they are stored.</div></a>
<a class="card" href="editing-across-sources.html"><div class="t">Editing across sources</div><div class="d">Change every source at once.</div></a>
</div>

<div class="pager">
<a class="prev" href="kerning-spacing.html"><div class="dir">← Previous</div><div class="ttl">Spacing &amp; kerning</div></a>
<a class="next" href="learn.html"><div class="dir">Next →</div><div class="ttl">All tutorials</div></a>
</div>

<div class="editline">Striped frames mark where a 10–20 s screen recording goes · <a href="https://github.com/fontra/fontra-docs-redesign/edit/main/docs-redesign/variable-components-tutorial.md" target="_blank" rel="noopener">Improve this page on GitHub</a> · Last updated 2026-10</div>
