// ==========================================
// CampusConnect Interview Preparation
// ==========================================

// Mock Interview Questions

const questions = [

"Tell me about yourself.",

"What are your strengths?",

"What are your weaknesses?",

"Explain the difference between OOP and POP.",

"What is a Database?",

"Explain DBMS normalization.",

"What is an API?",

"Difference between Python List and Tuple?",

"What is Flask?",

"What is SQL JOIN?",

"Explain Operating System.",

"What is Multithreading?",

"What are HTTP Methods?",

"What is Artificial Intelligence?",

"Where do you see yourself in 5 years?"

];

let current = 0;

const question = document.getElementById("question");

const button = document.getElementById("nextQuestion");

button.addEventListener("click", () => {

    question.style.opacity = "0";

    setTimeout(() => {

        question.innerHTML = questions[current];

        question.style.opacity = "1";

        current++;

        if(current >= questions.length){

            current = 0;

        }

    },300);

});

// ==========================================
// Company Card Hover
// ==========================================

const companies = document.querySelectorAll(".company");

companies.forEach(company=>{

    company.addEventListener("mouseenter",()=>{

        company.style.boxShadow="0 10px 30px rgba(56,189,248,.5)";

    });

    company.addEventListener("mouseleave",()=>{

        company.style.boxShadow="none";

    });

});

// ==========================================
// Resource Cards
// ==========================================

const resources=document.querySelectorAll(".resource");

resources.forEach(card=>{

    card.addEventListener("click",()=>{

        alert(card.innerText+" will be available soon!");

    });

});

// ==========================================
// Challenge Button
// ==========================================

const challenge=document.querySelector(".challenge-card button");

challenge.addEventListener("click",()=>{

    alert("🚀 Great! Solve today's challenge and improve your coding skills.");

});

// ==========================================
// Scroll Reveal Animation
// ==========================================

const elements=document.querySelectorAll(

".category,.company,.question-box,.challenge-card,.resource"

);

function reveal(){

    elements.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            el.style.opacity="1";

            el.style.transform="translateY(0)";

        }

    });

}

elements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();

// ==========================================
// Welcome Message
// ==========================================

window.addEventListener("load",()=>{

console.log("Interview Preparation Loaded 🚀");

});