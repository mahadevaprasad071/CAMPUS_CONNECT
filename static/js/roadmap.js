// ===============================
// CampusConnect Roadmap JavaScript
// ===============================

// Live Search
const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".roadmap-card");

searchBox.addEventListener("keyup", function () {

    const searchValue = searchBox.value.toLowerCase();

    cards.forEach((card) => {

        const title = card.querySelector("h2").textContent.toLowerCase();

        if (title.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// Start Learning Button
const buttons = document.querySelectorAll(".roadmap-card button");

buttons.forEach((button) => {

    button.addEventListener("click", function () {

        const course =
            this.parentElement.querySelector("h2").innerText;

        alert("🚀 You selected: " + course);

        // Future Flask Route
        // window.location.href = "/python";
        // window.location.href = "/java";
        // etc.

    });

});


// Fade Animation
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