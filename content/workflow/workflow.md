---
title: Fontra Workflow
description: "A command-line tool for processing fonts in repeatable, declarative pipelines: describe what should happen in a YAML file and run it."
permalink: /workflow/
---

<p class="lede">A command-line tool for processing fonts in repeatable, declarative pipelines. Describe what should happen in a YAML file (read, filter, merge, write) and run it.</p>

<div class="callout note"><div class="h">Work in progress</div><p>This section is new and still being written. The tool itself lives at <a href="https://github.com/fontra/fontra-workflow">fontra/fontra-workflow</a>, whose README is the reference for now.</p></div>

## A first pipeline

```yaml
# build.yaml
steps:
  - input: fontra-read
    source: MyFont.designspace
  - filter: subset-glyphs
    glyphNamesFile: latin-basic.txt
  - output: compile-fontmake
    destination: MyFont-Subset.ttf
```

```
$ fontra-workflow build.yaml --output-dir build
```

## Recipes

Copy, paste, adjust. The fastest way to learn Workflow is to modify a recipe.

{% cardgrid %}
+ Subset a font for the web | Keep a glyph set, drop the rest, compile.
+ Extract a static instance | Pin Weight 700 and export the Bold.
+ Convert format | .glyphs → .designspace, TTF → .fontra, and so on.
+ Merge two fonts | Fold a symbols font into a text family.
+ Ship only finished glyphs | Filter by development status, then compile.
+ Cubic → quadratic + round | Production clean-up before export.
{% endcardgrid %}

## How it works

- **Five step types**: `input`, `filter`, `output`, `fork`, `fork-merge`.
- **Lazy and pull-based**: outputs pull glyphs through the chain; only what is written gets processed.
- **Composable**: every filter is itself a font, so any output can feed any input.
- **Extensible**: third-party actions register through an entry point (this is how `fontra-compile` adds its compilers).

## Action reference

Every action with its arguments, types and defaults, covering axes and designspace, glyphs and outlines, subsetting, features and kerning, and compilation.

{% cardgrid %}
/workflow/action-reference/ | The complete catalog, grouped by purpose. | | All actions
/workflow/writing-actions/ | Subclass, override one hook, register. | | Writing your own action
{% endcardgrid %}
