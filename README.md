# Youstina Mitsho — Game Dev Portfolio

A portfolio built as a small game store: a "Store" grid of games (published
projects + game jam entries), a per-game detail page styled like a
Steam/itch.io page, a CV page, and an About page.

## Structure

```
index.html          Store page (hero carousel, filters, search, game grid)
game.html            Single reusable template for every game's detail page
cv.html              Formal résumé / timeline
about.html           Personal bio + activities
css/style.css        All styling (colors, type, layout — one file)
js/games-data.js     ⭐ EVERY game lives here as one object — edit this to add/change games
js/store.js          Renders the store page from games-data.js
js/game-detail.js    Renders game.html from games-data.js based on ?slug=
js/main.js           Shared header behavior (mobile menu, search redirect)
assets/              Put real screenshots/art here as you get them
```

## Adding or editing a game

Open `js/games-data.js` and copy one of the existing objects in the `GAMES`
array. Change the `slug` (must be unique — it becomes the URL, e.g.
`game.html?slug=my-game`), then fill in the rest of the fields. Nothing else
needs to change — the store grid, hero carousel, and detail page all read
from this one file.

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g. `youstina-portfolio`).
2. Push this folder's contents to the repo's `main` branch (see chat for the
   exact commands).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. GitHub gives you a URL like `https://<username>.github.io/<repo-name>/`
   within a minute or two.

## Known placeholders (things to swap in later)

- **Cover art / screenshots** — every game currently shows a big colored
  initial instead of a real image, since no screenshots existed yet.
- **GitHub / LinkedIn links** — social icons and per-game "View source"
  links point to `#`. Replace with your real profile/repo URLs.
- **Play buttons** — every game shows "Coming soon" since there are no web
  builds yet. Once you have one, set that game's `playUrl` in
  `games-data.js` and the button activates automatically.
- **Language switcher** — the "EN ▾" control in the header is a visual
  placeholder only (shows a tooltip, doesn't translate).
