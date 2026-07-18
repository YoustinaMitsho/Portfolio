/* ============================================================
   GAME-DETAIL.JS — powers game.html
   Reads ?slug=... from the URL and fills in the page from
   the matching object in js/games-data.js
   ============================================================ */

const CHECK_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function getSlug() {
  return new URLSearchParams(window.location.search).get("slug");
}

function renderNotFound() {
  document.getElementById("gameApp").innerHTML = `
    <div class="page-header">
      <span class="eyebrow">404</span>
      <h1>Can't find that game</h1>
      <p class="lead">It might have been renamed or removed. Head back to the store to see everything.</p>
      <a class="btn btn-primary" href="index.html" style="margin-top:14px;">Back to store</a>
    </div>`;
}

function renderGame(game) {
  document.title = `${game.title} — Youstina Mitsho`;

  // Build a small set of placeholder "screenshots" — replace with
  // real images later by editing the gallery array below or wiring
  // it up to game.gallery in games-data.js.
  const shots = [
    { label: "Screenshot 1" },
    { label: "Screenshot 2" },
    { label: "Trailer still" },
    { label: "Concept art" }
  ];

  const playBtn = game.playUrl
    ? `<a class="btn btn-primary play-cta" href="${game.playUrl}" target="_blank" rel="noopener">▶ Play in browser</a>`
    : `<button class="btn btn-disabled play-cta" disabled title="Web build coming soon">▶ Coming soon</button>`;

  const githubBtn =
    game.github && game.github !== "#"
      ? `<a class="btn btn-ghost btn-sm" href="${game.github}" target="_blank" rel="noopener">View source ↗</a>`
      : `<a class="btn btn-ghost btn-sm" href="#" style="pointer-events:none; opacity:.5;">Add GitHub link</a>`;

  document.getElementById("gameApp").innerHTML = `
    <a class="back-link" href="index.html">← Back to store</a>

    <div class="game-hero accent-${game.accent}">
      <div class="media-viewer">
        <div class="media-fill" id="mediaFill"><span class="art-letter">${game.cover.letter}</span></div>
        <span class="media-caption" id="mediaCaption">${shots[0].label}</span>
      </div>
      <div class="thumb-rail">
        <button class="rail-btn" id="railUp" aria-label="Scroll thumbnails up">▲</button>
        <div class="thumb-list" id="thumbList">
          ${shots
            .map(
              (s, i) => `<button class="${i === 0 ? "active" : ""}" data-index="${i}" data-label="${s.label}" aria-label="${s.label}">
                <span class="thumb-fill"></span>
              </button>`
            )
            .join("")}
        </div>
        <button class="rail-btn" id="railDown" aria-label="Scroll thumbnails down">▼</button>
        ${playBtn}
      </div>
    </div>

    <div class="game-meta-row accent-${game.accent}">
      <span class="status-pill">${game.status}</span>
      <h1 style="margin:0;">${game.title}</h1>
    </div>
    <div class="game-meta-row" style="margin-top:-8px;">
      <p class="lead" style="margin:0; color: var(--paper-dim);">${game.tagline}</p>
    </div>

    <div class="game-content">
      <div>
        <div class="info-chip-grid">
          <div class="info-chip"><span class="label">Engine / Tools</span><span class="value">${game.engine}</span></div>
          <div class="info-chip"><span class="label">Platform</span><span class="value">${game.platform}</span></div>
          <div class="info-chip"><span class="label">Role</span><span class="value">${game.role}</span></div>
          <div class="info-chip"><span class="label">Team</span><span class="value">${game.team}</span></div>
          <div class="info-chip"><span class="label">Timeline</span><span class="value">${game.duration}</span></div>
          <div class="info-chip"><span class="label">Source</span><span class="value">${githubBtn}</span></div>
        </div>
        <div class="desc-block">
          <h4>Game info</h4>
          <p>${game.description}</p>
        </div>
      </div>

      <div>
        <h4 style="font-family: var(--font-mono); font-size: .78rem; text-transform: uppercase; letter-spacing: .08em; color: var(--paper-faint); margin-bottom: 14px;">My contributions</h4>
        <ul class="contrib-list accent-${game.accent}">
          ${game.contributions
            .map(
              (c) => `<li><span class="badge-check">${CHECK_SVG}</span><p>${c}</p></li>`
            )
            .join("")}
        </ul>
      </div>
    </div>
  `;

  // Thumbnail click swaps the big preview
  const mediaFill = document.getElementById("mediaFill");
  const mediaCaption = document.getElementById("mediaCaption");
  document.querySelectorAll(".thumb-list button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".thumb-list button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      mediaCaption.textContent = btn.dataset.label;
    });
  });

  // Up/down rail buttons scroll the thumbnail strip
  const thumbList = document.getElementById("thumbList");
  document.getElementById("railUp").addEventListener("click", () => thumbList.scrollBy({ top: -80, behavior: "smooth" }));
  document.getElementById("railDown").addEventListener("click", () => thumbList.scrollBy({ top: 80, behavior: "smooth" }));
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.dataset.page = "game-detail";
  const slug = getSlug();
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) {
    renderNotFound();
    return;
  }
  renderGame(game);
});
