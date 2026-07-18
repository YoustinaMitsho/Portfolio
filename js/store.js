/* ============================================================
   STORE.JS — powers index.html
   Renders: hero carousel, filter chips, search, game grid
   ============================================================ */

const FILTER_DEFS = [
  { key: "all", label: "All" },
  { key: "Published", label: "Published" },
  { key: "Game Jam", label: "Game Jam" },
  { key: "Professional", label: "Professional" },
  { key: "Unity", label: "Unity" },
  { key: "VR", label: "VR" },
  { key: "Mobile", label: "Mobile" }
];

let activeFilter = "all";
let activeQuery = "";
let heroIndex = 0;
let heroTimer = null;

function cardArtSVG() {
  // small controller glyph used as a watermark on cover art
  return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 9h2M8 8v2M14.5 9.5h.01M16.5 11.5h.01" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M6.5 7h11a3 3 0 0 1 2.94 3.6l-.8 4A3 3 0 0 1 16.75 17c-.7 0-1.38-.24-1.92-.68L13.6 15.2a2 2 0 0 0-1.26-.45h-.68a2 2 0 0 0-1.26.45l-1.23 1.12A3.14 3.14 0 0 1 7.25 17a3 3 0 0 1-2.9-2.4l-.8-4A3 3 0 0 1 6.5 7Z" stroke="currentColor" stroke-width="1.6"/>
  </svg>`;
}

function matchesFilter(game) {
  if (activeFilter === "all") return true;
  return game.status === activeFilter || game.tags.includes(activeFilter);
}

function matchesQuery(game) {
  if (!activeQuery) return true;
  const q = activeQuery.toLowerCase();
  return (
    game.title.toLowerCase().includes(q) ||
    game.tagline.toLowerCase().includes(q) ||
    game.tags.some((t) => t.toLowerCase().includes(q))
  );
}

function renderGrid() {
  const grid = document.getElementById("gameGrid");
  const countEl = document.getElementById("resultCount");
  const results = GAMES.filter((g) => matchesFilter(g) && matchesQuery(g));

  countEl.textContent = `${results.length} game${results.length === 1 ? "" : "s"}`;

  if (results.length === 0) {
    grid.innerHTML = `<div class="empty-state">No games match that search. Try a different filter.</div>`;
    return;
  }

  grid.innerHTML = results
    .map(
      (g) => `
    <a class="card-link" href="game.html?slug=${g.slug}">
      <article class="game-card accent-${g.accent}">
        <div class="card-art">
          <span class="art-letter">${g.cover.letter}</span>
          <span class="status-tag">${g.status}</span>
        </div>
        <div class="card-body">
          <h3>${g.title}</h3>
          <p class="tagline">${g.tagline}</p>
          <div class="card-tags">
            ${g.tags.slice(0, 3).map((t) => `<span>${t}</span>`).join("")}
          </div>
        </div>
      </article>
    </a>`
    )
    .join("");
}

function renderFilterChips() {
  const wrap = document.getElementById("filterChips");
  wrap.innerHTML = FILTER_DEFS.map(
    (f) => `<button class="chip ${f.key === activeFilter ? "active" : ""}" data-key="${f.key}">${f.label}</button>`
  ).join("");

  wrap.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.key;
      renderFilterChips();
      renderGrid();
    });
  });
}

function renderHero() {
  const featured = GAMES.filter((g) => g.featured);
  const track = document.getElementById("heroTrack");
  const dots = document.getElementById("heroDots");

  track.innerHTML = featured
    .map(
      (g, i) => `
    <div class="hero-slide accent-${g.accent} ${i === 0 ? "active" : ""}" data-index="${i}"
         style="--slide-gradient: linear-gradient(135deg, var(--card-accent), var(--navy) 75%); --slide-accent: var(--card-accent);">
      <span class="hero-letter">${g.cover.letter}</span>
      <div class="hero-content">
        <span class="hero-badge">${g.status}</span>
        <h2>${g.title}</h2>
        <p>${g.tagline}</p>
        <a class="btn btn-primary" href="game.html?slug=${g.slug}">View game</a>
      </div>
    </div>`
    )
    .join("");

  dots.innerHTML = featured
    .map((_, i) => `<button data-index="${i}" class="${i === 0 ? "active" : ""}" aria-label="Show slide ${i + 1}"></button>`)
    .join("");

  dots.querySelectorAll("button").forEach((b) => {
    b.addEventListener("click", () => goToSlide(parseInt(b.dataset.index, 10)));
  });

  document.getElementById("heroPrev").addEventListener("click", () => goToSlide(heroIndex - 1));
  document.getElementById("heroNext").addEventListener("click", () => goToSlide(heroIndex + 1));

  startHeroAutoplay(featured.length);
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dots button");
  const count = slides.length;
  heroIndex = ((index % count) + count) % count;

  slides.forEach((s) => s.classList.toggle("active", parseInt(s.dataset.index, 10) === heroIndex));
  dots.forEach((d, i) => d.classList.toggle("active", i === heroIndex));

  restartHeroAutoplay();
}

function startHeroAutoplay(count) {
  if (count <= 1) return;
  heroTimer = setInterval(() => goToSlideAuto(), 6000);
}
function goToSlideAuto() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dots button");
  const count = slides.length;
  heroIndex = (heroIndex + 1) % count;
  slides.forEach((s) => s.classList.toggle("active", parseInt(s.dataset.index, 10) === heroIndex));
  dots.forEach((d, i) => d.classList.toggle("active", i === heroIndex));
}
function restartHeroAutoplay() {
  clearInterval(heroTimer);
  const count = document.querySelectorAll(".hero-slide").length;
  startHeroAutoplay(count);
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.dataset.page = "store";

  // Prefill search from ?q= in the URL (used when redirected from another page)
  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get("q") || "";
  activeQuery = initialQuery;

  const searchInput = document.querySelector(".header-search input");
  if (searchInput) searchInput.value = initialQuery;

  renderHero();
  renderFilterChips();
  renderGrid();

  // Live search as you type
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeQuery = e.target.value.trim();
      renderGrid();
    });
  }

  // Also respond if the search is submitted (Enter key)
  document.addEventListener("header-search", (e) => {
    activeQuery = e.detail;
    renderGrid();
  });
});
