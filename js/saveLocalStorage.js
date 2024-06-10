const filterAllButton = document.querySelector('#filterAll');
const filterActiveButton = document.querySelector('#filterActive');
const filterCompletedButton = document.querySelector('#filterCompleted');

export let tasks = [];

const gettingTasks = () => {
    tasks = JSON.parse(localStorage.getItem('tasks'));
};

export const showBar = () => {
    const listItem = document.querySelectorAll('.list-item');
    const checkAllTask = document.querySelector('.check-all-task');
    const bottomPanel = document.querySelector('.bottom-panel');

    if (listItem.length === 0) {
        bottomPanel.classList.remove('bottom-panel_show');
        checkAllTask.classList.toggle('check-all-task_show');
    } else {
        bottomPanel.classList.add('bottom-panel_show');
    }
};

export const itemsLeft = () => {
    const checkAllcheckbox = document.querySelector('.check-all-task__custom-button');
    const numberOfTask = document.querySelector('.number_of_tasks');
    const labelDone = document.querySelectorAll('.list-item_done');
    const labelNotDone = document.querySelectorAll('.list-item:not(.list-item_done)');
    const clear = document.querySelector('.bottom-panel__button_clear');

    numberOfTask.innerHTML = labelNotDone.length;
    checkAllcheckbox.checked = labelNotDone.length === 0;

    labelDone.length !== 0
        ? clear.classList.add('bottom-panel__button_clear_show')
        : clear.classList.remove('bottom-panel__button_clear_show');
};

export const saveTasksToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const saveTaskList = () => {
    if (localStorage.getItem('tasks')) {
        gettingTasks();
        showBar();
        itemsLeft();
    }
};

saveTaskList();

export const saveTaskDone = (listItem, event) => {
    const id = Number(listItem.id);
    const task = tasks.find((task) => task.id === id);
    if (event.target.closest('.list-item_done')) {
        task.isActive = false;
    } else {
        task.isActive = true;
    }
};

export const saveTaskDelete = (listItem) => {
    const id = Number(listItem.id);
    tasks = tasks.filter((task) => task.id !== id);
};

export const saveTaskAllDelete = () => {
    tasks = tasks.filter((task) => task.isActive === true);
};

window.addEventListener('DOMContentLoaded', saveTaskList);

export const filterStateButton = () => {
    const filterState = localStorage.getItem('filterState');
    switch (filterState) {
        case 'active':
            gettingTasks(), filterActiveButton.click();
            break;
        case 'completed':
            gettingTasks(), filterCompletedButton.click();
            break;
        case 'all':
            gettingTasks(), filterAllButton.click();
            break;
    }
};
