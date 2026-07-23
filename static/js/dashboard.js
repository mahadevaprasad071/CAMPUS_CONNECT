// ==============================
// CampusConnect Dashboard
// NEXUS-06
// ==============================

// Welcome Message
console.log("🚀 CampusConnect Dashboard Loaded Successfully!");

// Get all buttons
const buttons = document.querySelectorAll(".action-buttons button");

// Add click effect
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        // Small animation
        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);

        // Show message
        alert(`Opening ${button.innerText}... (Feature Coming Soon 🚀)`);
    });
});

// Statistics Card Animation
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
        card.style.transition = "0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 200);
});