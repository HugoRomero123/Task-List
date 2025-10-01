const taskInput = document.getElementById("taskInput");

const addButton = document.getElementById("addButton");
const taskText = document.getElementById("taskText");
const removeButton = document.getElementsByClassName("removeButton");

let taskList = {};

/*
<div class="task">
    <p id="taskText">Example 1 <button class="completeButton">Complete</button></p>
    <button class="removeButton">Remove</button>
</div>
*/

function createTask() {
    let task = document.createElement("div");
    task.setAttribute("id", "task");

    task.appendChild(
        {let taskText = document.createElement("p");}
    )
}

addButton.addEventListener("click", (event) => {
    createTask();
});