import createNewTask from './createTask.js';
import saveTasksToLocalStorage from './saveLocalStorage.js';
import { showBar, itemsLeft } from './showBarAnditemsLeft.js';

const formGroup = document.querySelector('.form-group');
const taskInput = document.querySelector('.form-group__task-input');
const taskList = document.querySelector('.task-list');
const checkAllcheckbox = document.querySelector('.check-all-task__custom-button');
const filterAllButton = document.querySelector('#filterAll');
const filterActiveButton = document.querySelector('#filterActive');
const filterCompletedButton = document.querySelector('#filterCompleted');
filterAllButton.classList.add('bottom-panel__button_active');

const newTask = (event) => {
    event.preventDefault();

    if (taskInput.value.trim() !== '') {
        let checkAllTask = document.querySelector('.check-all-task');
        let listItem = createNewTask(taskInput.value);
        taskList.prepend(listItem);
        checkAllTask.classList.add('check-all-task_show');
        editButton(listItem);
        taskInput.value = '';
        showBar();
        itemsLeft();
    }
    saveTasksToLocalStorage();
};

formGroup.addEventListener('submit', (event) => newTask(event));

//done Task

taskList.addEventListener('click', (event) => doneTask(event));

const doneTask = (event) => {
    if (event.target.dataset.action === 'done') {
        let listItem = event.target.closest('.list-item');
        listItem.classList.toggle('list-item_done');
    }
    itemsLeft();
    saveTasksToLocalStorage();
};

// eslint-disable-next-line no-unused-vars

const checkAllTasks = (event) => {
    const checkBoxAll = document.querySelectorAll('.custom-button');
    if (checkBoxAll) {
        if (event.checked === true) {
            checkBoxAll.forEach((checkAll) => checkAll.parentNode.classList.add('list-item_done'));
        } else if (event.checked === false) {
            checkBoxAll.forEach((checkAll) =>
                checkAll.parentNode.classList.remove('list-item_done'),
            );
        }
    }
    itemsLeft();
    saveTasksToLocalStorage();
};

checkAllcheckbox.addEventListener('change', (event) => checkAllTasks(checkAllcheckbox));

//delete Task
const deleteTask = (event) => {
    if (event.target.dataset.action === 'delete') {
        let listItem = event.target.closest('.task-list__list-item');
        listItem.remove();
    }
    itemsLeft();
    showBar();
    saveTasksToLocalStorage();
};

taskList.addEventListener('click', (event) => deleteTask(event));

//filterAll

const filterAll = () => {
    let listItem = document.querySelector('.task-list');

    if (listItem.children.length > 0) {
        listItem.classList.remove('task-list_show-completed-tasks');
        listItem.classList.remove('task-list_show-active-tasks');
        filterAllButton.classList.add('bottom-panel__button_active');
        filterActiveButton.classList.remove('bottom-panel__button_active');
        filterCompletedButton.classList.remove('bottom-panel__button_active');
        localStorage.setItem('filterState', 'all');
    }
};

filterAllButton.onclick = filterAll;

//filterActive
const filterActive = () => {
    let listItem = document.querySelector('.task-list');

    if (listItem.children.length > 0) {
        listItem.classList.remove('task-list_show-completed-tasks');
        listItem.classList.add('task-list_show-active-tasks');
        filterAllButton.classList.remove('bottom-panel__button_active');
        filterActiveButton.classList.add('bottom-panel__button_active');
        filterCompletedButton.classList.remove('bottom-panel__button_active');
        localStorage.setItem('filterState', 'active');
    }
};

filterActiveButton.onclick = filterActive;

//filterCompleted
const filterCompleted = () => {
    let listItem = document.querySelector('.task-list');

    if (listItem.children.length > 0) {
        listItem.classList.add('task-list_show-completed-tasks');
        listItem.classList.remove('task-list_show-active-tasks');
        filterAllButton.classList.remove('bottom-panel__button_active');
        filterActiveButton.classList.remove('bottom-panel__button_active');
        filterCompletedButton.classList.add('bottom-panel__button_active');
        localStorage.setItem('filterState', 'completed');
    }
};

filterCompletedButton.onclick = filterCompleted;

//clearAllTask
const clearButton = document.querySelector('.bottom-panel__button_clear');

const clearAll = () => {
    let listItem = document.querySelectorAll('.list-item_done');
    if (listItem) {
        listItem.forEach((task) => task.remove());
    }
    showBar();
    itemsLeft();
    saveTasksToLocalStorage();
};

clearButton.onclick = clearAll;

//editATask

const editATask = function () {
    let listItem = this.parentNode;
    let editInput = listItem.querySelector('textarea');
    let label = listItem.querySelector('.task-list__task-text');
    let containsClass = listItem.classList.contains('list-item_edit-mode');
    window.addEventListener('dblclick', function () {
        editInput.focus();
    });

    if (containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }

    window.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            listItem.classList.remove('list-item_edit-mode');
            label.innerText = editInput.value;
        }
    });

    window.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            if (editInput.value === '') {
                listItem.remove();
                showBar();
                itemsLeft();
            } else {
                label.innerText = editInput.value;
            }
            listItem.classList.remove('list-item_edit-mode');
        }
    });

    window.addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
            listItem.classList.remove('list-item_edit-mode');
            editInput.value = label.innerText;
        }
    });

    window.addEventListener('click', function (event) {
        if (event.target !== editInput) {
            if (editInput.value === '') {
                listItem.remove();
                showBar();
                itemsLeft();
            } else {
                label.innerText = editInput.value;
            }
            listItem.classList.remove('list-item_edit-mode');
        }
    });

    listItem.classList.toggle('list-item_edit-mode');
};

const editButton = (taskListItem) => {
    let editing = taskListItem.querySelector('.task-list__task-text');
    editing.ondblclick = editATask;
};

const saveTaskList = () => {
    if (localStorage.getItem('tasks')) {
        taskList.innerHTML = localStorage.getItem('tasks');
        showBar();
        itemsLeft();
        const taskItems = document.querySelectorAll('.task-list__list-item');
        taskItems.forEach((taskItem) => {
            editButton(taskItem);
        });
    }
};
window.addEventListener('DOMContentLoaded', saveTaskList);
