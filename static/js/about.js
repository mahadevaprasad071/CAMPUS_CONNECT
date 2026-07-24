window.addEventListener("load",()=>{

document.querySelectorAll(".fade").forEach((item,index)=>{

setTimeout(()=>{

item.classList.add("show");

},index*300);

});

});

const cards=document.querySelectorAll(".card,.feature,.box");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const position=card.getBoundingClientRect().top;

if(position<window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".8s";

});