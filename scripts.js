// Simple console log to ensure script is connected
console.log("Storefront loaded.");

// Placeholder logic for the Hero Carousel
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        console.log("Shift carousel left");
        // Logic to swap featured project will go here
    });

    nextBtn.addEventListener('click', () => {
        console.log("Shift carousel right");
        // Logic to swap featured project will go here
    });
}