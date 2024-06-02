import renderTasks from './createTask.js';
//import saveTasksToLocalStorage from './saveLocalStorage.js';
import { showBar, itemsLeft} from './showBarAnditemsLeft.js';

const formGroup = document.querySelector('.form-group');
const taskInput = document.querySelector('.form-group__task-input');
const taskList = document.querySelector('.task-list');
const checkAllcheckbox = document.querySelector('.check-all-task__custom-button');
const filterAllButton = document.querySelector('#filterAll');
const filterActiveButton = document.querySelector('#filterActive');
const filterCompletedButton = document.querySelector('#filterCompleted');
filterAllButton.classList.add('bottom-panel__button_active');

let tasks = [];

const saveTaskList = () => {
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        showBar();
        itemsLeft();
    }
};

saveTaskList ();

window.addEventListener('DOMContentLoaded', saveTaskList);

tasks.forEach((task) => {
    renderTasks(task);
});

const newTask = (event) => {
    event.preventDefault();
    if (taskInput.value.trim() !== '') {
        const checkAllTask = document.querySelector('.check-all-task');
        const taskText = taskInput.value;
        const newTask = {
            id: Date.now(),
            text: taskText,
            status: "active",
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
        const id = Number(listItem.id);
        const task = tasks.find((task) => task.id === id);
        if (event.target.closest('.list-item_done')) {
            task.status = 'done';
        }
        else {
            task.status = 'active';
        }
        //console.log(id);
    }
    itemsLeft();
    saveTasksToLocalStorage();
};

// eslint-disable-next-line no-unused-vars

const checkAllTasks = () => {
    const checkBoxAll = document.querySelectorAll('.custom-button');
        if (checkAllcheckbox.checked === true) {
            checkBoxAll.forEach((checkAll) => checkAll.parentNode.classList.add('list-item_done'));
            tasks.forEach((task) => task.status = "done");
        } else if (checkAllcheckbox.checked === false) {
            checkBoxAll.forEach((checkAll) => checkAll.parentNode.classList.remove('list-item_done'));
            tasks.forEach((task)=> task.status = "active");
        }
    saveTasksToLocalStorage(); 
    itemsLeft();
};

checkAllcheckbox.addEventListener('change', () => checkAllTasks());

//delete Task
const deleteTask = (event) => {
    let listItem = event.target.closest('.task-list__list-item');
    if (event.target.dataset.action === 'delete') {
        listItem.remove();
        console.log(tasks);
        const id = Number(listItem.id);
        tasks = tasks.filter((task) => task.id !== id);
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
        tasks = tasks.filter((task) => task.status !== "done");
    }
    
    showBar();
    itemsLeft();
    saveTasksToLocalStorage();
};

clearButton.onclick = clearAll;

//editATask

const editATask = (event) => {
    if ((event.target.dataset.action === 'edit')) {
        const listItem = event.target.closest('.task-list__list-item');
        const editInput = listItem.querySelector('.task-list__edit-text');
        const label = listItem.querySelector('.task-list__task-text');
        const containsClass = listItem.classList.contains('list-item_edit-mode');
        const id = Number(listItem.id);
        const taskIndex = tasks.findIndex((task) => task.id === id);

        window.addEventListener('dblclick', () => {editInput.focus()});
    
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
                    console.log(taskIndex);
                }
                listItem.classList.remove('list-item_edit-mode');
            }
        saveTasksToLocalStorage();
        });
        listItem.classList.toggle('list-item_edit-mode');
    };
};

taskList.addEventListener('dblclick', (event) => editATask(event));

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const filterState = localStorage.getItem('filterState');

switch (filterState) {
    case 'active':
        (tasks = JSON.parse(localStorage.getItem('tasks'))), filterActiveButton.click();
        break;
    case 'completed':
        (tasks = JSON.parse(localStorage.getItem('tasks'))), filterCompletedButton.click();
        break;
    case 'all':
        (tasks = JSON.parse(localStorage.getItem('tasks'))), filterAllButton.click();
        break;
}
