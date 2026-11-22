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

// ── Interactive Bento Demos ─────────────────────────────────

// 1. Sakura Tree Lifecycle Interactive Demo
const SAKURA_STAGES = {
  sprout: {
    percent: 15,
    page: 43,
    total: 288,
    statusText: "Sprouting Phase",
    trunkPath: "M80 135 L80 100 Q80 88 72 78",
    elementsHtml: `
      <ellipse cx="72" cy="78" rx="4" ry="7" fill="url(#leafGrad)" transform="rotate(-20 72 78)"/>
      <ellipse cx="80" cy="72" rx="4.5" ry="8" fill="url(#leafGrad)" transform="rotate(15 80 72)"/>
    `
  },
  branching: {
    percent: 40,
    page: 115,
    total: 288,
    statusText: "Branching & Foliage",
    trunkPath: "M80 135 L80 90 Q80 76 64 64 M80 90 Q80 78 96 68",
    elementsHtml: `
      <ellipse cx="64" cy="64" rx="6" ry="3.5" fill="url(#leafGrad)" transform="rotate(-35 64 64)"/>
      <ellipse cx="96" cy="68" rx="6" ry="3.5" fill="url(#leafGrad)" transform="rotate(35 96 68)"/>
      <ellipse cx="78" cy="55" rx="5" ry="3" fill="url(#leafGrad)" transform="rotate(10 78 55)"/>
      <circle cx="64" cy="60" r="4.5" fill="#E07965" opacity="0.85"/>
      <circle cx="96" cy="64" r="4.5" fill="#E07965" opacity="0.85"/>
    `
  },
  budding: {
    percent: 68,
    page: 196,
    total: 288,
    statusText: "Tender Buds Blooming",
    trunkPath: "M80 135 L80 90 Q80 75 62 62 Q52 54 44 48 M80 90 Q80 72 98 58 Q110 48 118 42 M80 75 Q78 55 80 38",
    elementsHtml: `
      <circle cx="44" cy="48" r="8" fill="url(#sakuraGrad)" opacity="0.95"/>
      <circle cx="118" cy="42" r="9" fill="url(#sakuraGrad)" opacity="0.95"/>
      <circle cx="80" cy="38" r="9.5" fill="url(#sakuraGrad)" opacity="0.98"/>
      <circle cx="62" cy="60" r="6" fill="#FFB7C5" opacity="0.9"/>
      <circle cx="98" cy="58" r="7" fill="url(#sakuraGrad)" opacity="0.9"/>
      <ellipse cx="36" cy="56" rx="4.5" ry="2.5" fill="url(#leafGrad)" transform="rotate(-30 36 56)"/>
      <ellipse cx="126" cy="50" rx="4.5" ry="2.5" fill="url(#leafGrad)" transform="rotate(35 126 50)"/>
    `
  },
  blossom: {
    percent: 100,
    page: 288,
    total: 288,
    statusText: "Full Cherry Blossom Bloom",
    trunkPath: "M80 135 L80 90 Q80 75 62 62 Q52 54 44 48 M80 90 Q80 72 98 58 Q110 48 118 42 M80 75 Q78 55 80 38 M62 62 Q56 46 62 34",
    elementsHtml: `
      <circle cx="44" cy="48" r="11" fill="url(#sakuraGrad)"/>
      <circle cx="118" cy="42" r="12" fill="url(#sakuraGrad)"/>
      <circle cx="80" cy="36" r="13" fill="url(#sakuraGrad)"/>
      <circle cx="62" cy="34" r="10" fill="url(#sakuraGrad)"/>
      <circle cx="98" cy="58" r="10.5" fill="url(#sakuraGrad)"/>
      <circle cx="54" cy="74" r="9" fill="url(#sakuraGrad)"/>
      <circle cx="106" cy="72" r="9" fill="url(#sakuraGrad)"/>
      <!-- Falling Petals -->
      <circle cx="90" cy="98" r="3.2" fill="#FFB7C5" opacity="0.9"/>
      <circle cx="70" cy="110" r="2.8" fill="#E07965" opacity="0.85"/>
      <circle cx="112" cy="116" r="2.6" fill="#FFB7C5" opacity="0.9"/>
    `
  }
};

