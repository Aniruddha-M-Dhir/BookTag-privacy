// BookTag Legal & Support — Mobile Navigation Menu
function toggleNavMenu(event, forceClose) {
  if (event) {
    if (event.stopPropagation) event.stopPropagation();
  }
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (!navToggle || !navLinks) return;

  const shouldOpen = forceClose === true ? false : !navLinks.classList.contains("open");
  if (shouldOpen) {
    navLinks.classList.add("open");
    navToggle.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
}

// Close when clicking outside of the menu
document.addEventListener("click", (e) => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navLinks && navLinks.classList.contains("open")) {
    if (navToggle && !navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      toggleNavMenu(null, true);
    }
  }
});

// Close when clicking any link inside the menu
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggleNavMenu(null, true);
      });
    });
  }
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const navLinks = document.getElementById("navLinks");
    if (navLinks && navLinks.classList.contains("open")) {
      toggleNavMenu(null, true);
      const navToggle = document.getElementById("navToggle");
      if (navToggle) navToggle.focus();
    }
  }
});

// FAQ Accordion Toggle
function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  if (!item) return;
  const isOpen = item.classList.contains("open");
  
  // Close other open FAQ items (optional accordion feel)
  document.querySelectorAll(".faq-item.open").forEach((el) => {
    if (el !== item) el.classList.remove("open");
  });

  if (isOpen) {
    item.classList.remove("open");
  } else {
    item.classList.add("open");
  }
}
