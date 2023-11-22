document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");

    // Sample data
    const tasks = [
        { name: "Math", progress: 30 },
        { name: "Science", progress: 50 },
        { name: "History", progress: 70 },
    ];

    // Render tasks
    tasks.forEach(task => renderTask(task));

    function renderTask(task) {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        taskElement.innerHTML = `
            <div>${task.name}</div>
            <div>${task.progress}%</div>
        `;

        const progressBar = document.createElement("div");
        progressBar.classList.add("progress");
        progressBar.innerHTML = `<div class="progressBar" style="width:${task.progress}%"></div>`;

        taskElement.appendChild(progressBar);
        app.appendChild(taskElement);
    }
});
