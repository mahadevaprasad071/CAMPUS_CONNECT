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
// ========================================
// 🚀 CampusConnect Premium JavaScript
// ========================================

console.log("🚀 CampusConnect Loaded");

// ================================
// Loading Animation
// ================================

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ================================
// Navbar Shadow on Scroll
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(0,0,0,.45)";
        navbar.style.boxShadow = "0 20px 50px rgba(0,229,255,.25)";
        navbar.style.backdropFilter = "blur(25px)";

    } else {

        navbar.style.background = "rgba(255,255,255,.08)";
        navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,.3)";
    }

});

// ================================
// Mouse Glow
// ================================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle, rgba(0,229,255,.25), transparent 70%)";

glow.style.filter = "blur(20px)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX - 125 + "px";
    glow.style.top = e.clientY - 125 + "px";

});

// ================================
// Hero Parallax
// ================================

const hero=document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

    let x=(window.innerWidth/2-e.pageX)/40;
    let y=(window.innerHeight/2-e.pageY)/40;

    hero.style.transform=
    `translate(${x}px,${y}px)`;

});

// ================================
// Reveal Animation
// ================================

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(80px)";
card.style.transition=".8s";

observer.observe(card);

});

// ================================
// Card Tilt Effect
// ================================

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/12;

const rotateX=(rect.height/2-y)/12;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});

// ================================
// Button Ripple Effect
// ================================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const x=e.offsetX;
const y=e.offsetY;

ripple.style.left=x+"px";
ripple.style.top=y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ================================
// Typing Effect
// ================================

const heading=document.querySelector(".hero h1");

const text=heading.innerHTML;

heading.innerHTML="";

let i=0;

function type(){

if(i<text.length){

heading.innerHTML+=text.charAt(i);

i++;

setTimeout(type,35);

}

}

type();

// ================================
// Scroll Progress Bar
// ================================

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.background="#00e5ff";
progress.style.width="0";
progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=
document.documentElement.scrollHeight-window.innerHeight;

const current=window.scrollY;

progress.style.width=(current/total)*100+"%";

});

// ================================
// Floating Animation
// ================================

setInterval(()=>{

cards.forEach((card,index)=>{

card.style.transform=
`translateY(${Math.sin(Date.now()/600+index)*5}px)`;

});

},30);

console.log("🔥 Premium Effects Activated");