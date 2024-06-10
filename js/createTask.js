const taskList = document.querySelector('.task-list');

const renderTasks = (task) => {
    const statusDone =
        task.isActive
            ? 'list-item'
            : 'list-item list-item_done';
    const taskHTML = `
    
    <li class="${statusDone}" id="${task.id}">
        <input type="checkbox" data-action="done" class="list-item__custom-button custom-button">
        <span data-action="edit" class="list-item__task-text task-text_done">${task.text}</span>
        <textarea class="list-item__edit-text edit-text"></textarea>
        <button class="list-item__delete" data-action="delete">
            <svg class="list-item__delete-img delete-img" fill="#d2691e" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"></path>
            </svg>
        </button>
    </li>`;

    taskList.insertAdjacentHTML('beforeend', taskHTML);
};

export default renderTasks;
