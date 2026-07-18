/* ============================================================
   MAIN.JS — shared behavior for every page
   (mobile nav toggle, language dropdown, header search redirect)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // Language dropdown — visual placeholder only for now.
  // To make this real, swap the text of elements that carry
  // a "data-i18n" attribute when the language changes.
  const langSelect = document.querySelector(".lang-select");
  if (langSelect) {
    const btn = langSelect.querySelector("button");
    btn.addEventListener("click", () => {
      langSelect.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!langSelect.contains(e.target)) langSelect.classList.remove("open");
    });
  }

  // Header search: on any page, submitting jumps to the store
  // page pre-filtered by whatever was typed.
  const headerSearchForm = document.querySelector(".header-search-form");
  if (headerSearchForm) {
    headerSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = headerSearchForm.querySelector("input").value.trim();
      const onStorePage = document.body.dataset.page === "store";
      if (onStorePage) {
        // store.js listens for this event directly
        document.dispatchEvent(new CustomEvent("header-search", { detail: q }));
      } else {
        window.location.href = "index.html" + (q ? "?q=" + encodeURIComponent(q) : "");
      }
    });
  }

  // Footer year
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
