const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Please enter a task!");
  } else {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    let taskText = document.createElement("span");
    taskText.textContent = inputBox.value;
    taskText.classList.add("task-text");
    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "\u00d7";  // × symbol
    deleteBtn.classList.add("delete-btn");

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    listContainer.appendChild(li);

    inputBox.value = "";
  }
}
listContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
