/* eslint-disable prefer-destructuring */
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
const transparentOverlay = document.querySelector('#transparent-overlay');
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
const projectArrow = document.querySelector('#project-arrow');
const burgerMenu = document.querySelector('#burger-menu');
const leftSideBar = document.querySelector('.left-sidebar');
const leftSideBarOverlay = document.querySelector('#left-sidebar-overlay');
const notificationBell = document.querySelector('.fa-bell');
const notificationMenu = document.querySelector('.notification-menu');
const notificationOverlay = document.querySelector('#notification-overlay');

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
    );

    // todoContainer.appendChild(itemCard);
    // activeProject.taskList.push(itemCard)

    const projectSelected = projectSelector.value;
    // Add card to DOM if added to active project
    if (projectSelected === activeProject.name) {
      todoContainer.appendChild(itemCard);
      activeProject.updateCounter();
    }

    // adds to correct projects tasklist
    projectList.forEach((project) => {
      if (projectSelected === project.name) {
        console.log('this');
        project.taskList.push(this);
        project.updateCounter();
      }
    });
  }
  return { createDOM };
}
function Project(name) {
  this.name = name;
  const self = this;
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
    console.log('self');
    console.log(self);

    for (let i = 0; i < taskList.length; i++) {
      this.taskList.forEach((task) => {
        console.log(task);
        console.log('task');
      });
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

  const createDOM = function (project) {
    const projectDOM = document.createElement('li');
    projectDOM.textContent = name;
    projectDOM.classList.add('project');

    taskNumDOM.textContent = taskList.length;
    projectDOM.appendChild(taskNumDOM);

    const dropMenuBtn = document.createElement('div');
    dropMenuBtn.classList.add('dropMenuBtn');
    dropMenuBtn.textContent = '...';

    const dropMenu = document.createElement('div');
    dropMenu.classList.add('dropMenu');

    // Edit Button
    const editBtn = document.createElement('div');
    editBtn.classList.add('project-edit-btn');

    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid', 'fa-pen');

    const editText = document.createElement('div');
    editText.classList.add('project-edit-text');
    editText.textContent = 'Edit Project';

    editBtn.addEventListener('click', () => {
      transparentOverlay.classList.remove('active');
      dropMenu.classList.remove('active');

      const editForm = document.createElement('input');
      editForm.classList.add('edit-form');
      editForm.classList.add('active');
      editForm.type = 'text';
      editForm.name = 'editForm';
      editForm.maxLength = '18';

      projectDOM.textContent = '';
      projectDOM.prepend(editForm);
      editForm.focus();
      editForm.value = activeProject.name;

      editForm.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          if (e.target.value) {
            editForm.classList.remove('active');
            projectDOM.textContent = e.target.value;
            projectDOM.append(taskNumDOM, dropMenuBtn, dropMenu);
            activeProject.name = e.target.value;
            localStorage.setItem('projectList', JSON.stringify(projectList));
            localStorage.setItem('activeProject', JSON.stringify(activeProject));
          } else {
            projectDOM.textContent = activeProject.name;
            projectDOM.append(taskNumDOM, dropMenuBtn, dropMenu);
          }
        }
      });
      editForm.addEventListener('focusout', () => {
        editForm.classList.remove('active');
        projectDOM.textContent = activeProject.name;
        projectDOM.append(taskNumDOM, dropMenuBtn, dropMenu);
      });
    });

    editBtn.append(editIcon, editText);

    // Archive Button
    const archiveContainer = document.createElement('div');
    archiveContainer.classList.add('archive-container');

    const archiveIcon = document.createElement('i');
    archiveIcon.classList.add('fa-solid', 'fa-box-archive');

    const dropMenuArch = document.createElement('div');
    dropMenuArch.classList.add('dropMenuArch');
    dropMenuArch.textContent = 'Archive';

    archiveContainer.append(archiveIcon, dropMenuArch);

    // Delete button
    const dropMenuDelContainer = document.createElement('div');
    dropMenuDelContainer.classList.add('dropMenuDelContainer');

    const dropMenuDelIcon = document.createElement('i');
    dropMenuDelIcon.classList.add('fa-solid', 'fa-trash-can');

    const dropMenuDel = document.createElement('div');
    dropMenuDel.classList.add('dropMenuDel');
    dropMenuDel.textContent = 'Delete project';
    dropMenuDel.addEventListener('click', () => {
      // projectDOM.remove();
      transparentOverlay.classList.remove('active');
      projectList.forEach((proj) => {
        if (proj.name === projectDOM.firstChild.textContent) {
          const index = projectList.indexOf(proj);
          projectList.splice(index, 1);
        }
      });
      localStorage.setItem('projectList', JSON.stringify(projectList));
      projectDOM.remove();
    });
    dropMenuDelContainer.append(dropMenuDelIcon, dropMenuDel);

    dropMenu.append(editBtn, archiveContainer, dropMenuDelContainer);
    projectDOM.append(dropMenuBtn, dropMenu);
    dropMenuBtn.addEventListener('click', () => {
      dropMenu.classList.toggle('active');
      transparentOverlay.classList.toggle('active');
    });

    projectListDOM.prepend(projectDOM);
    makeActive(projectDOM, project);
    projectDOM.addEventListener('click', () => {
      makeActive(projectDOM, this);
      localStorage.setItem('activeProject', JSON.stringify(activeProject));
    });
  };

  const updateCounter = function () {
    // taskNumDOM.textContent = activeProject.length;
    taskNumDOM.textContent = taskList.length;
  };

  return {
    makeActive,
    printTask,
    createDOM,
    updateCounter,
    taskList,
    name,
  };
}

