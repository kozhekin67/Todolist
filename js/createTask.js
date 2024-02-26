const createNewTask = (taskString) => {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');
    label.dataset.action = 'edit';

    let changeInput = document.createElement('textarea');
    let buttonDelete = document.createElement('button');

    label.textContent = taskString;

    checkBox.type = 'checkbox';
    checkBox.dataset.action = 'done';
    changeInput.dataset.action = 'editTask';

    buttonDelete.innerHTML = `<svg class="task-list__delete-img delete-img" fill="#d2691e" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"/>
    </svg>`;
    buttonDelete.classList.add('task-list__delete');
    buttonDelete.dataset.action = 'delete';
    listItem.className = 'task-list__list-item list-item';

    changeInput.className = 'task-list__edit-text edit-text';
    checkBox.className = 'task-list__custom-button custom-button';
    label.className = 'task-list__task-text task-text task-text_done';

    listItem.append(checkBox);
    listItem.append(label);
    listItem.append(changeInput);
    listItem.append(buttonDelete);

    return listItem;
};

export default createNewTask;
