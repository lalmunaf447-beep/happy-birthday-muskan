const startBtn = document.getElementById("startBtn");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

createBalloons();
createHearts();

startBtn.addEventListener("click", () => {

    title.innerHTML = "🎂 Happy Birthday Muskan ❤️";
    subtitle.innerHTML = `
    Wishing you endless happiness, love and success! 💖<br><br>
    Click the button below to cut your cake 🎂
    `;

    startBtn.innerHTML = "🎂 Cut the Cake";

    startBtn.onclick = cutCake;

});

function cutCake(){

    title.innerHTML = "🎉 Cake Cut Successfully 🎉";

    subtitle.innerHTML = `
    <div style="font-size:120px;">🍰</div>
    <h2>Happy Birthday Muskan ❤️</h2>
    <br>
    May Allah bless you with happiness,
    good health, success and endless smiles.
    <br><br>
    🎊 Have a Wonderful Birthday 🎊
    `;

    startBtn.style.display="none";

    confetti();

}

function createBalloons(){

for(let i=0;i<15;i++){

let b=document.createElement("div");

b.className="balloon";

b.innerHTML="🎈";

b.style.left=Math.random()*100+"vw";

b.style.animationDuration=(8+Math.random()*6)+"s";

document.body.appendChild(b);

}

}

function createHearts(){

for(let i=0;i<20;i++){

let h=document.createElement("div");

h.className="heart";

h.innerHTML="💖";

h.style.left=Math.random()*100+"vw";

h.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(h);

}

}

function confetti(){

const emoji=["🎉","✨","🎊","💖","🎈","🌸"];

for(let i=0;i<200;i++){

let e=document.createElement("div");

e.innerHTML=emoji[Math.floor(Math.random()*emoji.length)];

e.style.position="fixed";

e.style.left=Math.random()*100+"vw";

e.style.top="-30px";

e.style.fontSize=(20+Math.random()*25)+"px";

e.style.animation=`fall ${3+Math.random()*3}s linear`;

document.body.appendChild(e);

}

}