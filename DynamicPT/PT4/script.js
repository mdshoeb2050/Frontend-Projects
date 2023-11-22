document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");
    const taskForm = document.getElementById("taskForm");

    // Retrieve tasks from local storage or use an empty array
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Render tasks
    renderTasks();

    // Add task form submission event
    taskForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const taskName = document.getElementById("taskName").value;
        const taskProgress = parseInt(document.getElementById("taskProgress").value, 10);

        if (taskName && !isNaN(taskProgress)) {
            const newTask = { name: taskName, progress: taskProgress };
            tasks.push(newTask);
            saveTasksToLocalStorage();
            renderTasks();
            taskForm.reset();
        } else {
            alert("Please enter valid task details.");
        }
    });

    function renderTasks() {
        // Clear the existing content
        app.innerHTML = '';

        tasks.forEach(task => {
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
        });
    }

    function saveTasksToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
