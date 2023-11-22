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

    // Add task edit and delete event
    app.addEventListener("click", function (event) {
        const target = event.target;

        if (target.classList.contains("edit-btn")) {
            const taskIndex = target.dataset.index;
            const newName = prompt("Enter new task name:");
            if (newName) {
                tasks[taskIndex].name = newName;
                saveTasksToLocalStorage();
                renderTasks();
            }
        } else if (target.classList.contains("delete-btn")) {
            const taskIndex = target.dataset.index;
            tasks.splice(taskIndex, 1);
            saveTasksToLocalStorage();
            renderTasks();
        }
    });

    function renderTasks() {
        // Clear the existing content
        app.innerHTML = '';

        tasks.forEach((task, index) => {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task");

            taskElement.innerHTML = `
                <div>${task.name}</div>
                <div>${task.progress}%</div>
                <div class="actions">
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
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
