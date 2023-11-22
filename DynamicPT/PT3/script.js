document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");
    const taskForm = document.getElementById("taskForm");

    // Sample data
    const tasks = [
        { name: "Math", progress: 30 },
        { name: "Science", progress: 50 },
        { name: "History", progress: 70 },
    ];

    // Render tasks
    tasks.forEach(task => renderTask(task));

    // Add task form submission event
    taskForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const taskName = document.getElementById("taskName").value;
        const taskProgress = parseInt(document.getElementById("taskProgress").value, 10);

        if (taskName && !isNaN(taskProgress)) {
            const newTask = { name: taskName, progress: taskProgress };
            tasks.push(newTask);
            renderTask(newTask);
            taskForm.reset();
        } else {
            alert("Please enter valid task details.");
        }
    });

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
