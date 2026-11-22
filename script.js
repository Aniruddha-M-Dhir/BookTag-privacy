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

// 1. Authentic BookTag Japanese Sakura Growth Engine (Matching BlossomGrowthTree.tsx)
function makeSakuraFlower(cx, cy, scale = 1, angle = 0, opacity = 1) {
  const petals = [0, 72, 144, 216, 288].map(deg =>
    `<path transform="rotate(${deg})" d="M 0 0 C -1.9 -2.8, -2.9 -5.4, -1.0 -6.8 C -0.4 -6.5, -0.2 -5.8, 0 -5.6 C 0.2 -5.8, 0.4 -6.5, 1.0 -6.8 C 2.9 -5.4, 1.9 -2.8, 0 0 Z" fill="url(#sakuraPetalGrad)" stroke="#F0C8CF" stroke-width="0.35"/>`
  ).join("");
  return `
    <g transform="translate(${cx}, ${cy}) rotate(${angle}) scale(${scale})" opacity="${opacity}">
      ${petals}
      <circle cx="0" cy="0" r="1.6" fill="#F0C8CF"/>
      <circle cx="0" cy="0" r="0.9" fill="#D99EAA"/>
      <circle cx="0" cy="0" r="0.4" fill="#F1E7D9"/>
    </g>
  `;
}

function makeSakuraBud(cx, cy, scale = 1, angle = 0) {
  return `
    <g transform="translate(${cx}, ${cy}) rotate(${angle}) scale(${scale})">
      <path d="M 0 0 C -1.2 -1.5, -1.8 -3.0, -1.2 -4.2 C -0.8 -3.2, -0.2 -2.0, 0 0 Z" fill="#A7B69C"/>
      <path d="M 0 0 C 1.2 -1.5, 1.8 -3.0, 1.2 -4.2 C 0.8 -3.2, 0.2 -2.0, 0 0 Z" fill="#A7B69C"/>
      <path d="M 0 -1.5 C -1.1 -2.8, -1.1 -5.0, 0 -6.2 C 1.1 -5.0, 1.1 -2.8, 0 -1.5 Z" fill="url(#sakuraBudGrad)" stroke="#F0C8CF" stroke-width="0.3"/>
    </g>
  `;
}

function makeSakuraLeaf(cx, cy, scale = 1, angle = 0) {
  return `
    <g transform="translate(${cx}, ${cy}) rotate(${angle}) scale(${scale})">
      <path d="M 0 0 C -1.6 -2.4, -1.8 -5.5, 0 -7.5 C 1.8 -5.5, 1.6 -2.4, 0 0 Z" fill="#A7B69C" stroke="#8E9E83" stroke-width="0.35"/>
      <path d="M 0 -0.8 L 0 -6.5" stroke="#7E8E73" stroke-width="0.4"/>
    </g>
  `;
}

function makeDriftingPetal(cx, cy, scale = 1, angle = 0, opacity = 0.9) {
  return `
    <g transform="translate(${cx}, ${cy}) rotate(${angle}) scale(${scale})" opacity="${opacity}">
      <path d="M 0 0 C -1.8 -2.6, -2.7 -5.2, -0.9 -6.5 C -0.4 -6.2, -0.2 -5.5, 0 -5.3 C 0.2 -5.5, 0.4 -6.2, 0.9 -6.5 C 2.7 -5.2, 1.8 -2.6, 0 0 Z" fill="url(#sakuraPetalGrad)" stroke="#F0C8CF" stroke-width="0.3"/>
    </g>
  `;
}

const SAKURA_PEBBLES = `
  <g class="sakura-pebbles">
    <path d="M 66 128 C 66 123, 73 121, 79 123 C 85 124, 86 129, 80 130 C 74 131, 66 130, 66 128 Z" fill="#243D32"/>
    <path d="M 77 129 C 77 125, 84 123, 90 125 C 96 126, 96 130, 91 131 C 85 132, 77 131, 77 129 Z" fill="#1E352B"/>
    <path d="M 71 127 C 73 123, 79 122, 83 124 C 87 125, 87 128, 83 129 C 78 130, 72 129, 71 127 Z" fill="#2C463A"/>
    <path d="M 73 124 C 76 123, 80 123, 82 125" stroke="#3D5A4C" stroke-width="0.7" stroke-linecap="round"/>
  </g>
`;

