// ===============================
// CampusConnect Coding Practice JS
// ===============================

// Search Problems
const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".problem-card");

searchBox.addEventListener("keyup", function () {

    const value = searchBox.value.toLowerCase();

    cards.forEach((card) => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// Solve Button
const solveButtons = document.querySelectorAll(".problem-card button");

solveButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const problem =
            this.parentElement.querySelector("h3").innerText;

        alert("🚀 Opening Problem: " + problem);

        // Future:
        // window.location.href="/problem/python1";

    });

});

// Daily Challenge
const challengeButton =
    document.querySelector(".daily-challenge button");

challengeButton.addEventListener("click", function () {

    alert("🔥 Today's Challenge Started!\n\nBest of Luck!");

});

// Page Animation
window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {

            card.style.transition = "0.6s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }, index * 120);

    });

});