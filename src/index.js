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
const projectAddBtn = document.querySelector('#project-addBtn');
const projectAddForm = document.querySelector('.addProject-form');

let activeProject = "Default";
)
// Object constructor
function ListItem (title, description, dueDate, priority, projectID) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectID = projectID;
}
function Project (title, id) {
    this.title = title;
    this.id = title
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

    domHero.appendChild(itemCard);
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
})
projectAddForm.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        let name = projectAddForm.textContent;
        let newProject = new Project(name);
    }
})
overlay.onclick = function closeOverlay() {
    submitCard.classList.remove('active');
    overlay.classList.remove('active');
  }




  let defaultProject = new Project('Default');