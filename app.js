const body = document.querySelector('body');
let toDoArray = [];

class SelectEntry {
    constructor(entryForm, submitForm) {
        this.entryForm = entryForm;
        this.submitForm = submitForm;
    }
}

const formEntry = new SelectEntry(document.querySelector('#entry'), document.querySelector('#submit'))

class ToDoObject {
    constructor(container, divText){
        this.container = container;
        this.divText = divText;
    }
}

class ToDoEntry extends extender(SelectEntry, ToDoObject) {
    constructor(entryForm, submitForm, entry, container, divText) {
        super(entryForm, submitForm, container, divText);
        this.entry = entry;
    }
    setDesign(e) {
        this.container = document.createElement('div');
        this.divText = document.createElement('div');
        console.log(this.container)
        if (e.keyCode === 13) {
            console.log('hi')
            toDoArray.push(new SelectEntry(formEntry.entryForm.value, 'five'))
            body.append(this.container)
            console.log(toDoArray)
            this.container.classList.add('todoClass')
            this.container.appendChild(this.divText);
            this.divText.classList.add('todoEntry')
            this.divText.textContent = formEntry.entryForm.value;
            return formEntry.entryForm.value = '';
        }
    }
    get design() {
        return this.setDesign;
    }

}


const todoBlank = new ToDoEntry(formEntry.entryForm, document.createElement('div'), document.createElement('div'));
todoBlank.setDesign

class Buttons {
    constructor(up, down, deleteBtn) {
        this.up = up;
        this.down = down;
        this.deleteBtn = deleteBtn;
    }
}
btn = new Buttons(document.createElement('button'), document.createElement('button'), document.createElement('button'));
console.log(btn)

function newToDo(e) {
    if (e.keyCode === 13 || e.pointerId === 1) {
        if (entry.value !== '') {
            new ToDoEntry(entry.value, document.createElement('div'), document.createElement('div'));
            console.log(btn)
            body.appendChild(ToDoEntry.container);
            container.appendChild(count.divText);
            container.classList.add('todoClass');
            divText.classList.add('todoEntry');
            divText.textContent = count.entry;
            divText.appendChild(btn.up);
            divText.appendChild(btn.down);
            divText.appendChild(btn.deleteBtn);
            btn.deleteBtn.classList.add('deleteClass');
            btn.up.textContent = 'Up';
            btn.down.textContent = 'Down';
            btn.deleteBtn.textContent = 'Delete';
            toDoArray.push(count);
            entry.value = '';
            btn.deleteBtn.addEventListener('click', deleteToDo)
            console.log(toDoArray)
            console.log(btn.setUpText)
            console.log(count.formToDo)
            console.log(count)
        }
        else {
            e.preventDefault()
        }
    }
}

function traverseUp() {
    toDoArray
}

formEntry.entryForm.addEventListener('keypress', todoBlank.setDesign)
