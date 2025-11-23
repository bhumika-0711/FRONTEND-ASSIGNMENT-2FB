// Get Elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
displayTasks();

// Add Task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(taskText);
    saveTasks();
    displayTasks();

    taskInput.value = "";
});

// Display Tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task;

        // Edit Button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editTask(index);

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

// Edit Task
function editTask(index) {
    const newTask = prompt("Edit your task:", tasks[index]);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask;
        saveTasks();
        displayTasks();
    }
}

// Delete Task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

// Save to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
