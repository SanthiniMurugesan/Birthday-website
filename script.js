const cards = document.querySelectorAll(".card");
const heartContainer = document.getElementById("hearts");

let currentCard = 0;

// Show first card
cards[currentCard].classList.add("show");

// Next card function
function nextCard() {

    cards[currentCard].classList.remove("show");

    currentCard++;

    if (currentCard < cards.length) {

        cards[currentCard].classList.add("show");

        // Show confetti on the final card
        if (cards[currentCard].classList.contains("ending")) {
            confetti();
        }
    }
}

// Floating Hearts

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

setInterval(createHeart, 600);

// Confetti

function confetti() {

    const emojis = ["🎉","🎊","✨","💖","🎂"];

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-20px";
        piece.style.fontSize = (18 + Math.random() * 15) + "px";
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
