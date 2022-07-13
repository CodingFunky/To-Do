import _ from 'lodash';
import './style.css';
import { removeAllChildrenDOM } from './remove_all_child_DOM';

// # is id . is class
const newTitle = document.querySelector('#itemTitle');
const newDes = document.querySelector('#itemDescBox');
const newDueDate = document.querySelector('#dueDate');
const newPriority = document.querySelector('#priority');
const domHero = document.querySelector('#hero');
const submitBtn = document.querySelector('#submit');
const overlay = document.querySelector('.overlay');
const addBtn = document.querySelector('#addBtn');
const submitCard = document.querySelector('.submitCard');
const projectListDOM = document.querySelector('.project-list');
const projectAddBtn = document.querySelector('#project-addBtn');
const projectAddForm = document.querySelector('.addProject-form');
const todoContainer = document.querySelector('#todo-container');
const projectSelector = document.querySelector('#project-selector');
const todoHero = document.querySelector('#todo-hero');


let activeProject = []
let projectList = []
let completedTasks = []

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
    let self = this;

    let createDom = function (project) {
        let projectDOM = document.createElement('div');
        projectDOM.textContent = name;
        projectDOM.classList.add('project');
        projectListDOM.prepend(projectDOM);
        makeActive(projectDOM, project);
        projectDOM.addEventListener('click', () => {
            makeActive(projectDOM, project);
        })
    }
    let makeActive = function (projectDOM, project) {
        let projects = projectListDOM.children;
        for (let i = 0; i < projects.length; i++) {
            projects[i].classList.remove('active');
        }
        activeProject = project;
        isActive = true;
        projectDOM.classList.add('active');
        printTask();
    }
    let printTask = function () {
        let taskHeader = document.createElement('div');
        taskHeader.textContent = name;
        taskHeader.classList.add('task-header');
        while (todoContainer.firstChild) {
            todoContainer.removeChild(todoContainer.firstChild);
        }
        // prepending AFTER elements are removed
        todoHero.prepend(taskHeader);
        // printing task list from active project
        for (let i = 0; i < taskList.length; i++) {
            todoContainer.appendChild(taskList[i]);
        }
        let altAddContainer = document.createElement('div')
        altAddContainer.classList.add('altAdd-container');

        let plusSign = document.createElement('div')
        plusSign.classList.add('plus-sign')
        plusSign.innerHTML = ('&#43;')
        let altAddBtn = document.createElement('div')
        altAddBtn.classList.add('altAddBtn');
        altAddBtn.textContent = ('Add Task')
        altAddContainer.append(plusSign, altAddBtn)
        todoHero.append(altAddContainer);
        altAddContainer.addEventListener('click', (e) => {
            submitCard.classList.add('active');
            overlay.classList.add('active');
            removeAllChildrenDOM(projectSelector);
            for (let i = 0; i < projectList.length; i++) {
                let option = document.createElement('option');
                option.value = projectList[i].name;
                option.innerHTML = projectList[i].name
                projectSelector.appendChild(option);
                newTitle.focus();
            }
        });
    }
  
    return{createDom, makeActive, printTask, taskList, name, isActive};
}

function displayController(newItem) {
    let itemCard = document.createElement('div');
    itemCard.classList.add('itemCard');

    let completeBtn = document.createElement('div')
    completeBtn.classList.add('completeBtn')
    completeBtn.addEventListener('click', (e) => {
        let index = activeProject.taskList.indexOf(completeBtn.parentElement)
        if (index !== -1) {
            activeProject.taskList.splice(index, 1);
        }
        itemCard.remove();
        completedTasks.push(itemCard)
    })
    let checkMark = document.createElement('span');
    checkMark.classList.add('checkMark')
    checkMark.innerHTML = ('&#10003;')
    completeBtn.appendChild(checkMark);
    let title = document.createElement('h4');
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
    deleteBtn.addEventListener('click', (e) => {
        let index = activeProject.taskList.indexOf(deleteBtn.parentElement)
        if (index !== -1) {
            activeProject.taskList.splice(index, 1);
        }
        itemCard.remove();

    })

    itemCard.append(completeBtn, title, description, dueDate, priority, deleteBtn);

    // todoContainer.appendChild(itemCard);
    // activeProject.taskList.push(itemCard)

    let projectSelected = projectSelector.value;
    if (projectSelected == activeProject.name) {
        todoContainer.appendChild(itemCard);
    }
    projectList.forEach(project => {
        if (projectSelected == project.name) {
            project.taskList.push(itemCard)
        }
    });
}

function clearForm() {
    newTitle.value = '';
    newDes.value = '';
}
submitBtn.addEventListener('click', () => {
    let newItem = new ListItem(newTitle.value, newDes.value, newDueDate.value, newPriority.value);
    displayController(newItem);
    submitCard.classList.remove('active');
    overlay.classList.remove('active');
    clearForm();
})
addBtn.addEventListener('click', () => {
    submitCard.classList.add('active');
    overlay.classList.add('active');
    removeAllChildrenDOM(projectSelector);
    for (let i = 0; i < projectList.length; i++) {
        let option = document.createElement('option');
        option.value = projectList[i].name;
        option.innerHTML = projectList[i].name
        projectSelector.appendChild(option);
        newTitle.focus();
    }
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
        newProject.createDom(newProject);
        activeProject = newProject;
        projectAddForm.classList.remove('active');
        projectAddForm.value = '';
        newProject.printTask();
    }
})
overlay.onclick = function closeOverlay() {
    submitCard.classList.remove('active');
    overlay.classList.remove('active');
    clearForm();
  }


let defaultProject = new Project('Default');
projectList.push(defaultProject);
activeProject = defaultProject;
defaultProject.createDom(defaultProject);

