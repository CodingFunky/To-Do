import './style.css';
import { removeAllChildrenDOM } from './remove_all_child_DOM';

// # is id . is class
const newTitle = document.querySelector('#itemTitle');
const newDes = document.querySelector('#itemDescBox');
const newDueDate = document.querySelector('#dueDate');
const newPriority = document.querySelector('#priority');
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
const taskHeader = document.querySelector('.task-header');
const altAddContainer = document.querySelector('.altAdd-container');

let activeProject = [];
const projectList = [];
let projectListStored = JSON.parse(window.localStorage.getItem('projectList'));
const tasks = [];
const completedTasks = [];

// Object constructor
function ListItem(title, description, dueDate, priority, projectID) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectID = projectID;

    function createTaskListDOM() {
        let itemCard = document.createElement('div');
        itemCard.classList.add('itemCard');

        let completeBtn = document.createElement('div');
        completeBtn.classList.add('completeBtn');
        completeBtn.addEventListener('click', (e) => {
            let index = activeProject.taskList.indexOf(completeBtn.parentElement)
            if (index !== -1) {
                activeProject.taskList.splice(index, 1);
            }
            itemCard.remove();
            completedTasks.push(itemCard);
            activeProject.updateCounter();
        })
        let checkMark = document.createElement('span');
        checkMark.classList.add('checkMark');
        checkMark.innerHTML = ('&#10003;');
        completeBtn.appendChild(checkMark);

        let titleDOM = document.createElement('h4');
        titleDOM.classList.add('itemTitle');
        titleDOM.textContent = (title);

        let descriptionDOM = document.createElement('p');
        descriptionDOM.classList.add('itemDesc');
        descriptionDOM.textContent = (description);

        let dueDateDOM = document.createElement('p');
        dueDateDOM.classList.add('itemDueDate');
        dueDateDOM.textContent = (dueDate);

        let priorityDOM = document.createElement('p');
        priorityDOM.classList.add('itemPriority');
        priorityDOM.textContent = (priority);

        itemCard.append(completeBtn, titleDOM, descriptionDOM, dueDateDOM, priorityDOM);

        // Determines which project to add new task to
        let projectSelected = projectSelector.value;
        if (projectSelected == activeProject.name) {
            todoContainer.appendChild(itemCard);
            activeProject.updateCounter();
        }

        // adds task and updates counter for the right project
        projectList.forEach(project => {
            if (projectSelected == project.name) {
                project.taskList.push(itemCard);
                project.updateCounter();
            }
        });
    }
    return { createTaskListDOM }
}
function Project(name, tasks) {
    this.name = name;
    let taskList = tasks;
    let taskNumDOM = document.createElement('div');
    taskNumDOM.classList.add('taskNum');

    let createProjectListDOM = function (project) {
        let projectDOM = document.createElement('div');
        projectDOM.textContent = name;
        projectDOM.classList.add('project');

        taskNumDOM.textContent = taskList.length;
        projectDOM.appendChild(taskNumDOM);

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
        projectDOM.classList.add('active');
        printTask();
    }

    let printTask = function () {

        taskHeader.textContent = name;

        // removes taskList from in-active projects
        while (todoContainer.firstChild) {
            todoContainer.removeChild(todoContainer.firstChild);
        }

        todoHero.prepend(taskHeader);
        // printing task list from active project
        for (let i = 0; i < taskList.length; i++) {
            todoContainer.appendChild(taskList[i]);
        }

        altAddContainer.addEventListener('click', (e) => {
            submitCard.classList.add('active');
            overlay.classList.add('active');
            removeAllChildrenDOM(projectSelector);
            printOptions();
        });
    }

    let updateCounter = function () {
        taskNumDOM.textContent = taskList.length
    }

    return { createProjectListDOM, makeActive, printTask, updateCounter, taskList, name };
}

function printOptions() {
    for (let i = 0; i < projectList.length; i++) {
        let option = document.createElement('option');
        option.value = projectList[i].name;
        option.innerHTML = projectList[i].name
        projectSelector.appendChild(option);
        newTitle.focus();
        projectSelector.value = activeProject.name;
    }
}
function clearForm() {
    newTitle.value = '';
    newDes.value = '';
}
submitBtn.addEventListener('click', () => {
    let newItem = new ListItem(newTitle.value, newDes.value, newDueDate.value, newPriority.value);
    newItem.createTaskListDOM(newItem);
    submitCard.classList.remove('active');
    overlay.classList.remove('active');
    window.localStorage.setItem('projectList', JSON.stringify(projectList))
    window.localStorage.setItem('taskList', activeProject.taskList.outerHTML);
    console.log(activeProject.taskList)
    console.log(window.localStorage.getItem('taskList'))
    console.log(activeProject.taskList.innerHTML)
    clearForm();
})
addBtn.addEventListener('click', () => {
    submitCard.classList.add('active');
    overlay.classList.add('active');
    removeAllChildrenDOM(projectSelector);
    printOptions();
})
projectAddBtn.addEventListener('click', () => {
    projectAddForm.classList.add('active');
    projectAddForm.focus();
})
projectAddForm.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let name = projectAddForm.value;
        let newProject = new Project(name, tasks);
        projectList.push(newProject);
        window.localStorage.setItem('projectList', JSON.stringify(projectList))
        newProject.createProjectListDOM(newProject);
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

if (!window.localStorage.getItem('projectList')) {
    let defaultProject = new Project('Default', tasks);
    projectList.push(defaultProject);
    activeProject = defaultProject;
    window.localStorage.setItem('projectList', JSON.stringify(projectList))
    projectListStored = JSON.parse(window.localStorage.getItem('projectList'))
    defaultProject.createProjectListDOM(defaultProject);
} else {
    projectListStored.forEach((projectStored) => {
        let project = new Project(projectStored.name, tasks);
        projectList.push(project)

        // console.log(project.taskList)
    })
    projectListStored.forEach((projectStored) => {
        let index = projectListStored.indexOf(projectStored)
        let currentProject = projectList[index];
        currentProject.createProjectListDOM(currentProject);
        // let tasks = JSON.parse(window.localStorage.getItem('taskList'));
        // currentProject.taskList.push(tasks[index])

        // currentProject.createTaskListDOM()
    })

}

// window.localStorage.clear()

// console.log(activeProject.taskList)
// console.log(JSON.parse(window.localStorage.getItem('projectList')))

