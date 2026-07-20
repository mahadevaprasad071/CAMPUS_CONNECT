// ==========================================
// CampusConnect Login JavaScript
// ==========================================

// Page Fade In
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ===============================
// Show / Hide Password
// ===============================

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        toggle.classList.remove("fa-eye");
        toggle.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        toggle.classList.remove("fa-eye-slash");
        toggle.classList.add("fa-eye");

    }

});

// ===============================
// Mouse Spotlight
// ===============================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "220px";
glow.style.height = "220px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle, rgba(0,229,255,.22), transparent 70%)";
glow.style.filter = "blur(20px)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX - 110 + "px";
    glow.style.top = e.clientY - 110 + "px";

});

// ===============================
// Ripple Effect
// ===============================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const x=e.offsetX;
const y=e.offsetY;

ripple.style.left=x+"px";
ripple.style.top=y+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ===============================
// Input Focus Animation
// ===============================

const inputs=document.querySelectorAll("input");

inputs.forEach(input=>{

input.addEventListener("focus",()=>{

input.parentElement.style.transform="scale(1.03)";

});

input.addEventListener("blur",()=>{

input.parentElement.style.transform="scale(1)";

});

});

// ===============================
// Floating Login Card
// ===============================

const card=document.querySelector(".login-card");

let angle=0;

setInterval(()=>{

angle+=0.02;

card.style.transform=
`translateY(${Math.sin(angle)*8}px)`;

},25);

console.log("🔥 Login Page Loaded Successfully");