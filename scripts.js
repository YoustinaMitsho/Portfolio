// Data for your featured carousel projects
const featuredGames = [
    {
        title: "Tankers - Multiplayer Game",
        desc: "Architected a multiplayer top-down shooter game optimizing network synchronization for up to 20 concurrent players.[cite: 1]",
        bgImage: "var(--card-light)" // Later, replace with "url('assets/tankers-bg.jpg')"
    },
    {
        title: "IPSE Jam 1st Place Winner",
        desc: "Co-developed a 30-minute narrative puzzle experience centered around themes of identity under strict deadlines.[cite: 1]",
        bgImage: "var(--card-dark)"
    },
    {
        title: "GMind - VR Plantopia",
        desc: "Engineered head motion stabilization system and designed interactive narrative sequences using Unity Timeline.[cite: 1]",
        bgImage: "var(--base-dark)"
    }
];

let currentIndex = 0;

// DOM Elements
const heroDisplay = document.getElementById('heroDisplay');
const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the carousel UI
function updateCarousel(index) {
    heroTitle.innerText = featuredGames[index].title;
    heroDesc.innerText = featuredGames[index].desc;
    heroDisplay.style.background = featuredGames[index].bgImage;
}

// Event Listeners for the buttons
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= featuredGames.length) {
        currentIndex = 0; // Loop back to the start
    }
    updateCarousel(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = featuredGames.length - 1; // Loop to the end
    }
    updateCarousel(currentIndex);
});

// Initialize the first view
updateCarousel(currentIndex);