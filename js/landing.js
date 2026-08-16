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
   Auto-redirect: setelah ketiga kata peran (Pendidik / IT
   Enthusiast / Vibe Coder) selesai muncul di hero, pindah ke
   portofolio lengkap (v1/). Kata ke-3 mulai t=4.5s dan slide
   0.75s -> selesai 5.25s; redirect 6s setelah load (+ buffer).
   ============================================================ */
(function () {
  "use strict";

  var TARGET = "v1/";
  var REDIRECT_MS = 6000; // 3 kata selesai di 5.25s, + 0.75s buffer
  var LEAVE_MS = 750; // transisi exit 0.75s = var(--anim-dur) di css/landing.css

  setTimeout(function () {
    // fade-out + naik perlahan (body.leaving), lalu navigasi ke portofolio lengkap
    document.body.classList.add("leaving");
    setTimeout(function () {
      window.location.href = TARGET;
    }, LEAVE_MS);
  }, REDIRECT_MS);
})();
