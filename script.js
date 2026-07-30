const pages = document.querySelectorAll(".page");
const heartsContainer = document.getElementById("hearts");

let currentPage = 0;

// Show first page
pages[currentPage].classList.add("active");

// Next page
function nextPage() {

    pages[currentPage].classList.remove("active");

    currentPage++;

    if (currentPage < pages.length) {

        pages[currentPage].classList.add("active");

        // Start celebration on the last page
        if (currentPage === pages.length - 1) {
            startCelebration();
        }

    }

}

// Celebration
let celebrationStarted = false;

function startCelebration() {

    if (celebrationStarted) return;

    celebrationStarted = true;

    createConfetti();

    setInterval(createHeart, 400);

}

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = ["❤️","💖","💕","💗","🤍"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

// Confetti
function createConfetti() {

    const emojis = ["🎉","🎊","✨","🎂","💖"];

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = (16 + Math.random() * 18) + "px";
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        let top = -30;
        let left = Math.random() * 100;

        const speed = 2 + Math.random() * 3;
        const drift = (Math.random() - 0.5) * 0.5;

        const fall = setInterval(() => {

            top += speed;
            left += drift;

            confetti.style.top = top + "px";
            confetti.style.left = left + "vw";

            if (top > window.innerHeight) {

                clearInterval(fall);
                confetti.remove();

            }

        }, 20);

    }

}
