let input = document.getElementById("task");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");

 // CREATE
    addBtn.addEventListener("click", function () {
    let task = input.value;

    if (task.trim() === "") {
    alert("Enter a task");
    return;
            }

    let li = document.createElement("li");
    li.innerText = task + " ";

    // UPDATE Button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    editBtn.addEventListener("click", function () {
     let newTask = prompt("Edit Task:", li.firstChild.textContent);
        if (newTask !== null && newTask.trim() !== "") {
             li.firstChild.textContent = newTask + " ";
                }
            });

    // DELETE Button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
    li.remove();
     });

     li.appendChild(editBtn);
     li.appendChild(deleteBtn);

    // READ 
    list.appendChild(li);

    input.value = "";
        });
