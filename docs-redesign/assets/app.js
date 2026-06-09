/* Fontra Docs redesign prototype — shared behavior */
(function () {
  // ---- theme ----
  const root = document.documentElement;
  const saved = localStorage.getItem("fontra-docs-theme");
  if (saved) root.setAttribute("data-theme", saved);
  window.toggleTheme = function () {
    const cur = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", cur);
    localStorage.setItem("fontra-docs-theme", cur);
  };

  // ---- mobile nav ----
  window.toggleNav = function () { document.body.classList.toggle("nav-open"); };
  document.addEventListener("click", function (e) {
    if (e.target.classList && e.target.classList.contains("scrim")) document.body.classList.remove("nav-open");
  });

  // ---- mock search ----
  window.mockSearch = function () {
    alert("Search is a mockup in this prototype.\n\nThe real site would use a client-side index (e.g. Pagefind or Lunr) over all pages — no server needed, works on GitHub Pages.");
  };
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); window.mockSearch(); }
  });

  // ---- heading anchors + scrollspy TOC ----
  document.addEventListener("DOMContentLoaded", function () {
    const article = document.querySelector(".article");
    if (!article) return;
    const heads = article.querySelectorAll("h2[id], h3[id]");
    heads.forEach(function (h) {
      const a = document.createElement("a");
      a.href = "#" + h.id; a.className = "anchor"; a.textContent = "#";
      h.appendChild(a);
    });
    const tocLinks = document.querySelectorAll(".toc a");
    if (!tocLinks.length) return;
    const map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          tocLinks.forEach(function (a) { a.style.color = ""; a.style.borderColor = ""; });
          const a = map[en.target.id];
          if (a) { a.style.color = "var(--link)"; a.style.borderColor = "var(--link)"; }
        }
      });
    }, { rootMargin: "-70px 0px -70% 0px" });
    heads.forEach(function (h) { obs.observe(h); });
  });
})();
