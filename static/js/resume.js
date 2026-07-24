// ===============================
// CampusConnect Resume Builder JS
// ===============================

// Resume Form
const resumeForm = document.getElementById("resumeForm");

// Submit Event
resumeForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("✅ Resume Preview Coming Soon!\n\nYour information has been saved successfully.");

    // Future:
    // Save data to Flask Database
    // Generate Resume PDF
    // Download Resume

});

// Input Animation
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input) => {

    input.addEventListener("focus", function () {

        this.style.border = "2px solid #38bdf8";

    });

    input.addEventListener("blur", function () {

        this.style.border = "1px solid rgba(255,255,255,.15)";

    });

});

// Page Animation
window.addEventListener("load", () => {

    const container = document.querySelector(".resume-container");

    container.style.opacity = "0";
    container.style.transform = "translateY(40px)";

    setTimeout(() => {

        container.style.transition = "0.8s ease";

        container.style.opacity = "1";
        container.style.transform = "translateY(0px)";

    }, 200);

});