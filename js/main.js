(function () {
  "use strict";

  /* Sticky nav scroll state */
  var header = document.querySelector(".site-header");
  if (header) {
    var setScrolled = function () {
      var scrolled = window.scrollY > 24;
      header.classList.toggle("is-scrolled", scrolled);
    };
    window.addEventListener("scroll", setScrolled, { passive: true });
    // Defer the initial read to the next frame instead of forcing a
    // synchronous layout during script execution (Lighthouse: forced reflow).
    requestAnimationFrame(setScrolled);
  }

  /* Mobile drawer */
  var hamburger = document.querySelector("[data-hamburger]");
  var drawer = document.querySelector("[data-drawer]");
  var drawerClose = document.querySelector("[data-drawer-close]");

  if (hamburger && drawer) {
    var lastFocused = null;

    var focusableSelector = 'a[href], button:not([disabled])';

    var closeTimer = null;

    var openDrawer = function () {
      if (closeTimer) { window.clearTimeout(closeTimer); closeTimer = null; }
      lastFocused = document.activeElement;
      drawer.classList.add("is-open");
      // Force layout with display:block applied before triggering the
      // transform transition, otherwise the browser collapses both into
      // one frame and the panel just appears with no slide-in.
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
      if (e.key === "Escape") {
        closeDrawer();
        return;
      }
      if (e.key === "Tab") {
        var focusables = Array.prototype.slice.call(drawer.querySelectorAll(focusableSelector));
        if (!focusables.length) return;
        var firstEl = focusables[0];
        var lastEl = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    hamburger.addEventListener("click", function () {
      var isOpen = drawer.getAttribute("data-open") === "true";
      if (isOpen) closeDrawer(); else openDrawer();
    });
    if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeDrawer);
    });
  }

  /* Scroll-spy active nav item */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main [id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a, .mobile-drawer-links a"));
  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = "#" + entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
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

  /* Newsletter form */
  var form = document.querySelector("[data-newsletter-form]");
  if (form) {
    var button = form.querySelector("button[type=submit]");
    var message = form.querySelector("[data-newsletter-message]");
    var buttonDefaultLabel = button ? button.textContent : "";

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input[type=email]");
      if (!input || !input.checkValidity()) {
        if (message) {
          message.textContent = "Please enter a valid email address.";
          message.setAttribute("data-state", "error");
        }
        return;
      }
      if (button) {
        button.disabled = true;
        button.textContent = "Signing you up…";
      }
      if (message) {
        message.textContent = "";
        message.removeAttribute("data-state");
      }
      window.setTimeout(function () {
        if (button) button.textContent = "You're in ♡";
        if (message) {
          message.textContent = "Thank you! Check your inbox to confirm your subscription.";
          message.setAttribute("data-state", "success");
        }
        input.value = "";
        window.setTimeout(function () {
          if (button) {
            button.disabled = false;
            button.textContent = buttonDefaultLabel;
          }
        }, 4000);
      }, 500);
    });
  }
})();