function setSakuraStage(stageName, btn) {
  const stage = SAKURA_STAGES[stageName];
  if (!stage) return;

  // Active pill state
  document.querySelectorAll(".sakura-stage-pill").forEach(el => el.classList.remove("active"));
  if (btn) btn.classList.add("active");

  // Update Progress stats
  const percentEl = document.getElementById("sakuraPercent");
  const pagesEl = document.getElementById("sakuraPages");
  const barEl = document.getElementById("sakuraBar");
  const statusEl = document.getElementById("sakuraStatusText");

  if (percentEl) percentEl.textContent = stage.percent + "%";
  if (pagesEl) pagesEl.textContent = `Page ${stage.page} of ${stage.total}`;
  if (barEl) barEl.style.width = stage.percent + "%";
  if (statusEl) statusEl.textContent = stage.statusText;

  // Update SVG
  const trunkPath = document.getElementById("demoTrunkPath");
  const dynamicGroup = document.getElementById("demoDynamicElements");
  if (trunkPath) trunkPath.setAttribute("d", stage.trunkPath);
  if (dynamicGroup) dynamicGroup.innerHTML = stage.elementsHtml;
}

// 2. Notes Category Filter Demo
function filterNotes(category, btn) {
  document.querySelectorAll(".note-filter-pill").forEach(el => el.classList.remove("active"));
  if (btn) btn.classList.add("active");

  const cards = document.querySelectorAll(".demo-note-item");
  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "block";
      card.style.opacity = "1";
    } else {
      card.style.display = "none";
      card.style.opacity = "0";
    }
  });
}

// 3. Sub-Millisecond Search Demo
function handleLiveSearch(input) {
  const query = (input.value || "").toLowerCase().trim();
  const items = document.querySelectorAll(".demo-search-item");
  let matchCount = 0;

  items.forEach(item => {
    const text = item.getAttribute("data-searchable").toLowerCase();
    const titleEl = item.querySelector(".search-item-title");
    const quoteEl = item.querySelector(".search-item-quote");
    const originalText = item.getAttribute("data-original-quote");

    if (!query || text.includes(query)) {
      item.style.display = "block";
      matchCount++;

      if (query && quoteEl && originalText) {
        const regex = new RegExp(`(${query})`, "gi");
        quoteEl.innerHTML = originalText.replace(regex, "<mark>$1</mark>");
      } else if (quoteEl && originalText) {
        quoteEl.textContent = originalText;
      }
    } else {
      item.style.display = "none";
    }
  });

  const countBadge = document.getElementById("searchCountBadge");
  if (countBadge) {
    countBadge.textContent = query ? `${matchCount} found in 0.3ms` : "Instant FTS5 Index";
  }
}

// 4. Sync Switch Demo
function toggleSyncDemo(checkbox) {
  const isOnline = checkbox.checked;
  const statusDisplay = document.getElementById("syncStatusDisplay");
  const statusText = document.getElementById("syncStatusText");
  const statusIcon = document.getElementById("syncStatusIcon");

  if (!statusDisplay || !statusText || !statusIcon) return;

  if (isOnline) {
    statusDisplay.className = "sync-status-display online";
    statusIcon.textContent = "☁️";
    statusText.innerHTML = "<strong>Cloud Connected:</strong> Your local SQLite records are automatically encrypted and synchronized with Supabase in the background.";
  } else {
    statusDisplay.className = "sync-status-display offline";
    statusIcon.textContent = "✈️";
    statusText.innerHTML = "<strong>Airplane / Offline Mode:</strong> 100% functional. All pages, notes, and progress write directly to on-device SQLite with zero network latency.";
  }
}

// ── Hero Scene Cursor Proximity & Interactive Screenshot Swap ──
document.addEventListener("DOMContentLoaded", () => {
  const openBookScene = document.getElementById("openBookScene");
  const openBookPhone = document.getElementById("openBookPhone");
  if (!openBookScene) return;

  let isNear = false;
  let rafId = null;

  // Track cursor distance relative to open book scene center
  const onMouseMove = (e) => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      const rect = openBookScene.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.hypot(distX, distY);

      // Proximity threshold: 340px or half bounding box width + margin
      const threshold = Math.max(rect.width * 0.58, 320);

      if (distance < threshold && !isNear) {
        isNear = true;
        openBookScene.classList.add("is-near");
      } else if (distance >= threshold && isNear) {
        isNear = false;
        openBookScene.classList.remove("is-near");
      }
    });
  };

  window.addEventListener("mousemove", onMouseMove, { passive: true });

  // Direct hover events
  openBookScene.addEventListener("mouseenter", () => {
    isNear = true;
    openBookScene.classList.add("is-near");
  });

  // Tap or click on phone or clouds to toggle state (especially on touch devices)
  if (openBookPhone) {
    openBookPhone.addEventListener("click", () => {
      isNear = !openBookScene.classList.contains("is-near");
      openBookScene.classList.toggle("is-near", isNear);
    });
  }

  // Click on any floating cloud to toggle
  document.querySelectorAll(".floating-cloud").forEach((cloud) => {
    cloud.addEventListener("click", () => {
      isNear = !openBookScene.classList.contains("is-near");
      openBookScene.classList.toggle("is-near", isNear);
    });
  });
});
