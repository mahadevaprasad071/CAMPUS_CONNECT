// ===============================
// CampusConnect Projects JavaScript
// ===============================

// Live Search
const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".project-card");

searchBox.addEventListener("keyup", function () {

    const searchValue = searchBox.value.toLowerCase();

    cards.forEach((card) => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// View Project Buttons
const buttons = document.querySelectorAll(".project-card button");

buttons.forEach((button) => {

    button.addEventListener("click", function () {

        const project =
            this.parentElement.querySelector("h3").innerText;

        alert("🚀 Opening Project: " + project);

        // Future Flask Route
        // window.location.href="/project/calculator";

    });

});

// Page Load Animation
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