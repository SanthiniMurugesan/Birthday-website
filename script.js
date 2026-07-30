        // Get all pages
const pages = document.querySelectorAll(".page");
const heartContainer = document.getElementById("hearts");

let currentPage = 0;

// Show first page
pages[currentPage].classList.add("active");

// Next page function
function nextCard() {

    pages[currentPage].classList.remove("active");

    currentPage++;

    if (currentPage < pages.length) {

        pages[currentPage].classList.add("active");

        // Start celebration on the final page
        if (pages[currentPage].querySelector(".ending")) {
            startHearts();
            confetti();
        }
    }
}

// Floating Hearts (only on last page)

let heartInterval = null;

function startHearts() {

    if (heartInterval) return; // Prevent multiple intervals

    heartInterval = setInterval(createHeart, 500);
}

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = ["❤️","💖","💕","💗","🤍"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Confetti

function confetti() {

    const emojis = ["🎉","🎊","✨","💖","🎂"];

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-20px";
        piece.style.fontSize = (18 + Math.random() * 14) + "px";
        piece.style.pointerEvents = "none";
        piece.style.zIndex = "9999";

        document.body.appendChild(piece);

        let y = -20;
        let x = parseFloat(piece.style.left);

        const speed = 2 + Math.random() * 3;
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
