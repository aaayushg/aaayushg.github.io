(function () {
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var supportsHover = window.matchMedia("(hover: hover)").matches;

  /* Theme toggle */
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    var root = document.documentElement;
    var isDark = root.getAttribute("data-theme") === "dark";
    themeBtn.setAttribute("aria-pressed", String(isDark));
    themeBtn.addEventListener("click", function () {
      isDark = root.getAttribute("data-theme") !== "dark";
      if (isDark) {
        root.setAttribute("data-theme", "dark");
      } else {
        root.removeAttribute("data-theme");
      }
      themeBtn.setAttribute("aria-pressed", String(isDark));
      try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
      } catch (e) {}
    });
  }

  /* Mobile navigation toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
  }

  /* Count-up helper for understated impact metrics */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    if (isNaN(target)) return;
    if (reducedMotion) {
      el.textContent = target + suffix;
      return;
    }
    var start = null;
    var duration = 1100;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }
    window.requestAnimationFrame(step);
  }

  /* Scroll-reveal, staggered cascades, dividers, timeline & count-ups */
  var targets = document.querySelectorAll(".reveal, .stagger, .timeline, .section-head, [data-count]");
  if (targets.length) {
    if ("IntersectionObserver" in window && !reducedMotion) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var el = entry.target;
            if (el.hasAttribute("data-count")) {
              animateCount(el);
            } else {
              el.classList.add("is-visible");
            }
            observer.unobserve(el);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
      );

      targets.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      targets.forEach(function (el) {
        if (el.hasAttribute("data-count")) {
          animateCount(el);
        } else {
          el.classList.add("is-visible");
        }
      });
    }
  }

  /* Cached-rect pointer spotlight, subtle 3D photo tilt & magnetic buttons */
  if (supportsHover && !reducedMotion) {
    var cards = document.querySelectorAll(".focus-card, .info-card, .timeline-item, .pub-card");
    cards.forEach(function (card) {
      var rect = null;
      card.classList.add("spotlight-card");
      card.addEventListener("mouseenter", function () {
        rect = card.getBoundingClientRect();
      });
      card.addEventListener("mousemove", function (e) {
        if (!rect) rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - rect.left + "px");
        card.style.setProperty("--my", e.clientY - rect.top + "px");
      });
      card.addEventListener("mouseleave", function () {
        rect = null;
      });
    });

    var tiltCards = document.querySelectorAll(".feature-photo, .profile-card");
    tiltCards.forEach(function (el) {
      var rect = null;
      el.addEventListener("mouseenter", function () {
        rect = el.getBoundingClientRect();
      });
      el.addEventListener("mousemove", function (e) {
        if (!rect) rect = el.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform =
          "rotateX(" + (-py * 3).toFixed(2) + "deg) rotateY(" + (px * 3).toFixed(2) + "deg)";
      });
      el.addEventListener("mouseleave", function () {
        rect = null;
        el.style.transform = "";
      });
    });

    var buttons = document.querySelectorAll(".btn");
    buttons.forEach(function (btn) {
      var rect = null;
      btn.addEventListener("mouseenter", function () {
        rect = btn.getBoundingClientRect();
      });
      btn.addEventListener("mousemove", function (e) {
        if (!rect) rect = btn.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
        var y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
        btn.style.transform = "translate(" + x.toFixed(1) + "px, " + (y - 2).toFixed(1) + "px)";
      });
      btn.addEventListener("mouseleave", function () {
        rect = null;
        btn.style.transform = "";
      });
    });
  }

  /* Scroll progress bar, sticky header depth, parallax, and back-to-top */
  var progressBar = document.querySelector(".scroll-progress");
  var header = document.querySelector(".site-header");
  var parallaxImg = document.querySelector(".feature-photo__img");
  var backToTop = document.querySelector(".back-to-top");
  var ticking = false;

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    });
  }

  function onScroll() {
    var scrollY = window.scrollY || window.pageYOffset;

    if (header) {
      header.classList.toggle("is-scrolled", scrollY > 12);
    }

    if (backToTop) {
      backToTop.classList.toggle("is-visible", scrollY > 420);
    }

    if (progressBar) {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
      progressBar.style.transform = "scaleX(" + ratio + ")";
    }

    if (parallaxImg && !reducedMotion) {
      var rect = parallaxImg.closest(".feature-photo__viewport").getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        var progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        var offset = (progress - 0.5) * 24;
        parallaxImg.style.transform = "scale(1.05) translateY(" + offset.toFixed(2) + "px)";
      }
    }

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  onScroll();
})();
