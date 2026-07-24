// ===============================
// CampusConnect Progress Tracker
// ===============================

// Animate Progress Bars

window.addEventListener("load", () => {

    const fills = document.querySelectorAll(".fill");

    fills.forEach(fill => {

        const targetWidth = fill.style.width || getComputedStyle(fill).width;

        fill.style.width = "0";

        setTimeout(() => {

            fill.style.transition = "width 2s ease";

            if (fill.classList.contains("python"))
                fill.style.width = "90%";

            if (fill.classList.contains("java"))
                fill.style.width = "80%";

            if (fill.classList.contains("web"))
                fill.style.width = "75%";

            if (fill.classList.contains("ai"))
                fill.style.width = "60%";

        }, 300);

    });

});


// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".card h2");

counters.forEach(counter => {

    const text = counter.innerText;

    const number = parseInt(text);

    if (isNaN(number)) return;

    let count = 0;

    const speed = Math.ceil(number / 60);

    const updateCounter = () => {

        count += speed;

        if (count >= number) {

            counter.innerText = text;

        } else {

            counter.innerText = count;

            requestAnimationFrame(updateCounter);

        }

    };

    updateCounter();

});


// ===============================
// Achievement Hover Effect
// ===============================

const badges = document.querySelectorAll(".badge");

badges.forEach(badge => {

    badge.addEventListener("mouseenter", () => {

        badge.style.transform = "scale(1.1) rotate(3deg)";
        badge.style.boxShadow = "0 10px 25px rgba(56,189,248,0.5)";

    });

    badge.addEventListener("mouseleave", () => {

        badge.style.transform = "scale(1)";
        badge.style.boxShadow = "none";

    });

});


// ===============================
// Daily Goal Interaction
// ===============================

const goals = document.querySelectorAll(".goals li");

goals.forEach(goal => {

    goal.style.cursor = "pointer";

    goal.addEventListener("click", () => {

        if (goal.innerHTML.includes("⬜")) {

            goal.innerHTML = goal.innerHTML.replace("⬜", "✅");
            goal.style.color = "#22c55e";

        }

    });

});


// ===============================
// Motivational Quotes
// ===============================

const quotes = [

    "Success is the sum of small efforts repeated every day.",

    "Keep learning. Keep building. Keep growing.",

    "Consistency beats motivation.",

    "Every expert was once a beginner.",

    "Dream big. Code bigger.",

    "One project every month can change your career."

];

const quoteElement = document.querySelector(".quote h2");

let quoteIndex = 0;

setInterval(() => {

    quoteIndex++;

    if (quoteIndex >= quotes.length)
        quoteIndex = 0;

    quoteElement.style.opacity = "0";

    setTimeout(() => {

        quoteElement.innerText = quotes[quoteIndex];
        quoteElement.style.opacity = "1";

    }, 400);

}, 5000);


// ===============================
// Scroll Animation
// ===============================

const elements = document.querySelectorAll(
    ".card,.skill,.goals,.badge,.quote"
);

function reveal() {

    elements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

elements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);

reveal();


// ===============================
// Console Message
// ===============================

console.log("CampusConnect Progress Tracker Loaded Successfully 🚀");