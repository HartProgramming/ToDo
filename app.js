const entry = document.querySelector("#entry");
const submit = document.querySelector("#submit");
const body = document.querySelector("body")
submit.addEventListener("click", function () {
    if (entry.value !== "") {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todoClass");
        const todoEntry = document.createElement("input");
        body.appendChild(todoDiv)
        todoDiv.appendChild(todoEntry);
        todoEntry.value = entry.value;
        entry.value = "";
        const deleteClass = document.createElement("button");
        deleteClass.textContent = "Delete";
        deleteClass.classList.add("deleteClass");
        todoDiv.appendChild(deleteClass);
        deleteClass.addEventListener("click", function () {
            todoDiv.style.display = "none"
        })
    }else{
        alert("ToDo can't be empty")
    }
   
})