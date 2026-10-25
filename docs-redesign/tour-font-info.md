---
title: "Font info and the designspace · Fontra Docs"
description: "A tour of Font Info: names, axes, sources, cross-axis mapping, conditional substitutions, OpenType features and status definitions."
layout: article.html
status: ready
top: learn
active: tour-font-info
toc:
  - { id: open, label: "Opening Font Info" }
  - { id: font-info, label: "Font Info" }
  - { id: axes, label: "Axes" }
  - { id: sources, label: "Sources" }
  - { id: advanced, label: "Cross-axis mapping and substitutions" }
  - { id: features, label: "OpenType features" }
  - { id: statuses, label: "Status definitions" }
  - { id: next, label: "Where to go next" }
---

<div class="breadcrumb"><a href="index.html">Docs</a> › <a href="learn.html">Learn</a> › Font info and the designspace</div>

# Font info and the designspace

<p class="lede">What belongs to the whole font rather than to one glyph — its names, axes, sources, features and statuses — is in Font Info. Four minutes, panel by panel.</p>

<div class="pill-row">
<span class="pill">4 minutes</span>
<span class="pill">Beginner</span>
<span class="pill">Tour</span>
</div>

<div class="callout note"><div class="h">Follow along</div><p>Any font will do; <a href="https://github.com/LettError/mutatorSans" target="_blank" rel="noopener">MutatorSans</a>, with its Weight and Width axes, has something in most panels.</p></div>

<h2 id="open">Opening Font Info</h2>

The editor's **Font** menu opens Font Info in a tab of its own. Each item of the menu — Font Info, Axes, Sources, OpenType Features… — opens that page right at its panel; the panels are listed down the left side of the page.

<h2 id="font-info">Font Info</h2>

The family name, units per em, version, designer, licence and the rest of the font's names. Each field is saved as you leave it, and Undo works here too.

<h2 id="axes">Axes</h2>

<div class="video"><div class="play"></div><div class="cap">an axis: range, axis values, mapping graph</div></div>

An axis is a dimension the design varies along, like Weight. Give it a **range** and a **default**. **Axis values** name places on it: they become the exported instances. The **mapping graph** bends user values into design values; in the font, that is `avar`, the axis variations table. More in the [Axes reference](reference-axes.html).

<h2 id="sources">Sources</h2>

A source is a whole drawing at one place of the designspace, given by its axis values; Fontra interpolates between sources. **Line metrics** (ascender, x-height…) are set per source. A **sparse source** draws only some glyphs, where they need it.

<div class="callout tip"><div class="h">Font sources and glyph sources</div><p>The sources here belong to the whole font. A single glyph can also have sources of its own, at any place, added in the editor's Designspace panel with the <strong>+</strong> under <em>Glyph sources</em>.</p></div>

<h2 id="advanced">Cross-axis mapping and conditional substitutions</h2>

Two advanced panels; most fonts need neither, so leave them empty until you do.

- **Cross-axis mapping**: one axis moving others (`avar` version 2) — an optical size that also changes the weight, say.
- **Conditional substitutions**: a glyph swapped for another in a region of the designspace — a dollar sign losing its stroke in the heaviest weights. These are the designspace's *rules*.

<h2 id="features">OpenType features</h2>

The font's features, written in `.fea`: ligatures, alternates, anything the font does. Fontra compiles them at export, so a mistake in them shows up when you export. Kerning and mark positioning are not written here: Fontra Pak's export generates them from your kerning and anchors.

<h2 id="statuses">Status definitions</h2>

Empty at first: create the statuses your workflow needs, each with a name and a colour — *in progress*, *to check*, *finished*, or your own. Give a glyph source its status in the editor's Designspace panel; the [Font overview](tour-font-overview.html) colours its cells with it.

<h2 id="next">Where to go next</h2>

<div class="cardgrid">
<a class="card" href="tour-font-overview.html"><div class="t">The font overview</div><div class="d">Every glyph at once: glyph sets, grouping, statuses.</div></a>
<a class="card" href="setup-designspace.html"><div class="t">Set up a designspace</div><div class="d">Plan axes, ranges and the minimum sources.</div></a>
<a class="card" href="designspace.html"><div class="t">Designspace, explained</div><div class="d">Axes, sources and interpolation, in depth.</div></a>
</div>

<div class="pager">
<a class="prev" href="tutorial-first-font.html"><div class="dir">← Previous</div><div class="ttl">Your first variable font</div></a>
<a class="next" href="tour-font-overview.html"><div class="dir">Next →</div><div class="ttl">The font overview</div></a>
</div>

<div class="editline">Striped frames mark where a 10–20 s screen recording goes · Also a guided tour in <em>Try Fontra</em> · <a href="https://github.com/fontra/fontra-docs-redesign/edit/main/docs-redesign/tour-font-info.md" target="_blank" rel="noopener">Improve this page on GitHub</a> · Last updated 2026-10</div>
