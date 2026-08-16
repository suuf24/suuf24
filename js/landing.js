/* ============================================================
   Yusuf Rizaldy - Hero Landing interactions
   Mobile nav toggle, dropdown toggles (Layanan / Studi Kasus),
   outside-click and Escape close. Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  "use strict";

  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");

  var dropButtons = Array.prototype.slice.call(
    document.querySelectorAll(".nav-item .nav-link[aria-controls]")
  );

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function closeDrops() {
    dropButtons.forEach(function (btn) {
      var item = btn.parentElement;
      if (item) item.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  }

  // hamburger toggle
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // choosing a link inside the mobile menu closes it
  if (menu) {
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
  }

  // dropdown toggles
  dropButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.parentElement;
      if (!item) return;
      var wasOpen = item.classList.contains("open");
      closeDrops();
      if (!wasOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // click anywhere outside closes menus and dropdowns
  document.addEventListener("click", function (e) {
    var hitMenu = menu && (menu.contains(e.target) || (toggle && toggle.contains(e.target)));
    if (!hitMenu) {
      closeMenu();
      closeDrops();
    }
  });

  // Escape closes everything
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
      closeDrops();
    }
  });
})();

/* ============================================================
   Auto-redirect: after 4s without any user activity, go to the
   full portfolio (v1/). Any interaction resets the countdown.
   ============================================================ */
(function () {
  "use strict";

  var IDLE_MS = 4000;
  var TARGET = "v1/";
  var timer = null;

  function go() {
    window.location.href = TARGET;
  }

  function reset() {
    clearTimeout(timer);
    timer = setTimeout(go, IDLE_MS);
  }

  // any interaction counts as activity and restarts the countdown
  ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll"].forEach(function (name) {
    document.addEventListener(name, reset, { passive: true });
  });

  // pause while the tab is hidden, restart fresh when it is visible again
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      clearTimeout(timer);
    } else {
      reset();
    }
  });

  reset();
})();
