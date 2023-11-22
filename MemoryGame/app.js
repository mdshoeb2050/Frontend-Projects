document.addEventListener("DOMContentLoaded", function () {
    const gameBoard = document.getElementById("gameBoard");
    let cards = [];
    let flippedCards = [];
    let canFlip = true;

    const cardValues = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];

    // Shuffle card values
    cardValues.sort(() => Math.random() - 0.5);

    // Create cards
    for (let i = 0; i < cardValues.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = cardValues[i];
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
        cards.push(card);
    }

    function flipCard() {
        if (!canFlip) return;
        if (flippedCards.length < 2) {
            this.classList.add("flipped");
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                canFlip = false;
                setTimeout(checkMatch, 1000);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;
        const value1 = card1.dataset.value;
        const value2 = card2.dataset.value;

        if (value1 === value2) {
            // Match
            card1.removeEventListener("click", flipCard);
            card2.removeEventListener("click", flipCard);
        } else {
            // Not a match
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
        }

        flippedCards = [];
        canFlip = true;

        if (checkWin()) {
            alert("Congratulations! You won!");
            resetGame();
        }
    }

    function checkWin() {
        return cards.every(card => !card.classList.contains("flipped"));
    }

    function resetGame() {
        cards.forEach(card => {
            card.classList.remove("flipped");
            card.addEventListener("click", flipCard);
        });
        canFlip = true;
        flippedCards = [];
        cardValues.sort(() => Math.random() - 0.5);
        cards.forEach((card, index) => {
            card.dataset.value = cardValues[index];
        });
    }
});

function startGame() {
    location.reload();
}
