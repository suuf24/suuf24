/* ============================================================
   Portfolio UI - renders every section from js/data.js
   ============================================================ */
(function () {
  "use strict";

  if (typeof PORTFOLIO === "undefined") return;

  var data = PORTFOLIO;

  /* ---------- small helpers ---------- */
  function icon(name, cls) {
    return (
      '<svg class="icon ' + (cls || "") + '" aria-hidden="true"><use href="#i-' + name + '"></use></svg>'
    );
  }

  function externalLinkAttrs() {
    return ' target="_blank" rel="noopener noreferrer"';
  }

  var $ = function (sel) {
    return document.querySelector(sel);
  };

  /* ---------- render: navigation ---------- */
  function renderNav() {
    var list = $("#nav-list");
    var footerList = $("#footer-nav-list");
    var links = data.nav
      .map(function (item) {
        return (
          '<li><a href="#' +
          item.id +
          '" data-nav="' +
          item.id +
          '">' +
          item.label +
          "</a></li>"
        );
      })
      .join("");
    list.innerHTML = links;
    footerList.innerHTML = links;
  }

  /* ---------- render: personal info card ---------- */
  function renderPersonalInfo() {
    var p = data.personal;
    var rows = [
      { label: "Nama", value: p.name },
      { label: "Tempat & Tanggal Lahir", value: p.birth },
      { label: "Alamat", value: p.address },
      {
        label: "Telepon",
        value: p.phone,
        html: '<a href="' + p.phoneHref + '">' + p.phone + "</a>",
      },
      {
        label: "Email",
        value: p.email,
        html: '<a href="mailto:' + p.email + '">' + p.email + "</a>",
      },
      {
        label: "Website",
        value: p.website,
        html: '<a href="' + p.websiteHref + '"' + externalLinkAttrs() + ">" + p.website + "</a>",
      },
      {
        label: "LinkedIn",
        value: "bit.ly/linkedinYusuf",
        html: '<a href="' + p.linkedin + '"' + externalLinkAttrs() + ">bit.ly/linkedinYusuf</a>",
      },
      {
        label: "Instagram",
        value: p.instagram,
        html: '<a href="' + p.instagramHref + '"' + externalLinkAttrs() + ">" + p.instagram + "</a>",
      },
    ];

    $("#personal-info").innerHTML = rows
      .map(function (r) {
        return (
          '<div><dt>' + r.label + "</dt><dd>" + (r.html || r.value) + "</dd></div>"
        );
      })
      .join("");
  }

  /* ---------- render: intersection domains ---------- */
  function renderDomains() {
    var items = data.domains
      .map(function (d) {
        return (
          '<div class="domain-card">' +
          '<div class="domain-card-icon">' +
          icon(d.icon) +
          "</div>" +
          "<div><h4>" +
          d.label +
          "</h4></div>" +
          "</div>"
        );
      })
      .join("");
    $("#domains-grid").innerHTML = items;
  }

  /* ---------- render: experience (click-to-expand cards) ---------- */
  // collapsed cards show only the job (position, org, period); all duties
  // stay hidden until the card is clicked, then they expand smoothly
  function renderExperience() {
    var html = data.experience
      .map(function (exp, i) {
        var pill = exp.current ? '<span class="exp-pill">Saat Ini</span>' : "";
        var duties = exp.responsibilities
          .map(function (r) {
            return "<li>" + r + "</li>";
          })
          .join("");
        var detail =
          '<div class="exp-collapse" id="exp-detail-' +
          i +
          '">' +
          '<ul class="exp-list">' +
          duties +
          "</ul>" +
          "</div>" +
          '<button class="exp-toggle" type="button" data-count="' +
          exp.responsibilities.length +
          '" aria-expanded="false" aria-controls="exp-detail-' +
          i +
          '">' +
          '<span class="exp-toggle-label">Lihat detail (' +
          exp.responsibilities.length +
          ")</span>" +
          icon("chevron-down") +
          "</button>";
        return (
          '<article class="exp-item ' +
          (exp.current ? "current" : "") +
          ' reveal">' +
          '<div class="exp-meta">' +
          '<span class="exp-period">' +
          exp.period +
          "</span>" +
          pill +
          "</div>" +
          '<div class="exp-card">' +
          '<h3 class="exp-position">' +
          exp.position +
          "</h3>" +
          '<p class="exp-org">' +
          exp.organization +
          "</p>" +
          detail +
          "</div>" +
          "</article>"
        );
      })
      .join("");
    $("#experience-list").innerHTML = html;

    // whole card is the trigger: click anywhere on it toggles the details
    // (the button inside bubbles up to this same handler, so it fires once)
    $("#experience-list").addEventListener("click", function (e) {
      var card = e.target.closest(".exp-card");
      if (!card) return;
      var item = card.closest(".exp-item");
      var btn = item.querySelector(".exp-toggle");
      var expanded = item.classList.toggle("expanded");
      if (btn) {
        btn.setAttribute("aria-expanded", expanded ? "true" : "false");
        var label = btn.querySelector(".exp-toggle-label");
        if (label) {
          label.textContent = expanded
            ? "Tutup"
            : "Lihat detail (" + (btn.getAttribute("data-count") || "") + ")";
        }
      }
    });
  }

  /* ---------- render: education ---------- */
  function renderEducation() {
    var html = data.education
      .map(function (edu) {
        var cls = edu.type === "informal" ? "informal" : "formal";
        return (
          '<article class="edu-card ' +
          cls +
          ' reveal">' +
          '<div><span class="edu-type ' +
          cls +
          '">' +
          (cls === "formal" ? "Formal" : "Informal") +
          '</span><p class="edu-period">' +
          edu.period +
          "</p></div>" +
          '<div class="edu-main"><h3 class="edu-degree">' +
          edu.degree +
          "</h3>" +
          '<p class="edu-school">' +
          edu.school +
          "</p></div>" +
          "</article>"
        );
      })
      .join("");
    $("#education-list").innerHTML = html;
  }

  /* ---------- render: skills + languages ---------- */
  function renderSkills() {
    var html = data.skills
      .map(function (cat) {
        var chips = cat.items
          .map(function (s) {
            return '<span class="skill-chip">' + s + "</span>";
          })
          .join("");
        return (
          '<article class="skill-card reveal">' +
          '<div class="skill-head">' +
          '<div class="skill-icon">' +
          icon(cat.icon) +
          "</div>" +
          '<h3 class="skill-title">' +
          cat.category +
          "</h3>" +
          "</div>" +
          '<div class="skill-chips">' +
          chips +
          "</div>" +
          "</article>"
        );
      })
      .join("");
    $("#skills-list").innerHTML = html;

    var langs = data.languages
      .map(function (l) {
        return (
          "<li>" +
          '<span class="lang-name">' +
          l.name +
          "</span>" +
          '<span class="lang-level">' +
          l.level +
          "</span>" +
          "</li>"
        );
      })
      .join("");
    $("#languages-list").innerHTML = langs;
  }

  /* ---------- render: projects + filters ---------- */
  function renderProjects() {
    var cats = ["Pendidikan", "Aplikasi Web", "Game", "Utilitas"];
    var filterBtns =
      '<button class="filter-btn" type="button" data-filter="all" aria-pressed="true">Semua Proyek</button>';
    filterBtns += cats
      .map(function (c) {
        return (
          '<button class="filter-btn" type="button" data-filter="' +
          c +
          '" aria-pressed="false">' +
          c +
          "</button>"
        );
      })
      .join("");
    $("#project-filters").innerHTML = filterBtns;

    var cards = data.projects
      .map(function (proj) {
        return (
          '<article class="project-card reveal" data-category="' +
          proj.category +
          '">' +
          '<span class="project-cat">' +
          proj.category +
          "</span>" +
          '<h3 class="project-title">' +
          proj.name +
          "</h3>" +
          '<p class="project-desc">' +
          proj.description +
          "</p>" +
          '<a class="project-link" href="' +
          proj.url +
          '"' +
          externalLinkAttrs() +
          ' aria-label="Buka ' +
          proj.name +
          " di tab baru" +
          '">' +
          '<span class="project-url">' +
          proj.url +
          "</span>" +
          icon("external") +
          "</a>" +
          "</article>"
        );
      })
      .join("");
    $("#projects-list").innerHTML = cards;

    // filter behavior
    $("#project-filters").addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      var filter = btn.getAttribute("data-filter");
      Array.prototype.forEach.call(
        $("#project-filters").querySelectorAll(".filter-btn"),
        function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        }
      );
      Array.prototype.forEach.call(
        $("#projects-list").querySelectorAll(".project-card"),
        function (card) {
          var show = filter === "all" || card.getAttribute("data-category") === filter;
          card.classList.toggle("hidden", !show);
        }
      );
    });
  }

  /* ---------- render: achievements (record list) ---------- */
  function renderAchievements() {
    var html = data.achievements
      .map(function (a) {
        return (
          '<li class="achievement-row reveal">' +
          '<p class="achievement-title">' +
          a.text +
          "</p>" +
          '<a class="achievement-open" href="' +
          a.url +
          '"' +
          externalLinkAttrs() +
          ' aria-label="Buka bukti: ' +
          a.text +
          '">OPEN</a>' +
          "</li>"
        );
      })
      .join("");
    $("#achievements-list").innerHTML = html;
  }

  /* ---------- render: contact ---------- */
  function renderContact() {
    var p = data.personal;
    var items = [
      {
        label: "Email",
        value: p.email,
        href: "mailto:" + p.email,
        icon: "mail",
        external: false,
      },
      {
        label: "Telepon",
        value: p.phone,
        href: p.phoneHref,
        icon: "phone",
        external: false,
      },
      {
        label: "Website",
        value: p.website,
        href: p.websiteHref,
        icon: "globe",
        external: true,
      },
      {
        label: "LinkedIn",
        value: "bit.ly/linkedinYusuf",
        href: p.linkedin,
        icon: "linkedin",
        external: true,
      },
      {
        label: "Instagram",
        value: p.instagram,
        href: p.instagramHref,
        icon: "instagram",
        external: true,
      },
    ];

    var html = items
      .map(function (item) {
        var target = item.external ? externalLinkAttrs() : "";
        return (
          '<li><a class="contact-item" href="' +
          item.href +
          '"' +
          target +
          ' aria-label="' +
          item.label +
          " - " +
          item.value +
          '">' +
          '<span class="contact-icon">' +
          icon(item.icon) +
          "</span>" +
          "<span>" +
          '<span class="contact-label">' +
          item.label +
          '</span><br /><span class="contact-value">' +
          item.value +
          "</span>" +
          "</span>" +
          '<span class="contact-arrow">' +
          icon("arrow-right") +
          "</span>" +
          "</a></li>"
        );
      })
      .join("");
    $("#contact-list").innerHTML = html;
  }

  /* ---------- hero: mini-browser project player ---------- */
  function initDemoPlayer() {
    var frame = $("#player-frame");
    var prev = $("#player-prev");
    var next = $("#player-next");
    var nameEl = $("#player-name");
    var catEl = $("#player-cat");
    var urlEl = $("#player-url");
    var extEl = $("#player-ext");
    var countEl = $("#player-count");
    var viewport = document.querySelector(".browser-viewport");
    var loading = document.querySelector(".browser-loading");
    if (!frame || !data.projects.length) return;

    var index = 0;
    var loadTimer = null;

    function showLoading() {
      if (!loading) return;
      loading.classList.remove("hide");
      // safety net: never leave the placeholder up if a load event never fires
      clearTimeout(loadTimer);
      loadTimer = window.setTimeout(function () {
        loading.classList.add("hide");
      }, 8000);
    }

    function hideLoading() {
      clearTimeout(loadTimer);
      if (loading) loading.classList.add("hide");
    }

    // the embedded project is cross-origin, but the parent still receives load
    frame.addEventListener("load", hideLoading);

    // render each project at a real desktop size, scaled down so it reads as
    // a miniature desktop; 30% when the card has room, less on narrow cards.
    // A project can declare its own design width (designW) when it was built
    // mobile-first (e.g. a 900px max-width cabinet); the stage keeps its fixed
    // size either way, and the scale is adjusted so the content always fills it.
    var DESKTOP_W = 1280;
    var DESKTOP_H = 720;
    var DESKTOP_ZOOM = 0.3;
    var currentFrame = { w: DESKTOP_W, h: DESKTOP_H };

    function fitScale() {
      if (!viewport) return;
      // compute the room available for the stage from the page container, not
      // the demo itself: the demo's own width is stretched by the fixed stage
      // size, so reading it would make the scale chase its own tail (the old
      // code overflowed the hero on narrow screens because of that)
      var container = document.querySelector(".container");
      var demo = viewport.closest(".demo");
      if (!container || !demo) return;
      var css = getComputedStyle(container);
      var dcs = getComputedStyle(demo);
      var avail =
        container.clientWidth -
        parseFloat(css.paddingLeft) -
        parseFloat(css.paddingRight) -
        parseFloat(dcs.paddingLeft) -
        parseFloat(dcs.paddingRight) -
        2; // demo border
      if (avail <= 0) return;
      // stage width is always min(384px, avail); the content scale follows so
      // the rendered project fills the stage regardless of its design width
      var scale =
        Math.min(DESKTOP_ZOOM, avail / DESKTOP_W) * (DESKTOP_W / currentFrame.w);
      viewport.style.setProperty("--scale", scale.toFixed(4));
    }

    fitScale();
    if (window.ResizeObserver) {
      new ResizeObserver(fitScale).observe(viewport.parentElement);
    } else {
      window.addEventListener("resize", fitScale);
    }

    function render() {
      var p = data.projects[index];
      var fw = p.designW || DESKTOP_W;
      var fh = Math.round(fw * (DESKTOP_H / DESKTOP_W));
      currentFrame = { w: fw, h: fh };
      viewport.style.setProperty("--frame-w", fw + "px");
      viewport.style.setProperty("--frame-h", fh + "px");
      frame.style.width = fw + "px";
      frame.style.height = fh + "px";
      fitScale();
      countEl.textContent = index + 1 + " dari " + data.projects.length;
      nameEl.textContent = p.name;
      catEl.textContent = p.category;
      urlEl.textContent = p.url.replace(/^https?:\/\//, "");
      extEl.setAttribute("href", p.url);
      if (frame.getAttribute("src") !== p.url) {
        showLoading();
        frame.setAttribute("src", p.url);
      } else {
        hideLoading();
      }
    }

    function step(dir) {
      index = (index + dir + data.projects.length) % data.projects.length;
      if (!viewport) {
        render();
        return;
      }
      // brief fade while the new project loads, then bring it back in
      viewport.classList.add("switching");
      window.setTimeout(function () {
        render();
        window.setTimeout(function () {
          viewport.classList.remove("switching");
        }, 160);
      }, 140);
    }

    prev.addEventListener("click", function () {
      step(-1);
    });
    next.addEventListener("click", function () {
      step(1);
    });

    render();
  }

  /* ---------- mobile nav ---------- */
  function initMobileNav() {
    var toggle = $("#nav-toggle");
    var list = $("#nav-list");

    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    list.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".site-header") && list.classList.contains("open")) {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- scrollspy (IntersectionObserver, no scroll listeners) ---------- */
  function initScrollspy() {
    var links = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));

    function setActive(id) {
      links.forEach(function (link) {
        var active = link.getAttribute("data-nav") === id;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }

    if (!("IntersectionObserver" in window)) return;

    // the active section is the one containing the viewport center line
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    data.nav.forEach(function (n) {
      var el = document.getElementById(n.id);
      if (el) io.observe(el);
    });

    // when the page bottom is in view, the last section is the current one
    var last = data.nav[data.nav.length - 1].id;
    // in-flow 1px element at the very end of the document, so "visible" means
    // the page bottom is on screen (absolute bottom:0 would anchor to the viewport)
    var bottomSentinel = document.createElement("div");
    bottomSentinel.setAttribute("aria-hidden", "true");
    bottomSentinel.style.cssText =
      "width:1px;height:1px;opacity:0;pointer-events:none;";
    document.body.appendChild(bottomSentinel);
    var bottomIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(last);
      });
    });
    bottomIo.observe(bottomSentinel);

    setActive("home");
  }

  /* ---------- smooth animated scrolling ---------- */
  function initSmoothScroll() {
    var reducedMotion = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;
    var prefersReduced = reducedMotion ? reducedMotion.matches : false;
    if (reducedMotion) {
      reducedMotion.addEventListener("change", function (e) {
        prefersReduced = e.matches;
      });
    }

    // read the central animation duration from CSS (--anim-dur) so changing
    // the token in styles.css also changes the scroll animation; fallback 1.5s
    var ANIM_MS = 1500;
    try {
      var cssDur = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--anim-dur")
        .trim();
      var m = cssDur.match(/^([\d.]+)s$/);
      if (m) ANIM_MS = parseFloat(m[1]) * 1000;
    } catch (e) {}

    var rafId = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function headerOffset() {
      var h = document.querySelector(".site-header");
      return (h ? h.offsetHeight : 68) + 12;
    }

    function animateScroll(targetY, forcedDuration) {
      if (rafId) cancelAnimationFrame(rafId);
      var startY = window.pageYOffset || document.documentElement.scrollTop;
      var maxY = document.documentElement.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(targetY, maxY));
      if (Math.abs(targetY - startY) < 2) return;

      // reduced motion: short, quick transition instead of an instant jump
      var duration = forcedDuration ? forcedDuration : ANIM_MS;
      var start = performance.now();

      function step(now) {
        var t = Math.min(1, (now - start) / duration);
        var y = startY + (targetY - startY) * easeInOutCubic(t);
        window.scrollTo(0, y);
        if (t < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          rafId = null;
        }
      }
      rafId = requestAnimationFrame(step);
    }

    // JS owns the animation; avoid double-animation from CSS smooth scroll
    document.documentElement.style.scrollBehavior = "auto";

    document.addEventListener("click", function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;
      var hash = link.getAttribute("href");
      var id = hash.length <= 1 ? "#home" : hash;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();

      var targetY =
        target.getBoundingClientRect().top +
        (window.pageYOffset || document.documentElement.scrollTop) -
        headerOffset();

      animateScroll(targetY, prefersReduced ? 220 : null);

      if (history.pushState) history.pushState(null, "", hash);
    });
  }

  /* ---------- header shadow (sentinel observer) ---------- */
  function initHeaderShadow() {
    var header = $("#site-header");
    if (!("IntersectionObserver" in window)) return;

    var sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText =
      "position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none;";
    document.body.appendChild(sentinel);

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        header.classList.toggle("scrolled", !entry.isIntersecting);
      });
    });
    io.observe(sentinel);
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("in");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------- footer year ---------- */
  function initYear() {
    var el = $("#year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------- boot ---------- */
  function boot() {
    renderNav();
    renderPersonalInfo();
    renderDomains();
    renderExperience();
    renderEducation();
    renderSkills();
    renderProjects();
    renderAchievements();
    renderContact();
    initDemoPlayer();
    initMobileNav();
    initSmoothScroll();
    initScrollspy();
    initHeaderShadow();
    initReveal();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
