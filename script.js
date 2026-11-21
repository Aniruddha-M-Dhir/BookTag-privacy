// BookTag Legal & Support — Mobile Navigation Menu
function toggleNavMenu(forceClose) {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (!navToggle || !navLinks) return;

  const isOpen = forceClose === true ? false : !navLinks.classList.contains("open");
  navLinks.classList.toggle("open", isOpen);
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function initNav() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (!navToggle || !navLinks) return;

  // Toggle button click listener
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleNavMenu();
  });

  // Close when clicking anywhere outside
  document.addEventListener("click", (e) => {
    if (navLinks.classList.contains("open") && !navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      toggleNavMenu(true);
    }
  });

  // Close when clicking any link inside the menu
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggleNavMenu(true);
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      toggleNavMenu(true);
      navToggle.focus();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNav);
} else {
  initNav();
}
