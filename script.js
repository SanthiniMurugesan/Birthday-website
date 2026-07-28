const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const messageArea = document.getElementById("messageArea");
const bubbles = document.querySelectorAll(".bubble");
const hearts = document.querySelector(".hearts");

let current = 0;

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    messageArea.classList.remove("hidden");

    bubbles[current].classList.remove("hidden");
    nextBtn.classList.remove("hidden");
});

nextBtn.addEventListener("click", () => {

    if(current < bubbles.length - 1){
        current++;
        bubbles[current].classList.remove("hidden");
    }

    if(current == bubbles.length - 1){
        nextBtn.innerHTML = "🎉 Happy Birthday Hero ❤️";
        confetti();
    }

});

function confetti(){

    for(let i=0;i<80;i++){

        let heart=document.createElement("div");

        heart.innerHTML=["🎉","💖","✨","🎂","🎈"][Math.floor(Math.random()*5)];

        heart.className="heart";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*25)+"px";

        heart.style.animationDuration=(4+Math.random()*4)+"s";

        hearts.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },8000);

    }

}

setInterval(()=>{

    let heart=document.createElement("div");

    heart.innerHTML="💗";

    heart.className="heart";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*15)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

},500);
