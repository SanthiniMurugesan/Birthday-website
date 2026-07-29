// Get all pages
const pages = document.querySelectorAll(".page");

let currentPage = 0;

// Change pages
function nextPage() {

    if (currentPage < pages.length - 1) {

        pages[currentPage].classList.remove("active");

        currentPage++;

        pages[currentPage].classList.add("active");

        // Show confetti on Page 6
        if (currentPage === 5) {
            confetti();
        }
    }
}

// Floating Hearts
const heartContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💖", "💗", "💕"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 15) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 500);

// Confetti
function confetti() {

    const emojis = ["🎉", "🎊", "✨", "💖", "🎂"];

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.position = "fixed";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.top = "-20px";

        piece.style.fontSize = (18 + Math.random() * 20) + "px";

        piece.style.zIndex = "999";

        piece.style.pointerEvents = "none";

        document.body.appendChild(piece);

        let y = -20;
        let x = parseFloat(piece.style.left);

        const speed = 2 + Math.random() * 4;

        const drift = (Math.random() - 0.5) * 2;

        const fall = setInterval(() => {

            y += speed;
            x += drift;

            piece.style.top = y + "px";
            piece.style.left = x + "vw";

            if (y > window.innerHeight) {
                clearInterval(fall);
                piece.remove();
            }

        }, 20);

    }

}
