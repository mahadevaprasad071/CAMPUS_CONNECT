const chatBox=document.getElementById("chatBox");

const input=document.getElementById("userInput");

const send=document.getElementById("sendBtn");

function botReply(message){

let reply="";

message=message.toLowerCase();

if(message.includes("python")){

reply="🐍 Python is one of the best languages for beginners.";

}

else if(message.includes("java")){

reply="☕ Java is excellent for placements and Android development.";

}

else if(message.includes("html")){

reply="🌐 HTML is the structure of every website.";

}

else if(message.includes("css")){

reply="🎨 CSS is used to design beautiful webpages.";

}

else if(message.includes("javascript")){

reply="⚡ JavaScript makes websites interactive.";

}

else{

reply="🤖 Great question! AI integration with Gemini/OpenAI is coming soon.";

}

chatBox.innerHTML+=`

<div class="bot">${reply}</div>

`;

chatBox.scrollTop=chatBox.scrollHeight;

}

send.onclick=function(){

const text=input.value.trim();

if(text==="") return;

chatBox.innerHTML+=`

<div class="user">

${text}

</div>

`;

botReply(text);

input.value="";

}

document.querySelectorAll(".quick-btn").forEach(btn=>{

btn.onclick=function(){

input.value=this.innerText;

send.click();

}

});