const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

// Form Submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // Validation

    if (name === "") {
        alert("Please enter your name.");
        nameInput.focus();
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        emailInput.focus();
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
    }

    if (subject === "") {
        alert("Please enter a subject.");
        subjectInput.focus();
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        messageInput.focus();
        return;
    }

    // Success

    alert(
        "🎉 Thank you, " +
        name +
        "! Your message has been received successfully."
    );

    form.reset();

});

// Email Validation

function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}

// Social Icons Animation

const socials = document.querySelectorAll(".social a");

socials.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "scale(1.2) rotate(10deg)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "scale(1) rotate(0deg)";

    });

});

// FAQ Hover Effect

const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 10px 25px rgba(56,189,248,0.4)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});

// Hero Fade-in

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";

    setTimeout(() => {

        hero.style.transition = "1s";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    }, 200);

});