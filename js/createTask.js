const taskList = document.querySelector('.task-list');

const renderTasks = (task) => {
    const statusDone =
        task.status === 'done'
            ? 'task-list__list-item list-item list-item_done'
            : 'task-list__list-item list-item';
    const taskHTML = `
    
    <li class="${statusDone}" id="${task.id}">
        <input type="checkbox" data-action="done" class="task-list__custom-button custom-button">
        <span data-action="edit" class="task-list__task-text task-text task-text_done">${task.text}</span>
        <textarea class="task-list__edit-text edit-text"></textarea>
        <button class="task-list__delete" data-action="delete">
            <svg class="task-list__delete-img delete-img" fill="#d2691e" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"></path>
            </svg>
        </button>
    </li>`;

    taskList.insertAdjacentHTML('beforeend', taskHTML);
};

export default renderTasks;
