/* ============================================================
   GAMES DATA
   ------------------------------------------------------------
   This is the ONLY file you need to touch to add, remove, or
   edit a game. Every page (store grid, hero carousel, and the
   game detail page) reads from this array.

   HOW TO ADD A NEW GAME:
   1. Copy one of the objects below (the { ... } block).
   2. Give it a unique "slug" (no spaces, used in the URL).
   3. Fill in the fields with your real info.
   4. Add it to the GAMES array.
   That's it — it will automatically show up on the store page.

   IMAGES: there are no real screenshots yet, so "cover" and
   "gallery" just reference placeholder art generated in CSS.
   When you have real screenshots/GIFs, drop them in
   assets/images/<slug>/ and change the matching "image" field
   from null to a path, e.g. "assets/images/tankers/cover.jpg"

   LINKS: your CV lists GitHub/LinkedIn as link text but the
   PDF didn't expose the actual URLs to me, so every "github"
   field below is a placeholder "#". Replace these with your
   real repo links.
   ============================================================ */

const GAMES = [
  {
    slug: "tankers",
    title: "Tankers",
    tagline: "Multiplayer top-down tank shooter for up to 20 players",
    status: "Published",
    featured: true,
    accent: "coral",
    cover: { letter: "T", pattern: 1 },
    engine: "Unity (C#, Netcode for GameObjects)",
    platform: "PC",
    role: "Solo Developer",
    team: "Solo",
    duration: "Feb 2025 – Jul 2025",
    date: "2025-07",
    tags: ["Published", "Unity", "Multiplayer", "PC"],
    github: "#",
    playUrl: null,
    description:
      "A multiplayer top-down tank shooter built around fast, readable combat. The whole project was an exercise in getting networked movement and actions to feel instant even under real-world latency.",
    contributions: [
      "Architected the full multiplayer game loop using Unity Netcode for GameObjects",
      "Implemented and optimized network synchronization for movement and firing for up to 20 concurrent players",
      "Built client-side prediction and reconciliation to keep controls feeling responsive online",
      "Owned the project end-to-end as solo developer, from architecture to polish"
    ]
  },
  {
    slug: "road-runner",
    title: "Road Runner",
    tagline: "2D endless runner with adaptive difficulty and 9 unlockable skins",
    status: "Published",
    featured: true,
    accent: "rose",
    cover: { letter: "R", pattern: 2 },
    engine: "Unity (C#)",
    platform: "Mobile",
    role: "Solo Developer",
    team: "Solo",
    duration: "June 2024",
    date: "2024-06",
    tags: ["Published", "Unity", "Mobile"],
    github: "#",
    playUrl: null,
    description:
      "A 2D mobile runner focused on player retention: the game quietly reads how you're performing and reshapes the challenge around you, then rewards you for sticking around.",
    contributions: [
      "Programmed an adaptive difficulty system driven by live player performance metrics",
      "Designed and implemented a progression system with 9 unlockable skins to boost retention",
      "Built and tuned mobile-friendly touch controls and UI"
    ]
  },
  {
    slug: "word-to-puzzle",
    title: "Word to Puzzle Generator",
    tagline: "Tool that turns a single word into a playable puzzle level",
    status: "Published",
    featured: false,
    accent: "plum",
    cover: { letter: "W", pattern: 3 },
    engine: "Unity (C#)",
    platform: "PC",
    role: "Solo Developer",
    team: "Solo",
    duration: "March 2025",
    date: "2025-03",
    tags: ["Published", "Unity", "Tools", "PC"],
    github: "#",
    playUrl: null,
    description:
      "A level-authoring tool built to kill busywork: type one word, and it automatically generates a matching puzzle layout, cutting level design time from a manual, per-level process down to a single input.",
    contributions: [
      "Designed the generation algorithm that maps letters/words to solvable puzzle layouts",
      "Built the automated pipeline that outputs playable levels from a single-line input",
      "Reduced manual level design time by replacing it with a repeatable generator"
    ]
  },
  {
    slug: "snake-apple-quest",
    title: "Snake: Apple Quest",
    tagline: "A classic snake game with enemies that actually aim",
    status: "Published",
    featured: false,
    accent: "coral",
    cover: { letter: "S", pattern: 4 },
    engine: "C++ / SFML",
    platform: "PC",
    role: "Solo Developer",
    team: "Solo",
    duration: "May 2023",
    date: "2023-05",
    tags: ["Published", "C++", "PC"],
    github: "#",
    playUrl: null,
    description:
      "A twist on the classic snake formula, written from scratch in C++ with SFML — the real challenge was giving the enemies projectile aim that actually reacts to where you are, not just where you were.",
    contributions: [
      "Coded enemy AI using vector math for accurate projectile targeting",
      "Built the full game loop, rendering, and collision handling in C++/SFML from scratch"
    ]
  },
  {
    slug: "plantopia",
    title: "Plantopia (VR)",
    tagline: "VR narrative experience — comfort systems and cinematic sequences",
    status: "Professional",
    featured: true,
    accent: "rose",
    cover: { letter: "P", pattern: 5 },
    engine: "Unity (Timeline, Cinemachine)",
    platform: "VR",
    role: "Game Developer Intern @ GMind",
    team: "Studio team",
    duration: "Jul 2025 – Sep 2025",
    date: "2025-09",
    tags: ["Professional", "Unity", "VR"],
    github: "#",
    playUrl: null,
    description:
      "A VR title built during a game developer internship at GMind. Most of the work centered on making the headset experience physically comfortable and on directing narrative beats that land inside a 3D space instead of on a flat screen.",
    contributions: [
      "Engineered a head motion stabilization system to reduce VR discomfort",
      "Designed 3+ interactive narrative sequences using Unity Timeline and Cinemachine"
    ]
  },
  {
    slug: "ipse-game-jam",
    title: "IPSE Game Jam",
    tagline: "1st Place — 30-minute narrative puzzle experience about identity",
    status: "Game Jam",
    featured: true,
    accent: "coral",
    cover: { letter: "I", pattern: 6 },
    engine: "Unity (C#)",
    platform: "PC",
    role: "Co-Developer",
    team: "Team",
    duration: "February 2026",
    date: "2026-02",
    tags: ["Game Jam", "Unity", "1st Place"],
    github: "#",
    playUrl: null,
    description:
      "🏆 1st Place at the Information Technology Institute's IPSE game jam. A 30-minute narrative puzzle experience built around themes of identity, delivered under a strict jam deadline.",
    contributions: [
      "Programmed core player interactions and dynamic platform mechanics",
      "Integrated multi-level 3D environments under a strict jam deadline",
      "Co-developed the full narrative puzzle experience with the team"
    ]
  },
  {
    slug: "gem-hackathon",
    title: "GEM Hackathon",
    tagline: "3rd Place — gamified visitor-engagement prototype for the Grand Egyptian Museum",
    status: "Game Jam",
    featured: false,
    accent: "rose",
    cover: { letter: "G", pattern: 7 },
    engine: "Unity",
    platform: "Mobile",
    role: "Team Member",
    team: "Team",
    duration: "December 2025",
    date: "2025-12",
    tags: ["Game Jam", "Unity", "3rd Place", "Mobile"],
    github: "#",
    playUrl: null,
    description:
      "🥉 3rd Place at the Grand Egyptian Museum hackathon. Built in a 30-hour sprint, the app prototype gamifies a museum visit with guided paths and interactive quests.",
    contributions: [
      "Built a gamified app prototype to enhance visitor engagement",
      "Designed guided paths and interactive quest mechanics",
      "Shipped a working prototype within a 30-hour challenge window"
    ]
  },
  {
    slug: "player2-npc-jam",
    title: "Player2 NPC Jam",
    tagline: "Barista simulator with a murder mystery solved through NPC dialogue",
    status: "Game Jam",
    featured: false,
    accent: "plum",
    cover: { letter: "P", pattern: 8 },
    engine: "Unity (C#)",
    platform: "PC",
    role: "Co-Developer",
    team: "Team",
    duration: "November 2025",
    date: "2025-11",
    tags: ["Game Jam", "Unity"],
    github: "#",
    playUrl: null,
    description:
      "A barista sim with a twist: the mystery isn't solved by clicking around a crime scene, it's solved by paying attention to what your NPC customers say to you.",
    contributions: [
      "Co-developed the barista simulation gameplay loop",
      "Built NPC dialogue systems that double as the mystery's clue delivery"
    ]
  },
  {
    slug: "jamsepticeye",
    title: "Jamsepticeye",
    tagline: "Full playable prototype shipped in 6 days with a 2-person team",
    status: "Game Jam",
    featured: false,
    accent: "coral",
    cover: { letter: "J", pattern: 9 },
    engine: "Unity",
    platform: "PC",
    role: "Co-Developer",
    team: "2-person team",
    duration: "October 2025",
    date: "2025-10",
    tags: ["Game Jam", "Unity"],
    github: "#",
    playUrl: null,
    description:
      "A speed-run of game development itself: a complete, playable prototype scoped and shipped in six days by a two-person team.",
    contributions: [
      "Shipped a full playable prototype in 6 days as one of two developers",
      "Owned scope decisions to keep the game finishable within the deadline"
    ]
  },
  {
    slug: "digitopia",
    title: "Digitopia",
    tagline: "Egyptian-culture game built with a 4-person team",
    status: "Game Jam",
    featured: false,
    accent: "rose",
    cover: { letter: "D", pattern: 10 },
    engine: "Unity",
    platform: "PC",
    role: "Team Member",
    team: "4-person team",
    duration: "September 2025",
    date: "2025-09",
    tags: ["Game Jam", "Unity"],
    github: "#",
    playUrl: null,
    description:
      "A game jam collaboration exploring Egyptian culture as a gameplay subject, built together with a four-person team.",
    contributions: [
      "Collaborated with a 4-person team to design and build the game",
      "Contributed gameplay programming across the jam's tight timeline"
    ]
  }
];

// Sort newest-first by default (used by the store page)
GAMES.sort((a, b) => (a.date < b.date ? 1 : -1));
