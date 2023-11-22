document.addEventListener("DOMContentLoaded", function () {
    const patternContainer = document.getElementById("pattern-container");
    const messageElement = document.getElementById("message");
    let selectedDots = [];

    // Create pattern dots
    for (let i = 0; i < 9; i++) {
        const dot = document.createElement("div");
        dot.classList.add("pattern-dot");
        dot.setAttribute("data-index", i);
        dot.textContent = i + 1;
        patternContainer.appendChild(dot);
    }

    // Add event listener to each pattern dot
    const patternDots = document.querySelectorAll(".pattern-dot");
    patternDots.forEach(dot => {
        dot.addEventListener("click", function () {
            const dotIndex = parseInt(this.getAttribute("data-index"));
            selectedDots.push(dotIndex);
            updatePattern();
        });
    });

    function updatePattern() {
        patternDots.forEach(dot => dot.classList.remove("selected"));

        if (selectedDots.length > 0) {
            selectedDots.forEach(index => patternDots[index].classList.add("selected"));
        }

        if (selectedDots.length === 3) {
            checkPattern();
        }
    }

    function checkPattern() {
        // Replace this logic with your pattern checking algorithm
        const correctPattern = [0, 4, 8]; // Example correct pattern
        const isCorrect = JSON.stringify(selectedDots) === JSON.stringify(correctPattern);

        if (isCorrect) {
            messageElement.textContent = "Pattern is correct!";
            messageElement.style.color = "#2ecc71";
        } else {
            messageElement.textContent = "Incorrect pattern. Try again!";
            messageElement.style.color = "#e74c3c";
        }

        // Reset after a brief delay
        setTimeout(resetPattern, 1000);
    }

    function resetPattern() {
        selectedDots = [];
        updatePattern();
        messageElement.textContent = "";
    }
});
