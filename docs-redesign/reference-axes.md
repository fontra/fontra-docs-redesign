---
title: "Axes · Reference · Fontra Docs"
layout: article.html
top: reference
active: axes
toc:
  - { id: add, label: "Adding an axis" }
  - { id: names, label: "Names" }
  - { id: range, label: "Range" }
  - { id: continuous, label: "Continuous", lvl3: true }
  - { id: discrete, label: "Discrete", lvl3: true }
  - { id: mapping, label: "Mapping" }
  - { id: values, label: "Axis values" }
  - { id: links, label: "See also" }
---

<div class="breadcrumb"><a href="index.html">Docs</a> › <a href="reference.html">Reference</a> › Font › Axes</div>

# Axes

<p class="lede">Define the variation axes of your designspace. Access via <strong>Font → Axes</strong>. Because Fontra is variable-first, most projects have at least one axis — usually <em>Weight</em>.</p>

<div class="callout tip"><div class="h">Before you start</div><p>If you're not sure what axes your project needs, read <a href="designspace.html">Designspace</a> first — it walks through planning axes, ranges and sources.</p></div>

<h2 id="add">Adding an axis</h2>

Click **New axis…**. Reorder axes by drag and drop. Each axis has a name, a type, a range, optional mapping, and optional value labels.

<div class="video"><div class="play">▶</div><div class="cap">🎬 adding a Weight axis</div></div>

<h2 id="names">Names</h2>

| Entry | Description |
|---|---|
| Name | Identifies the axis internally. |
| OT tag | Exactly 4 characters. Use [registered tags](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg) where they exist; custom tags must be all-uppercase. |
| UI Name | The label end users see. Often the same as Name. |

<h2 id="range">Range</h2>

An axis is either **Continuous** or **Discrete**.

<h3 id="continuous">Continuous</h3>

<table>
<tbody>
<tr><th>Minimum</th><td>e.g. 100 for Thin on a Weight axis</td></tr>
<tr><th>Default</th><td>e.g. 400 for Regular</td></tr>
<tr><th>Maximum</th><td>e.g. 900 for Black</td></tr>
</tbody>
</table>

<h3 id="discrete">Discrete</h3>

<table>
<tbody>
<tr><th>Values</th><td>A list, e.g. 0 = Upright, 1 = Italic</td></tr>
<tr><th>Default</th><td>e.g. 0 (Upright)</td></tr>
</tbody>
</table>

<div class="callout note"><div class="h">Tip: keep ranges honest</div><p>Only span the range you actually have designs for. You can always widen an axis later when you add the matching sources.</p></div>

<h2 id="mapping">Mapping</h2>

The mapping list lets you remap user-facing values onto source values — the `avar` table, a.k.a. non-linear interpolation. The mapping graph visualizes it.

**Example.** A Weight axis 0–1000 with sources at Light 0, Regular 250, Medium 400, Bold 750, ExtraBold 1000 can be remapped so users see Light 200, Regular 400, Medium 500, Bold 700, ExtraBold 800.

<h2 id="values">Axis values</h2>

Axis value labels populate the `STAT` table and drive instance generation on export.

<div class="callout warn"><div class="h">⚠ How instances are made</div><p>Fontra has no separate instance list. Its export creates <code>fvar</code> instances from axis value labels. One weight axis with Thin/Regular/Bold labels yields three instances; multiple axes yield every combination (3 weights × 3 widths = 9).</p></div>

| Entry | Description |
|---|---|
| Name | Style name, e.g. Regular |
| Value | e.g. 400 |
| Min / Max | Range over which the label applies |
| Linked | Linked value, e.g. Regular → Bold 700 |
| Elidable | Hide the name (e.g. Upright on an Italic axis) |

---

<h2 id="links">See also</h2>

- [Designspace](designspace.html) — planning axes and sources (concept)
- <a href="#">Cross-axis mapping</a> — avar-2 (reference)
- [Your first variable font](tutorial-first-font.html#axis) — adding a Weight axis in practice

<div class="pager">
<a class="prev" href="reference.html"><div class="dir">← Reference</div><div class="ttl">Overview</div></a>
<a class="next" href="#"><div class="dir">Next →</div><div class="ttl">Cross-axis mapping</div></a>
</div>

<div class="editline"><a href="#">Improve this page on GitHub</a> · Last updated 2026-06</div>