const SAKURA_STAGES = {
  sprout: {
    percent: 15,
    page: 43,
    total: 288,
    statusText: "Tender Seedling Shoot",
    svgContent: `
      ${SAKURA_PEBBLES}
      <path d="M 80 126 C 79.5 116, 80 104, 79 92" stroke="#84705A" stroke-width="2.4" stroke-linecap="round"/>
      ${makeSakuraLeaf(79.5, 108, 0.95, -50)}
      ${makeSakuraLeaf(80, 100, 0.95, 45)}
      ${makeSakuraLeaf(79, 92, 0.95, 15)}
    `
  },
  branching: {
    percent: 40,
    page: 115,
    total: 288,
    statusText: "Branching & First Blossom",
    svgContent: `
      ${SAKURA_PEBBLES}
      <path d="M 80 126 C 79.5 112, 80 96, 78 80" stroke="#84705A" stroke-width="3.6" stroke-linecap="round"/>
      <path d="M 78 80 C 76 72, 75 64, 74 58" stroke="#84705A" stroke-width="2" stroke-linecap="round"/>
      <path d="M 79.8 106 C 75 101, 71 97, 68 93 C 65 90, 61 86, 58 82" stroke="#84705A" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M 79.5 98 C 85 94, 91 90, 96 86 C 101 82, 107 77, 112 72" stroke="#84705A" stroke-width="2" stroke-linecap="round"/>
      ${makeSakuraFlower(96, 76, 0.95, 15)}
      ${makeSakuraBud(112, 72, 0.95, 40)}
      ${makeSakuraBud(74, 58, 0.95, 5)}
      ${makeSakuraBud(58, 82, 0.95, -35)}
      ${makeSakuraBud(88, 82, 0.9, 25)}
      ${makeSakuraLeaf(58, 83, 0.85, -60)}
      ${makeSakuraLeaf(64, 88, 0.85, -45)}
      ${makeSakuraLeaf(72, 98, 0.85, -50)}
      ${makeSakuraLeaf(86, 95, 0.85, 30)}
      ${makeSakuraLeaf(104, 80, 0.85, 40)}
      ${makeSakuraLeaf(75, 66, 0.85, -25)}
      ${makeSakuraLeaf(78, 84, 0.85, 20)}
      ${makeSakuraLeaf(88, 76, 0.8, -15)}
    `
  },
  budding: {
    percent: 70,
    page: 201,
    total: 288,
    statusText: "Flourishing Blossom Canopy",
    svgContent: `
      ${SAKURA_PEBBLES}
      <path d="M 76 126 C 77 114, 76.5 104, 77.5 96 C 79 96, 79 126, 79 126 Z" fill="#4D382F"/>
      <path d="M 76 126 C 77 114, 77 102, 78 92 C 81 92, 82.5 106, 84 126 Z" fill="url(#trunkGrad)"/>
      <path d="M 79 125 C 79.5 113, 79.5 101, 80 92" stroke="#84705A" stroke-width="0.8" opacity="0.8"/>
      <path d="M 77 104 C 68 100, 58 98, 50 94" stroke="#84705A" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M 78 92 C 71 87, 63 82, 56 75 C 50 69, 44 65, 36 60" stroke="#84705A" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M 78 80 C 76 70, 75 60, 74 48 C 73 42, 76 36, 80 32" stroke="#84705A" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M 80 88 C 88 83, 96 78, 104 72 C 111 67, 118 63, 126 58" stroke="#84705A" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M 83 100 C 92 97, 102 96, 112 93" stroke="#84705A" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M 56 75 C 51 77, 45 80, 40 84" stroke="#84705A" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 64 68 C 63 60, 62 54, 60 48" stroke="#84705A" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 75 60 C 82 56, 88 52, 94 48" stroke="#84705A" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 104 72 C 108 77, 114 81, 120 84" stroke="#84705A" stroke-width="1.8" stroke-linecap="round"/>
      ${makeSakuraLeaf(42, 95, 0.8, -40)}
      ${makeSakuraLeaf(52, 90, 0.8, -25)}
      ${makeSakuraLeaf(36, 66, 0.8, -55)}
      ${makeSakuraLeaf(48, 72, 0.8, -35)}
      ${makeSakuraLeaf(66, 78, 0.8, -45)}
      ${makeSakuraLeaf(62, 52, 0.8, -20)}
      ${makeSakuraLeaf(74, 42, 0.8, 15)}
      ${makeSakuraLeaf(88, 46, 0.8, 35)}
      ${makeSakuraLeaf(98, 68, 0.8, 25)}
      ${makeSakuraLeaf(116, 66, 0.8, 45)}
      ${makeSakuraLeaf(104, 92, 0.8, 35)}
      ${makeSakuraLeaf(116, 94, 0.8, 45)}
      ${makeSakuraBud(36, 60, 0.9, -45)}
      ${makeSakuraBud(50, 94, 0.88, -30)}
      ${makeSakuraBud(80, 32, 0.9, 10)}
      ${makeSakuraBud(126, 58, 0.9, 40)}
      ${makeSakuraBud(112, 93, 0.88, 30)}
      ${makeSakuraFlower(96, 76, 1, 15)}
      ${makeSakuraFlower(58, 76, 0.94, -20)}
      ${makeSakuraFlower(74, 54, 0.96, 8)}
      ${makeSakuraFlower(48, 92, 0.9, -30)}
      ${makeSakuraFlower(110, 91, 0.9, 25)}
      ${makeSakuraFlower(86, 66, 0.88, -10)}
      ${makeSakuraFlower(42, 66, 0.95, -35)}
      ${makeSakuraFlower(66, 60, 0.92, -10)}
      ${makeSakuraFlower(80, 40, 1, 5)}
      ${makeSakuraFlower(96, 56, 0.92, 20)}
      ${makeSakuraFlower(118, 68, 0.95, 35)}
      ${makeSakuraFlower(64, 90, 0.85, -15)}
    `
  },
  blossom: {
    percent: 100,
    page: 288,
    total: 288,
    statusText: "Full Cherry Blossom Bloom",
    svgContent: `
      ${SAKURA_PEBBLES}
      <path d="M 76 126 C 77 114, 76.5 104, 77.5 96 C 79 96, 79 126, 79 126 Z" fill="#4D382F"/>
      <path d="M 74 126 C 76 114, 76 102, 77.5 92 C 77 86, 76 80, 78 74 C 81 74, 82 76, 82.5 84 C 84 94, 84.5 106, 86 126 Z" fill="url(#trunkGrad)"/>
      <path d="M 79 125 C 79.5 113, 79.5 101, 80 92" stroke="#84705A" stroke-width="0.8" opacity="0.8"/>
      <path d="M 77 104 C 68 100, 58 98, 50 94" stroke="#84705A" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M 78 92 C 71 87, 63 82, 56 75 C 50 69, 44 65, 36 60" stroke="#84705A" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M 78 80 C 76 70, 75 60, 74 48 C 73 42, 76 36, 80 32" stroke="#84705A" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M 80 88 C 88 83, 96 78, 104 72 C 111 67, 118 63, 126 58" stroke="#84705A" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M 83 100 C 92 97, 102 96, 112 93" stroke="#84705A" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M 56 75 C 51 77, 45 80, 40 84" stroke="#84705A" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 64 68 C 63 60, 62 54, 60 48" stroke="#84705A" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 75 60 C 82 56, 88 52, 94 48" stroke="#84705A" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 104 72 C 108 77, 114 81, 120 84" stroke="#84705A" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 36 60 C 31 59, 26 61, 22 64" stroke="#84705A" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M 126 58 C 131 57, 137 59, 142 63" stroke="#84705A" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M 50 94 C 44 96, 38 99, 32 101" stroke="#84705A" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M 112 93 C 118 95, 124 98, 130 101" stroke="#84705A" stroke-width="1.4" stroke-linecap="round"/>
      ${makeSakuraLeaf(42, 95, 0.8, -40)}
      ${makeSakuraLeaf(52, 90, 0.8, -25)}
      ${makeSakuraLeaf(36, 66, 0.8, -55)}
      ${makeSakuraLeaf(48, 72, 0.8, -35)}
      ${makeSakuraLeaf(66, 78, 0.8, -45)}
      ${makeSakuraLeaf(62, 52, 0.8, -20)}
      ${makeSakuraLeaf(74, 42, 0.8, 15)}
      ${makeSakuraLeaf(88, 46, 0.8, 35)}
      ${makeSakuraLeaf(98, 68, 0.8, 25)}
      ${makeSakuraLeaf(116, 66, 0.8, 45)}
      ${makeSakuraLeaf(104, 92, 0.8, 35)}
      ${makeSakuraLeaf(116, 94, 0.8, 45)}
      ${makeSakuraFlower(96, 76, 1, 15)}
      ${makeSakuraFlower(58, 76, 0.94, -20)}
      ${makeSakuraFlower(74, 54, 0.96, 8)}
      ${makeSakuraFlower(48, 92, 0.9, -30)}
      ${makeSakuraFlower(110, 91, 0.9, 25)}
      ${makeSakuraFlower(86, 66, 0.88, -10)}
      ${makeSakuraFlower(42, 66, 0.95, -35)}
      ${makeSakuraFlower(66, 60, 0.92, -10)}
      ${makeSakuraFlower(80, 40, 1, 5)}
      ${makeSakuraFlower(96, 56, 0.92, 20)}
      ${makeSakuraFlower(118, 68, 0.95, 35)}
      ${makeSakuraFlower(64, 90, 0.85, -15)}
      ${makeSakuraFlower(30, 62, 0.92, -45)}
      ${makeSakuraFlower(38, 78, 0.88, -25)}
      ${makeSakuraFlower(54, 52, 0.9, -15)}
      ${makeSakuraFlower(68, 42, 0.95, -5)}
      ${makeSakuraFlower(88, 40, 0.95, 15)}
      ${makeSakuraFlower(106, 48, 0.9, 25)}
      ${makeSakuraFlower(124, 58, 0.92, 30)}
      ${makeSakuraFlower(128, 76, 0.88, 40)}
      ${makeSakuraFlower(100, 88, 0.85, 15)}
      ${makeSakuraFlower(78, 64, 0.88, 0)}
      ${makeSakuraFlower(18, 64, 0.82, -60)}
      ${makeSakuraFlower(80, 26, 1.05, 0)}
      ${makeSakuraFlower(138, 62, 0.82, 50)}
      ${makeDriftingPetal(42, 102, 0.85, -35)}
      ${makeDriftingPetal(118, 106, 0.85, 40)}
      ${makeDriftingPetal(64, 114, 0.8, 15)}
      ${makeDriftingPetal(32, 110, 0.85, -50)}
      ${makeDriftingPetal(126, 112, 0.85, 45)}
      ${makeDriftingPetal(96, 118, 0.78, -10)}
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

  // Update SVG content
  const treeContent = document.getElementById("sakuraTreeContent");
  if (treeContent) {
    treeContent.innerHTML = stage.svgContent;
  }
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
    statusText.innerHTML = "<strong>Cloud Connected:</strong> Your local SQLite records are automatically encrypted and synchronized with your secure private cloud vault in the background.";
  } else {
    statusDisplay.className = "sync-status-display offline";
    statusIcon.textContent = "✈️";
    statusText.innerHTML = "<strong>Airplane / Offline Mode:</strong> 100% functional. All pages, notes, and progress write directly to on-device SQLite with zero network latency.";
  }
}

// ── Hand Mockup Hero Stage: Hover ONLY Over the Phone Screen in Hand ──
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize default Sakura Tree stage (Budding 70%)
  const activeSakuraPill = document.querySelector(".sakura-stage-pill.active");
  if (activeSakuraPill) {
    setSakuraStage("budding", activeSakuraPill);
  } else {
    setSakuraStage("budding");
  }

  // 2. Phone Screen Interactive Hotspot: triggers ONLY when cursor hovers directly over the phone screen inside the hand
  const heroStage = document.getElementById("heroHandStage");
  const screenHotspot = document.getElementById("phoneScreenHotspot");
  if (!heroStage || !screenHotspot) return;

  const setActive = (active) => {
    heroStage.classList.toggle("is-screen-active", active);
    heroStage.classList.toggle("is-near", active);
  };

  // Hover ONLY over the screen glass
  screenHotspot.addEventListener("mouseenter", () => setActive(true));
  screenHotspot.addEventListener("mouseleave", () => setActive(false));

  // Touch device toggle support
  screenHotspot.addEventListener("click", (e) => {
    e.stopPropagation();
    const isNowActive = !heroStage.classList.contains("is-screen-active");
    setActive(isNowActive);
  });

  // Keyboard accessibility
  screenHotspot.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const isNowActive = !heroStage.classList.contains("is-screen-active");
      setActive(isNowActive);
    }
  });
});
