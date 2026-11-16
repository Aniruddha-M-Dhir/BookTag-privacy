// BookTag Legal & Support — Mobile Navigation Menu
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (!navToggle || !navLinks) return;

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !navLinks.classList.contains("open");
    navLinks.classList.toggle("open", isOpen);
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (navLinks.classList.contains("open") && !navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      toggleMenu(true);
    }
  });

  // Close when clicking any link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu(true);
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      toggleMenu(true);
      navToggle.focus();
    }
  });
});

