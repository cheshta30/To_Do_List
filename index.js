const Input = document.querySelector("#Input");
const Enter = document.querySelector("#Enter");
const List = document.querySelector("#list");

function addTask() {
    if (Input.value === '') {
        alert("You have not entered any task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = Input.value;
        List.appendChild(li);

        let Delete = document.createElement("button");
        Delete.innerHTML = "\u274C"; 
        Delete.id = "Delete";
        li.appendChild(Delete);

        let Edit = document.createElement("button");
        Edit.id = "Edit";
        Edit.innerHTML = "\u270F"; 
        li.appendChild(Edit);
    }
    Input.value = "";
}

Input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

List.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "BUTTON") {
        if (e.target.innerHTML === "\u270F") { 
            const newTask = prompt("Edit your task:", e.target.parentElement.firstChild.textContent);
            if (newTask !== null) {
                e.target.parentElement.firstChild.textContent = newTask;
            } else {
                alert("Edited task cannot be empty");
            }
        } else if (e.target.innerHTML === "\u274C") { 
            e.target.parentElement.remove();
        }
    }
}, false);
