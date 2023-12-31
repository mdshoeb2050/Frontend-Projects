document.addEventListener("DOMContentLoaded", function () {
  const tasksContainer = document.getElementById("tasks");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  function updateProgress() {
    const tasks = document.querySelectorAll(".task");
    const totalTasks = tasks.length;
    const completedTasks = document.querySelectorAll(".completed").length;
    const progress = (completedTasks / totalTasks) * 100;

    progressBar.value = progress;
    progressText.textContent = `${Math.round(progress)}% complete`;
  }

  function toggleTaskCompletion() {
    this.classList.toggle("completed");
    updateProgress();
  }

  function createTaskElement(taskName) {
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerHTML = `
    <input type="checkbox">  
    <span>${taskName}</span>
      
    `;
    taskElement.querySelector("input").addEventListener("change", toggleTaskCompletion);

    return taskElement;
  }

  function addTask(taskName) {
    const taskElement = createTaskElement(taskName);
    tasksContainer.appendChild(taskElement);
    updateProgress();
  }

  // Example tasks
  addTask("Read Chapter 1");
  addTask("Complete Math Exercises");
  addTask("Review Vocabulary");

  // You can add more tasks as needed
});

