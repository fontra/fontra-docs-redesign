/* Injects the shared topbar + sidebar so hub pages stay DRY.
   A page opts in with:  <body data-active="reference" data-top="reference"> ... </body>
   and an empty <div id="chrome-top"></div> + <aside id="chrome-side"></aside>.   */
(function () {
  const active = document.body.getAttribute("data-active") || "";
  const top = document.body.getAttribute("data-top") || "";

  const topnav = [
    ["get-started.html", "Get started", "get-started"],
    ["learn.html", "Learn", "learn"],
    ["guides.html", "Guides", "guides"],
    ["reference.html", "Reference", "reference"],
    ["workflow.html", "Workflow", "workflow"],
  ];

  const side = [
    ["🌱", "Get started", [
      ["get-started.html", "Overview", "get-started"],
      ["#", "Install Fontra Pak", "install"],
      ["tutorial-first-font.html", "Your first variable font", "first-font"],
      ["#", "Open an existing font", "open"],
      ["#", "Try Fontra online", "try", "planned"],
    ]],
    ["📚", "Learn", [
      ["learn.html", "All tutorials", "learn"],
      ["#", "Drawing with the pen tool", "pen"],
      ["#", "Editing across sources", "multisource"],
      ["#", "Variable components", "varcomp-t"],
    ]],
    ["🛠", "Guides", [
      ["guides.html", "All guides", "guides"],
      ["#", "Set up a designspace", "designspace-g"],
      ["#", "Kerning & spacing", "kerning"],
      ["#", "Export & install", "export"],
    ]],
    ["📖", "Reference", [
      ["reference.html", "Overview", "reference"],
      ["#", "Editor & tools", "editor"],
      ["reference-axes.html", "Font · Axes", "axes"],
      ["#", "Font · Sources", "sources-r"],
      ["#", "Keyboard shortcuts", "shortcuts"],
    ]],
    ["⚙️", "Workflow", [
      ["workflow.html", "Recipes & intro", "workflow"],
      ["#", "Action reference", "actions"],
      ["#", "Writing your own actions", "extend"],
    ]],
    ["🔁", "Migrate", [
      ["migrate.html", "Overview", "migrate"],
      ["#", "From Glyphs", "glyphs"],
      ["#", "From RoboFont", "robofont"],
    ]],
    ["💡", "Understand", [
      ["explanations.html", "All concepts", "explanations"],
      ["#", "Designspace", "designspace-e"],
      ["#", "Sources & layers", "sources-e"],
      ["#", "Variable components", "varcomp-e"],
    ]],
  ];

  // ---- topbar ----
  const topEl = document.getElementById("chrome-top");
  if (topEl) {
    topEl.className = "topbar";
    topEl.innerHTML =
      '<button class="iconbtn menuToggle" onclick="toggleNav()" aria-label="Menu">☰</button>' +
      '<a class="brand" href="index.html"><span class="mark">F</span> Fontra Docs <span class="tag">redesign</span></a>' +
      '<nav class="topnav">' +
        topnav.map(([h, t, id]) => `<a href="${h}"${id === top ? ' class="on"' : ""}>${t}</a>`).join("") +
      '</nav>' +
      '<div class="spacer"></div>' +
      '<div class="searchbox" onclick="mockSearch()"><span>🔍</span> Search docs <span class="k">⌘K</span></div>' +
      '<button class="iconbtn" onclick="toggleTheme()" aria-label="Theme">◐</button>' +
      '<a class="iconbtn" href="https://github.com/fontra/fontra" target="_blank" rel="noopener" title="GitHub">↗</a>';
  }

  // ---- sidebar ----
  const sideEl = document.getElementById("chrome-side");
  if (sideEl) {
    sideEl.className = "sidebar";
    sideEl.innerHTML = side.map(([ic, label, items]) =>
      '<div class="navgroup"><div class="lbl"><span class="ic">' + ic + '</span> ' + label + '</div><nav class="nav">' +
      items.map(it => {
        const [h, t, id, tag] = it;
        return `<a href="${h}"${id === active ? ' class="on"' : ""}>${t}` +
          (tag ? ` <span class="planned">${tag}</span>` : "") + "</a>";
      }).join("") +
      '</nav></div>'
    ).join("");
  }
})();
