import './style.css';

// # is id . is class
const newTitle = document.querySelector('#itemTitle')
const newDes = document.querySelector('#itemDes')
const newDueDate = document.querySelector('#dueDate')
const newPriority = document.querySelector('#priority')
const domHero = document.querySelector('#hero')
const submitBtn = document.querySelector('#submit')
const overlay = document.querySelector('.overlay')
const addBtn = document.querySelector('#addBtn')
const submitCard = document.querySelector('.submitCard');

// Object constructor
function ListItem (title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
}
function displayController(newItem) {
    let itemCard = document.createElement('div');
    itemCard.classList.add('itemCard')

    let title = document.createElement('p')
    title.classList.add('itemTitle')
    title.textContent = (newItem.title)

    let description = document.createElement('p')
    description.classList.add('itemDesc');
    description.textContent = (newItem.description)

    let dueDate = document.createElement('p')
    dueDate.classList.add('itemDueDate')
    dueDate.textContent = (newItem.dueDate)

    let priority = document.createElement('p')
    priority.classList.add('itemPriority')
    priority.textContent = (newItem.priority)

    itemCard.append(title, description, dueDate, priority)

    domHero.appendChild(itemCard)
}
submitBtn.addEventListener('click', () => {
    let newItem = new ListItem(newTitle.value, newDes.value, newDueDate.value, newPriority.value)
    displayController(newItem);
    submitCard.classList.remove('active')
    overlay.classList.remove('active')
})
addBtn.addEventListener('click', () => {
    submitCard.classList.add('active')
    overlay.classList.add('active')
})
overlay.onclick = function closeOverlay() {
    submitCard.classList.remove('active');
    overlay.classList.remove('active');
  }