let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = {
            text: taskText,
            done: false,
            dueDate: prompt('Enter due date (optional)'),
        };

        tasks.push(newTask);
        displayTasks();
        taskInput.value = '';
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <span>Due Date: ${task.dueDate || 'Not set'}</span>
            <span>${task.done ? 'Done' : 'Not Done'}</span>
            <button onclick="toggleTask(${index})">${task.done ? 'Undo' : 'Done'}</button>
            <button onclick="removeTask(${index})">Remove</button>
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${task.done ? '100%' : '0%'}">${task.done ? '100%' : '0%'}</div>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Initial display
displayTasks();
