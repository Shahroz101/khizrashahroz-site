(function () {
  "use strict";

  /* Sticky nav scroll state */
  var header = document.querySelector(".site-header");
  if (header) {
    var setScrolled = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", setScrolled, { passive: true });
    requestAnimationFrame(setScrolled);
  }

  /* Mobile drawer */
  var hamburger = document.querySelector("[data-hamburger]");
  var drawer = document.querySelector("[data-drawer]");
  var drawerClose = document.querySelector("[data-drawer-close]");

  if (hamburger && drawer) {
    var lastFocused = null;
    var focusableSelector = "a[href], button:not([disabled])";
    var closeTimer = null;

    var openDrawer = function () {
      if (closeTimer) { window.clearTimeout(closeTimer); closeTimer = null; }
      lastFocused = document.activeElement;
      drawer.classList.add("is-open");
      // Force layout with display:block applied before the transform
      // transition starts, otherwise the panel just appears with no slide.
      drawer.getBoundingClientRect();
      requestAnimationFrame(function () {
        drawer.setAttribute("data-open", "true");
      });
      hamburger.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-open");
      var first = drawer.querySelector(focusableSelector);
      if (first) first.focus();
      document.addEventListener("keydown", onKeydown);
    };

    var closeDrawer = function () {
      drawer.setAttribute("data-open", "false");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
      document.removeEventListener("keydown", onKeydown);
      if (lastFocused) lastFocused.focus();
      closeTimer = window.setTimeout(function () {
        drawer.classList.remove("is-open");
      }, 320);
    };

    var onKeydown = function (e) {
      if (e.key === "Escape") { closeDrawer(); return; }
      if (e.key === "Tab") {
        var focusables = Array.prototype.slice.call(drawer.querySelectorAll(focusableSelector));
        if (!focusables.length) return;
        var firstEl = focusables[0];
        var lastEl = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
      }
    };

    hamburger.addEventListener("click", function () {
      if (drawer.getAttribute("data-open") === "true") closeDrawer(); else openDrawer();
    });
    if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeDrawer); });
  }

  /* Scroll reveal */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var reveal = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { reveal.observe(el); });
  }

  /* Site search (client-side, against the build-time index) */
  var searchPage = document.querySelector("[data-search-page]");
  if (searchPage) {
    var input = document.getElementById("q");
    var results = searchPage.querySelector("[data-search-results]");
    var status = searchPage.querySelector("[data-search-status]");
    var indexUrl = searchPage.getAttribute("data-index");
    var index = null;
    var loading = null;
    var debounce = null;

    var esc = function (s) {
      return String(s).replace(/[&<>"]/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
      });
    };

    var picture = function (src, alt) {
      var dot = src.lastIndexOf(".");
      var base = src.slice(0, dot);
      return '<picture><source srcset="' + base + '.avif" type="image/avif"><source srcset="' + base + '.webp" type="image/webp">' +
        '<img src="' + src + '" alt="' + esc(alt) + '" loading="lazy" decoding="async"></picture>';
    };

    var card = function (p) {
      return '<article class="compact-card">' +
        '<a href="/' + p.s + '/" class="photo-link" tabindex="-1" aria-hidden="true"><div class="photo-slot photo-slot--img">' + picture(p.i, p.t) + '</div></a>' +
        '<div><div class="post-meta-row"><a class="cat-link" href="/' + p.cs + '/">' + esc(p.c) + '</a><span class="divider" aria-hidden="true">/</span><span class="time">' + esc(p.r) + '</span></div>' +
        '<h3><a href="/' + p.s + '/">' + esc(p.t) + '</a></h3><p class="excerpt">' + esc(p.e) + '</p></div></article>';
    };

    var tokenize = function (q) {
      return q.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).filter(function (t) { return t.length > 1; });
    };

    var score = function (p, terms) {
      var t = p.t.toLowerCase(), e = p.e.toLowerCase(), c = p.c.toLowerCase(), s = p.s;
      var total = 0;
      for (var i = 0; i < terms.length; i++) {
        var term = terms[i];
        var hit = false;
        if (t.indexOf(term) !== -1) { total += 6; hit = true; }
        if (s.indexOf(term) !== -1) { total += 3; hit = true; }
        if (c.indexOf(term) !== -1) { total += 3; hit = true; }
        if (e.indexOf(term) !== -1) { total += 1; hit = true; }
        if (!hit) return 0;
      }
      return total;
    };

    var render = function (q) {
      var terms = tokenize(q);
      if (!terms.length) {
        results.innerHTML = "";
        status.textContent = "Start typing, or try one of the rooms below.";
        return;
      }
      var matches = index
        .map(function (p) { return { p: p, s: score(p, terms) }; })
        .filter(function (m) { return m.s > 0; })
        .sort(function (a, b) { return b.s - a.s; })
        .slice(0, 60);
      results.innerHTML = matches.map(function (m) { return card(m.p); }).join("");
      status.textContent = matches.length
        ? matches.length + (matches.length === 1 ? " result" : " results") + " for “" + q.trim() + "”"
        : "No results for “" + q.trim() + "” — try a shorter word, or browse a room below.";
    };

    var run = function (q) {
      if (index) { render(q); return; }
      if (!loading) {
        status.textContent = "Loading…";
        loading = fetch(indexUrl, { credentials: "same-origin" })
          .then(function (r) { return r.json(); })
          .then(function (data) { index = data; })
          .catch(function () { status.textContent = "Search isn't available right now — browse a room below instead."; });
      }
      loading.then(function () { if (index) render(input.value); });
    };

    var syncUrl = function (q) {
      var url = new URL(window.location.href);
      if (q.trim()) url.searchParams.set("q", q.trim()); else url.searchParams.delete("q");
      window.history.replaceState(null, "", url.toString());
    };

    var initial = new URL(window.location.href).searchParams.get("q") || "";
    if (initial && input) input.value = initial;
    if (initial) run(initial);

    if (input) {
      input.addEventListener("input", function () {
        var q = input.value;
        window.clearTimeout(debounce);
        debounce = window.setTimeout(function () { syncUrl(q); run(q); }, 160);
      });
      var form = input.closest("form");
      if (form) {
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          window.clearTimeout(debounce);
          syncUrl(input.value);
          run(input.value);
        });
      }
    }
  }
})();
