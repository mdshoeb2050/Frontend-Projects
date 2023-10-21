document.addEventListener("DOMContentLoaded", function () {
    const cube = document.querySelector(".cube");
    const controls = document.querySelector(".controls");

    let rotateX = 0;
    let rotateY = 0;

    function updateRotation() {
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    document.getElementById("rotateLeft").addEventListener("click", function () {
        rotateY -= 30;
        updateRotation();
    });

    document.getElementById("rotateRight").addEventListener("click", function () {
        rotateY += 30;
        updateRotation();
    });

    document.getElementById("rotateUp").addEventListener("click", function () {
        rotateX -= 30;
        updateRotation();
    });

    document.getElementById("rotateDown").addEventListener("click", function () {
        rotateX += 30;
        updateRotation();
    });

    updateRotation();
});
