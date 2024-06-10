import renderTasks from './createTask.js';
import {
    tasks,
    saveTasksToLocalStorage,
    showBar,
    itemsLeft,
    saveTaskDelete,
    saveTaskAllDelete,
    saveTaskDone,
    filterStateButton,
} from './saveLocalStorage.js';

const formGroup = document.querySelector('.form-group');
const taskInput = document.querySelector('.form-group__task-input');
const taskList = document.querySelector('.task-list');
const checkAllcheckbox = document.querySelector('.check-all-task__custom-button');
const filterAllButton = document.querySelector('#filterAll');
const filterActiveButton = document.querySelector('#filterActive');
const filterCompletedButton = document.querySelector('#filterCompleted');
filterAllButton.classList.add('bottom-panel__button_active');

tasks.forEach((task) => renderTasks(task));

const newTask = (event) => {
    event.preventDefault();
    if (taskInput.value.trim() !== '') {
        const checkAllTask = document.querySelector('.check-all-task');
        const taskText = taskInput.value;
        const newTask = {
            id: Date.now(),
            text: taskText,
            isActive: true,
        };
        renderTasks(newTask);
        tasks.push(newTask);
        checkAllTask.classList.add('check-all-task_show');
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
        saveTaskDone(listItem, event);
    }
    itemsLeft();
    saveTasksToLocalStorage();
};

const checkAllTasks = () => {
    const checkBoxAll = document.querySelectorAll('.custom-button');
    if (checkAllcheckbox.checked) {
        checkBoxAll.forEach((checkAll) => checkAll.parentNode.classList.add('list-item_done'));
        tasks.forEach((task) => (task.isActive = false));
    } else {
        checkBoxAll.forEach((checkAll) => checkAll.parentNode.classList.remove('list-item_done'));
        tasks.forEach((task) => (task.isActive = true));
    }
    saveTasksToLocalStorage();
    itemsLeft();
};

checkAllcheckbox.addEventListener('change', () => checkAllTasks());

//delete Task
const deleteTask = (event) => {
    let listItem = event.target.closest('.list-item');
    if (event.target.dataset.action === 'delete') {
        listItem.remove();
        saveTaskDelete(listItem);
    }
    itemsLeft();
    showBar();
    saveTasksToLocalStorage();
};

taskList.addEventListener('click', (event) => deleteTask(event));

//filtres
const availabilityOfTasks = taskList.children.length > 0;
//filterAll

const filterAll = () => {
    if (availabilityOfTasks) {
        taskList.classList.remove('task-list_show-completed-tasks');
        taskList.classList.remove('task-list_show-active-tasks');
        filterAllButton.classList.add('bottom-panel__button_active');
        filterActiveButton.classList.remove('bottom-panel__button_active');
        filterCompletedButton.classList.remove('bottom-panel__button_active');
        localStorage.setItem('filterState', 'all');
    }
};

filterAllButton.onclick = filterAll;

//filterActive
const filterActive = () => {
    if (availabilityOfTasks) {
        taskList.classList.remove('task-list_show-completed-tasks');
        taskList.classList.add('task-list_show-active-tasks');
        filterAllButton.classList.remove('bottom-panel__button_active');
        filterActiveButton.classList.add('bottom-panel__button_active');
        filterCompletedButton.classList.remove('bottom-panel__button_active');
        localStorage.setItem('filterState', 'active');
    }
};

filterActiveButton.onclick = filterActive;

//filterCompleted
const filterCompleted = () => {
    if (availabilityOfTasks) {
        taskList.classList.add('task-list_show-completed-tasks');
        taskList.classList.remove('task-list_show-active-tasks');
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
        saveTaskAllDelete();
    }
    showBar();
    itemsLeft();
    saveTasksToLocalStorage();
};

clearButton.onclick = clearAll;

//editATask

const editATask = (event) => {
    if (event.target.dataset.action === 'edit') {
        const listItem = event.target.closest('.list-item');
        const editInput = listItem.querySelector('.list-item__edit-text');
        const label = listItem.querySelector('.list-item__task-text');
        const containsClass = listItem.classList.contains('list-item_edit-mode');
        const id = Number(listItem.id);
        const taskIndex = tasks.findIndex((task) => task.id === id);

        window.addEventListener('dblclick', () => editInput.focus());

        if (containsClass) {
            label.innerText = editInput.value;
        } else {
            editInput.value = label.innerText;
        }

        window.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                if (editInput.value === '') {
                    listItem.remove();
                    showBar();
                    itemsLeft();
                    tasks = tasks.filter((task) => task.id !== id);
                } else {
                    label.innerText = editInput.value;
                    listItem.classList.remove('list-item_edit-mode');
                    if (taskIndex !== -1) {
                        tasks[taskIndex].text = editInput.value;
                    }
                }
            }
            saveTasksToLocalStorage();
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
                    tasks = tasks.filter((task) => task.id !== id);
                } else {
                    label.innerText = editInput.value;
                    listItem.classList.remove('list-item_edit-mode');
                    if (taskIndex !== -1) {
                        tasks[taskIndex].text = editInput.value;
                    }
                }
                listItem.classList.remove('list-item_edit-mode');
            }
            saveTasksToLocalStorage();
        });
        listItem.classList.toggle('list-item_edit-mode');
    }
};

taskList.addEventListener('dblclick', (event) => editATask(event));

filterStateButton();
