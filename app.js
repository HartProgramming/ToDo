const body = document.querySelector("body");
const wrapper = document.querySelector("#container");
const entry = document.querySelector("#entry");
const submit = document.querySelector("#submit");
const remove = document.querySelectorAll(".delete");
let toDoArray = [];
console.log(JSON.parse(localStorage.getItem("array")));

class ToDoObject {
  constructor(
    deleteButton,
    container,
    divText,
    upButton,
    downButton,
    buttonContainer,
    todo
  ) {
    this.container = container;
    this.deleteButton = deleteButton;
    this.divText = divText;
    this.upButton = upButton;
    this.downButton = downButton;
    this.buttonContainer = buttonContainer;
    this.todo = todo;
  }
  returnTodo(x) {
    console.log(x);
    return (this.todo = x);
  }
  returnFormTodo(wrapper) {
    this.upButton.textContent = "Up";
    this.downButton.textContent = "Down";
    this.deleteButton.textContent = "Delete";
    this.container.classList.add("todowrapper");
    this.deleteButton.classList.add("delete");
    this.upButton.classList.add("up");
    this.downButton.classList.add("down");
    this.divText.classList.add("text");
    this.buttonContainer.classList.add("button-container");
    console.log(this.container);
    this.divText.append(this.todo);
    this.container.append(this.divText);
    this.buttonContainer.append(this.deleteButton);
    this.buttonContainer.append(this.upButton);
    this.buttonContainer.append(this.downButton);
    this.container.append(this.buttonContainer);
    wrapper.append(this.container);
  }
  returnDisplay() {
    console.log("hi");
    console.log(this.container);
    console.log(this.buttonContainer);
    this.container.style.display = "none";
  }
  returnEvents() {
    this.deleteButton.addEventListener("click", function () {
      this.parentNode.parentNode.style.display = "none";
      toDoArray.splice(
        toDoArray.findIndex(
          (x) => x.todo === this.parentNode.parentNode.children[0].innerHTML
        ),
        1
      );
      toDoArray.findIndex(
        (x) => x.todo === this.parentNode.parentNode.children[0].innerHTML
      );
      localStorage.setItem("array", JSON.stringify(toDoArray));
    });
    this.upButton.addEventListener("click", function () {
      if (
        toDoArray.findIndex(
          (x) => x.todo === this.parentNode.parentNode.children[0].innerHTML
        ) !==
        toDoArray.length - toDoArray.length
      ) {
        toDoArray.splice(
          toDoArray.findIndex(
            (x) => x.todo === this.parentNode.parentNode.children[0].innerHTML
          ) - 1,
          2,
          toDoArray[
            toDoArray.findIndex(
              (x) => x.todo === this.parentNode.parentNode.children[0].innerHTML
            )
          ],
          toDoArray[
            toDoArray.findIndex(
              (x) => x.todo === this.parentNode.parentNode.children[0].innerHTML
            ) - 1
          ]
        );
        this.parentNode.parentNode.insertAdjacentElement(
          "afterend",
          this.parentNode.parentNode.previousElementSibling
        );
        localStorage.setItem("array", JSON.stringify(toDoArray));
      }
    });
    this.downButton.addEventListener("click", function () {
      console.log("this");
      console.log(toDoArray.length - 1);
      if (
        toDoArray.findIndex(
          (x) => x.todo === this.parentNode.parentNode.children[0].innerHTML
        ) !==
        toDoArray.length - 1
      ) {
        toDoArray.splice(
          toDoArray.findIndex(
            (x) => x.todo === this.parentNode.parentNode.children[0].innerHTML
          ),
          2,
          toDoArray[
            toDoArray.findIndex(
              (x) => x.todo === this.parentNode.parentNode.children[0].innerHTML
            ) + 1
          ],
          toDoArray[
            toDoArray.findIndex(
              (x) => x.todo === this.parentNode.parentNode.children[0].innerHTML
            )
          ]
        );
        this.parentNode.parentNode.insertAdjacentElement(
          "beforebegin",
          this.parentNode.parentNode.nextElementSibling
        );
        localStorage.setItem("array", JSON.stringify(toDoArray));
        console.log(JSON.stringify(toDoArray));
      } else {
        console.log("hi");
      }
    });
  }
}

for (let i of JSON.parse(localStorage.getItem("array"))) {
  const free = new ToDoObject(
    document.createElement("button"),
    document.createElement("div"),
    document.createElement("h4"),
    document.createElement("button"),
    document.createElement("button"),
    document.createElement("div"),
    i.todo
  );
  free.returnFormTodo(wrapper);
  free.returnEvents();
  toDoArray.push(free);
}

const todoBlank = new ToDoObject(
  document.createElement("button"),
  document.createElement("div"),
  document.createElement("h3"),
  document.createElement("button"),
  document.createElement("button"),
  document.createElement("div")
);

class Submission {
  static newToDo() {
    if (entry.value !== "") {
      const free = new ToDoObject(
        document.createElement("button"),
        document.createElement("div"),
        document.createElement("h3"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("div")
      );
      free.returnTodo(entry.value);
      free.returnFormTodo(wrapper);
      free.returnEvents();
      toDoArray.push(free);
      localStorage.setItem("array", JSON.stringify(toDoArray));
      console.log(toDoArray);
      entry.value = "";
    } else {
      alert("Entry must not be empty");
    }
  }

  static returnRemove() {
    console.log("hi");
  }
}

submit.addEventListener("click", Submission.newToDo);
window.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.keyCode === 13) {
    Submission.newToDo();
  }
});
