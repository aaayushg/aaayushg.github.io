(function () {
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var supportsHover = window.matchMedia("(hover: hover)").matches;

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

  /* Scroll-reveal, staggered cascades, section dividers & timeline rail */
  var targets = document.querySelectorAll(".reveal, .stagger, .timeline, .section-head");
  if (targets.length) {
    if ("IntersectionObserver" in window && !reducedMotion) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -28px 0px" }
      );

      targets.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }

  /* Pointer-tracking spotlight on cards */
  if (supportsHover && !reducedMotion) {
    var cards = document.querySelectorAll(".focus-card, .info-card, .timeline-item, .pub-card");
    cards.forEach(function (card) {
      card.classList.add("spotlight-card");
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - rect.left + "px");
        card.style.setProperty("--my", e.clientY - rect.top + "px");
      });
    });

    /* Subtle magnetic micro-pull on primary buttons */
    var buttons = document.querySelectorAll(".btn");
    buttons.forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var rect = btn.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
        var y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
        btn.style.transform = "translate(" + x.toFixed(1) + "px, " + (y - 2).toFixed(1) + "px)";
      });
      btn.addEventListener("mouseleave", function () {
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
      var rect = parallaxImg.parentElement.getBoundingClientRect();
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
