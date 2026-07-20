// ==========================================
// CampusConnect Register JavaScript
// ==========================================

// Page Fade In
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ==========================================
// Elements
// ==========================================

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");

const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");
const matchText = document.getElementById("match-text");

// ==========================================
// Show / Hide Password
// ==========================================

togglePassword.addEventListener("click", () => {

    if(password.type==="password"){

        password.type="text";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    }else{

        password.type="password";

        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});

// ==========================================
// Password Strength
// ==========================================

password.addEventListener("input",()=>{

    const value=password.value;

    let strength=0;

    if(value.length>=8) strength++;
    if(/[A-Z]/.test(value)) strength++;
    if(/[a-z]/.test(value)) strength++;
    if(/[0-9]/.test(value)) strength++;
    if(/[^A-Za-z0-9]/.test(value)) strength++;

    switch(strength){

        case 0:
        case 1:
            strengthBar.style.width="20%";
            strengthBar.style.background="#ff3b30";
            strengthText.textContent="Weak Password";
            break;

        case 2:
            strengthBar.style.width="40%";
            strengthBar.style.background="#ff9500";
            strengthText.textContent="Fair Password";
            break;

        case 3:
            strengthBar.style.width="60%";
            strengthBar.style.background="#ffd60a";
            strengthText.textContent="Good Password";
            break;

        case 4:
            strengthBar.style.width="80%";
            strengthBar.style.background="#32d74b";
            strengthText.textContent="Strong Password";
            break;

        case 5:
            strengthBar.style.width="100%";
            strengthBar.style.background="#00e676";
            strengthText.textContent="Very Strong Password";
            break;

    }

});

// ==========================================
// Confirm Password
// ==========================================

function checkPassword(){

    if(confirmPassword.value===""){

        matchText.textContent="";
        return;

    }

    if(password.value===confirmPassword.value){

        matchText.textContent="✔ Passwords Match";
        matchText.style.color="#00ff99";

    }else{

        matchText.textContent="✖ Passwords Do Not Match";
        matchText.style.color="#ff4d4d";

    }

}

password.addEventListener("input",checkPassword);
confirmPassword.addEventListener("input",checkPassword);

// ==========================================
// Ripple Effect
// ==========================================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.className="ripple";

ripple.style.left=e.offsetX+"px";
ripple.style.top=e.offsetY+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ==========================================
// Input Animation
// ==========================================

document.querySelectorAll("input").forEach(input=>{

input.addEventListener("focus",()=>{

input.parentElement.style.transform="scale(1.02)";

});

input.addEventListener("blur",()=>{

input.parentElement.style.transform="scale(1)";

});

});

// ==========================================
// Mouse Glow
// ==========================================

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="220px";
glow.style.height="220px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle, rgba(0,229,255,.22), transparent 70%)";
glow.style.filter="blur(20px)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-110+"px";
glow.style.top=e.clientY-110+"px";

});

// ==========================================
// Floating Card
// ==========================================

const card=document.querySelector(".register-card");

let angle=0;

setInterval(()=>{

angle+=0.02;

card.style.transform=`translateY(${Math.sin(angle)*8}px)`;

},25);

console.log("✅ CampusConnect Register Page Loaded");