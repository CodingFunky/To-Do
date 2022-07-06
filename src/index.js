import './style.css';

// # is id . is class
const newTitle = document.querySelector('#itemTitle');
const newDes = document.querySelector('#itemDes');
const newDueDate = document.querySelector('#dueDate');
const newPriority = document.querySelector('#priority');
const domHero = document.querySelector('#hero');
const submitBtn = document.querySelector('#submit');
const overlay = document.querySelector('.overlay');
const addBtn = document.querySelector('#addBtn');
const submitCard = document.querySelector('.submitCard');
const projectListDOM = document.querySelector('.project-list')
const projectAddBtn = document.querySelector('#project-addBtn');
const projectAddForm = document.querySelector('.addProject-form');
const todoContainer = document.querySelector('#todo-container')

let activeProject = []
let projectList = []

// Object constructor
function ListItem (title, description, dueDate, priority, projectID) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectID = projectID;
}
function Project (name, isActive) {
    this.name = name;
    this.isActive = true;
    let taskList = [];

    let createDom = function () {
        let projectDOM = document.createElement('div')
        projectDOM.textContent = name
        projectDOM.classList.add('project')
        activeProject = projectDOM;
        projectListDOM.prepend(projectDOM)
        makeActive(projectDOM);
        projectDOM.addEventListener('click', () => {
            makeActive(projectDOM);
            printTask();
        })
    }
    let makeActive = function (projectDOM) {
        let projects = projectListDOM.children;
        for (let i = 0; i < projects.length; i++) {
            projects[i].classList.remove('active')
        }
        isActive = true
        projectDOM.classList.add('active')
    }
    let printTask = function () {
        while (todoContainer.firstChild) {
            todoContainer.removeChild(todoContainer.firstChild)
        }
        for (let i = 0; i < taskList.length; i++) {
            todoContainer.appendChild(taskList[i])
        }
    }
  
    return{createDom, makeActive, printTask, taskList};
}

function displayController(newItem) {
    let itemCard = document.createElement('div');
    itemCard.classList.add('itemCard');

    let title = document.createElement('p');
    title.classList.add('itemTitle');
    title.textContent = (newItem.title);

    let description = document.createElement('p');
    description.classList.add('itemDesc');
    description.textContent = (newItem.description);

    let dueDate = document.createElement('p');
    dueDate.classList.add('itemDueDate');
    dueDate.textContent = (newItem.dueDate);

    let priority = document.createElement('p');
    priority.classList.add('itemPriority');
    priority.textContent = (newItem.priority);

    let deleteBtn = document.createElement('i');
    deleteBtn.classList.add('far', 'fa-trash-alt', 'deleteBtn');

    itemCard.append(title, description, dueDate, priority, deleteBtn);

    todoContainer.appendChild(itemCard);
    activeProject.taskList.push(itemCard)
    // console.log('Nre task list')
    // console.log(activeProject.taskList)
}
submitBtn.addEventListener('click', () => {
    let newItem = new ListItem(newTitle.value, newDes.value, newDueDate.value, newPriority.value);
    displayController(newItem);
    submitCard.classList.remove('active');
    overlay.classList.remove('active');

})
addBtn.addEventListener('click', () => {
    submitCard.classList.add('active');
    overlay.classList.add('active');
})
projectAddBtn.addEventListener('click', () => {
    projectAddForm.classList.add('active');
    projectAddForm.focus();
})
projectAddForm.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        let name = projectAddForm.value;
        let newProject = new Project(name, true);
        projectList.push(newProject);
        newProject.createDom();
        activeProject = newProject
        projectAddForm.classList.remove('active');
        projectAddForm.value = '';
        newProject.printTask();
    }
})



overlay.onclick = function closeOverlay() {
    submitCard.classList.remove('active');
    overlay.classList.remove('active');
  }



let defaultProject = new Project('Default');
projectList.push(defaultProject);
defaultProject.createDom();
activeProject = defaultProject