/* Fontra Docs — shared behavior */
(function () {
  // ---- theme ----
  // Follows the system by default; the toggle sets an explicit theme and
  // remembers it (head.html applies the saved theme before first paint).
  const root = document.documentElement;
  window.toggleTheme = function () {
    const explicit = root.getAttribute("data-theme");
    const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentDark = explicit ? explicit === "dark" : systemDark;
    const next = currentDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("fontra-docs-theme", next); } catch (e) {}
  };

  // ---- mobile nav ----
  window.toggleNav = function () { document.body.classList.toggle("nav-open"); };
  document.addEventListener("click", function (e) {
    if (e.target.classList && e.target.classList.contains("scrim")) document.body.classList.remove("nav-open");
  });

  document.addEventListener("DOMContentLoaded", function () {
    // ---- keep the current sidebar entry in view ----
    const sidebar = document.querySelector(".sidebar");
    const current = document.querySelector(".sidebar .nav a.on, .sidebar .lbl.on");
    if (sidebar && current) {
      const top = current.getBoundingClientRect().top - sidebar.getBoundingClientRect().top;
      if (top > sidebar.clientHeight - 80) sidebar.scrollTop = top - sidebar.clientHeight / 2;
    }

    // ---- heading anchors + scrollspy TOC ----
    const article = document.querySelector(".article");
    if (!article) return;
    const heads = article.querySelectorAll("h2[id], h3[id]");
    heads.forEach(function (h) {
      const a = document.createElement("a");
      a.href = "#" + h.id; a.className = "anchor"; a.textContent = "#";
      a.setAttribute("aria-label", "Link to this section");
      h.appendChild(a);
    });
    const tocLinks = document.querySelectorAll(".toc a");
    if (!tocLinks.length) return;
    const map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.remove("current"); });
          const a = map[en.target.id];
          if (a) a.classList.add("current");
        }
      });
    }, { rootMargin: "-70px 0px -70% 0px" });
    heads.forEach(function (h) { obs.observe(h); });
  });
})();
