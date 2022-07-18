/* eslint-disable func-names */
/* eslint-disable no-plusplus */
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
const completedTasks = [];

function printOptions() {
  for (let i = 0; i < projectList.length; i++) {
    const option = document.createElement('option');
    option.value = projectList[i].name;
    option.innerHTML = projectList[i].name;
    projectSelector.appendChild(option);
    newTitle.focus();
    projectSelector.value = activeProject.name;
  }
}

function ListItem(title, description, dueDate, priority, projectID) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.projectID = projectID;

  function createDOM() {
    const itemCard = document.createElement('div');
    itemCard.classList.add('itemCard');

    const completeBtn = document.createElement('div');
    completeBtn.classList.add('completeBtn');
    completeBtn.addEventListener('click', () => {
      const index = activeProject.taskList.indexOf(completeBtn.parentElement);
      if (index !== -1) {
        activeProject.taskList.splice(index, 1);
      }
      itemCard.remove();
      completedTasks.push(itemCard);
      activeProject.updateCounter();
    });
    const checkMark = document.createElement('span');
    checkMark.classList.add('checkMark');
    checkMark.innerHTML = '&#10003;';
    completeBtn.appendChild(checkMark);

    const titleDOM = document.createElement('h4');
    titleDOM.classList.add('itemTitle');
    titleDOM.textContent = title;

    const descriptionDOM = document.createElement('p');
    descriptionDOM.classList.add('itemDesc');
    descriptionDOM.textContent = description;

    const dueDateDOM = document.createElement('p');
    dueDateDOM.classList.add('itemDueDate');
    dueDateDOM.textContent = dueDate;

    const priorityDOM = document.createElement('p');
    priorityDOM.classList.add('itemPriority');
    priorityDOM.textContent = priority;

    itemCard.append(
      completeBtn,
      titleDOM,
      descriptionDOM,
      dueDateDOM,
      priorityDOM,
      projectID,
    );

    // todoContainer.appendChild(itemCard);
    // activeProject.taskList.push(itemCard)

    const projectSelected = projectSelector.value;
    if (projectSelected === activeProject.name) {
      todoContainer.appendChild(itemCard);
      activeProject.updateCounter();
    }
    projectList.forEach((project) => {
      if (projectSelected === project.name) {
        project.taskList.push(itemCard);
        project.updateCounter();
      }
    });
  }
  return { createDOM };
}
function Project(name) {
  this.name = name;
  const taskList = [];
  const taskNumDOM = document.createElement('div');
  taskNumDOM.classList.add('taskNum');

  const removeTasksDOM = function () {
    while (todoContainer.firstChild) {
      todoContainer.removeChild(todoContainer.firstChild);
    }
  };
  const printTask = function () {
    removeTasksDOM();

    taskHeader.textContent = name;
    todoHero.prepend(taskHeader);

    // printing task list from active project
    for (let i = 0; i < taskList.length; i++) {
      todoContainer.appendChild(taskList[i]);
    }
  };

  const makeActive = function (projectDOM, project) {
    const projects = projectListDOM.children;
    // remove active status from other projects
    for (let i = 0; i < projects.length; i++) {
      projects[i].classList.remove('active');
    }
    activeProject = project;
    projectDOM.classList.add('active');
    printTask();
  };

  const createDom = function (project) {
    const projectDOM = document.createElement('div');
    projectDOM.textContent = name;
    projectDOM.classList.add('project');

    taskNumDOM.textContent = taskList.length;
    projectDOM.appendChild(taskNumDOM);

    projectListDOM.prepend(projectDOM);
    makeActive(projectDOM, project);
    projectDOM.addEventListener('click', () => {
      makeActive(projectDOM, project);
    });
  };

  const updateCounter = function () {
    // taskNumDOM.textContent = activeProject.length;
    taskNumDOM.textContent = taskList.length;
  };

  return {
    createDom,
    makeActive,
    printTask,
    updateCounter,
    taskList,
    name,
  };
}

function clearForm() {
  newTitle.value = '';
  newDes.value = '';
}

submitBtn.addEventListener('click', () => {
  const newItem = new ListItem(
    newTitle.value,
    newDes.value,
    newDueDate.value,
    newPriority.value,
  );
  newItem.createDOM(newItem);
  submitCard.classList.remove('active');
  overlay.classList.remove('active');
  clearForm();
});

addBtn.addEventListener('click', () => {
  submitCard.classList.add('active');
  overlay.classList.add('active');
  removeAllChildrenDOM(projectSelector);
  printOptions();
});

projectAddBtn.addEventListener('click', () => {
  projectAddForm.classList.add('active');
  projectAddForm.focus();
});

projectAddForm.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const name = projectAddForm.value;
    const newProject = new Project(name, true);
    projectList.push(newProject);
    newProject.createDom(newProject);
    activeProject = newProject;
    projectAddForm.classList.remove('active');
    projectAddForm.value = '';
    newProject.printTask();
  }
});

altAddContainer.addEventListener('click', () => {
  submitCard.classList.add('active');
  overlay.classList.add('active');
  removeAllChildrenDOM(projectSelector);
  printOptions();
});

overlay.onclick = function closeOverlay() {
  submitCard.classList.remove('active');
  overlay.classList.remove('active');
  clearForm();
};

const defaultProject = new Project('Default');
projectList.push(defaultProject);
activeProject = defaultProject;
defaultProject.createDom(defaultProject);

// Features to add
//     Menus that roll out when clicking projects. using animations
//     Make Site Responsive
//     Drop-Down Menus