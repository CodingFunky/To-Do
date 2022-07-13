export function ListItem (title, description, dueDate, priority, projectID) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectID = projectID;

    function createDOM(newItem) {
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
            activeProject.updateCounter();
        })
        let checkMark = document.createElement('span');
        checkMark.classList.add('checkMark')
        checkMark.innerHTML = ('&#10003;')
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
    
        // todoContainer.appendChild(itemCard);
        // activeProject.taskList.push(itemCard)
    
        let projectSelected = projectSelector.value;
        if (projectSelected == activeProject.name) {
            todoContainer.appendChild(itemCard);
            activeProject.updateCounter();
        }
        projectList.forEach(project => {
            if (projectSelected == project.name) {
                project.taskList.push(itemCard)
                project.updateCounter();
            }
        });
    }
    return {createDOM}
}