function clearForm() {
  newTitle.value = '';
  newDes.value = '';
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getNewBOTD() {
  fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/')
    .then((res) => res.json())
    .then((data) => {
      const index = getRandomInt(data.length);
      const burger = data[index].name;
      console.log(burger);
      document.querySelector('.notification-text').textContent = burger;
    });
}
burgerMenu.addEventListener('click', () => {
  leftSideBar.classList.toggle('active');
  leftSideBarOverlay.classList.toggle('active');
});
notificationBell.addEventListener('click', () => {
  getNewBOTD();
  notificationMenu.classList.toggle('active');
  notificationOverlay.classList.toggle('active');
});
leftSideBarOverlay.addEventListener('click', () => {
  leftSideBar.classList.remove('active');
  leftSideBarOverlay.classList.remove('active');
});
submitBtn.addEventListener('click', () => {
  const newItem = new ListItem(
    newTitle.value,
    newDes.value,
    newDueDate.value,
    newPriority.value,
  );
  newItem.createDOM(newItem);
  // const projectSelected = projectSelector.value;
  // projectList.forEach((project) => {
  //   if (projectSelected === project.name) {
  //     project.taskList.push(newItem);
  //     project.updateCounter();
  //   }
  // });
  submitCard.classList.remove('active');
  overlay.classList.remove('active');
  clearForm();
  localStorage.setItem(activeProject.name, JSON.stringify(activeProject.taskList));
  // console.log('activeProject.name');
  // console.log(JSON.parse(localStorage.getItem(activeProject.name)));
  // console.log('activeproject taskList');
  // console.log(activeProject.taskList);
});
projectArrow.addEventListener('click', () => {
  const projectLi = projectListDOM.children;
  Array.from(projectLi).forEach((project) => {
    project.classList.toggle('hide');
  });
  projectArrow.classList.toggle('active');
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
    if (e.target.value) {
      const name = projectAddForm.value;
      const newProject = new Project(name, true);
      projectList.push(newProject);
      newProject.createDOM(newProject);
      activeProject = newProject;
      localStorage.setItem('projectList', JSON.stringify(projectList));
      localStorage.setItem('activeProject', JSON.stringify(activeProject));
      projectAddForm.classList.remove('active');
      projectAddForm.value = '';
      newProject.printTask();
    }
  }
});

altAddContainer.addEventListener('click', () => {
  submitCard.classList.add('active');
  overlay.classList.add('active');
  removeAllChildrenDOM(projectSelector);
  printOptions();
});

notificationOverlay.addEventListener('click', () => {
  notificationOverlay.classList.remove('active');
  notificationMenu.classList.remove('active');
});
transparentOverlay.addEventListener('click', () => {
  const dropMenu = document.querySelector('.dropMenu.active');
  dropMenu.classList.remove('active');
  transparentOverlay.classList.remove('active');
});

overlay.onclick = function closeOverlay() {
  submitCard.classList.remove('active');
  overlay.classList.remove('active');
  clearForm();
};

// localStorage.clear();

if (!localStorage.getItem('projectList')) {
  const defaultProject = new Project('Default');
  projectList.push(defaultProject);
  activeProject = defaultProject;
  defaultProject.createDOM(defaultProject);
  localStorage.setItem('projectList', JSON.stringify(projectList));
  localStorage.setItem('activeProject', JSON.stringify(activeProject));
  projectList.forEach((project) => {
    localStorage.setItem(project.name, JSON.stringify(project.taskList));
  });
} else {
  // Remake all project objects push them to list and make DOM
  const projectListStored = JSON.parse(localStorage.getItem('projectList'));
  projectListStored.forEach((project) => {
    const restoredProject = new Project(project.name);
    projectList.push(restoredProject);
    // const restoredTask = JSON.parse(localStorage.getItem(restoredProject.name));
    // restoredProject.taskList = restoredTask;
    // console.log('restoredTask');
    // console.log(restoredTask);
    // console.log(restoredTask[0]);
    restoredProject.createDOM();
  });
  // Restores activeProject
  projectList.forEach((project) => {
    const storedActive = JSON.parse(localStorage.getItem('activeProject'));
    if (project.name === storedActive.name) {
      activeProject = project;
      const projects = projectListDOM.children;
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].firstChild.textContent === activeProject.name) {
          const projectDOM = projects[i];
          activeProject.makeActive(projectDOM, activeProject);
        }
      }
    }
  });
  // activeProject = projectList[0];
}
// const defaultProject = new Project('Default');
// projectList.push(defaultProject);
// activeProject = defaultProject;
// defaultProject.createDOM(defaultProject);

// Features to add
//     Menus that roll out when clicking projects. using animations
//     Make Site Responsive
//     Drop-Down Menus
