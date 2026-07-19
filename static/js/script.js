// ===============================
// CampusConnect JavaScript
// ===============================

console.log("🚀 CampusConnect Loaded Successfully!");

// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to CampusConnect!");
});

// Button hover animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
        button.style.transition = "0.3s";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});