/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/createTask.js":
/*!**************************!*\
  !*** ./js/createTask.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTasks);


/***/ }),

/***/ "./js/saveLocalStorage.js":
/*!********************************!*\
  !*** ./js/saveLocalStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterStateButton: () => (/* binding */ filterStateButton),
/* harmony export */   itemsLeft: () => (/* binding */ itemsLeft),
/* harmony export */   saveTaskAllDelete: () => (/* binding */ saveTaskAllDelete),
/* harmony export */   saveTaskDelete: () => (/* binding */ saveTaskDelete),
/* harmony export */   saveTaskDone: () => (/* binding */ saveTaskDone),
/* harmony export */   saveTaskList: () => (/* binding */ saveTaskList),
/* harmony export */   saveTasksToLocalStorage: () => (/* binding */ saveTasksToLocalStorage),
/* harmony export */   showBar: () => (/* binding */ showBar),
/* harmony export */   tasks: () => (/* binding */ tasks)
/* harmony export */ });
const filterAllButton = document.querySelector('#filterAll');
const filterActiveButton = document.querySelector('#filterActive');
const filterCompletedButton = document.querySelector('#filterCompleted');

let tasks = [];

const gettingTasks = () => (tasks = JSON.parse(localStorage.getItem('tasks')));

const showBar = () => {
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

const itemsLeft = () => {
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

const saveTasksToLocalStorage = () => localStorage.setItem('tasks', JSON.stringify(tasks));

const saveTaskList = () => {
    if (localStorage.getItem('tasks')) {
        gettingTasks();
        showBar();
        itemsLeft();
    }
};

saveTaskList();

const saveTaskDone = (listItem, event) => {
    const id = Number(listItem.id);
    const task = tasks.find((task) => task.id === id);
    if (event.target.closest('.list-item_done')) {
        task.isActive = false;
    } else {
        task.isActive = true;
    }
};

const saveTaskDelete = (listItem) => {
    const id = Number(listItem.id);
    tasks = tasks.filter((task) => task.id !== id);
};

const saveTaskAllDelete = () => (tasks = tasks.filter((task) => task.isActive === true));

window.addEventListener('DOMContentLoaded', saveTaskList);

const filterStateButton = () => {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask.js */ "./js/createTask.js");
/* harmony import */ var _saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveLocalStorage.js */ "./js/saveLocalStorage.js");



const formGroup = document.querySelector('.form-group');
const taskInput = document.querySelector('.form-group__task-input');
const taskList = document.querySelector('.task-list');
const checkAllcheckbox = document.querySelector('.check-all-task__custom-button');
const filterAllButton = document.querySelector('#filterAll');
const filterActiveButton = document.querySelector('#filterActive');
const filterCompletedButton = document.querySelector('#filterCompleted');
filterAllButton.classList.add('bottom-panel__button_active');

_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.tasks.forEach((task) => (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(task));

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
        (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(newTask);
        _saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.tasks.push(newTask);
        checkAllTask.classList.add('check-all-task_show');
        taskInput.value = '';
        (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.showBar)();
        (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
    }
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasksToLocalStorage)();
};

formGroup.addEventListener('submit', (event) => newTask(event));

//done Task

taskList.addEventListener('click', (event) => doneTask(event));

const doneTask = (event) => {
    if (event.target.dataset.action === 'done') {
        let listItem = event.target.closest('.list-item');
        listItem.classList.toggle('list-item_done');
        (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskDone)(listItem, event);
    }
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasksToLocalStorage)();
};

const checkAllTasks = () => {
    const checkBoxAll = document.querySelectorAll('.custom-button');
    if (checkAllcheckbox.checked) {
        checkBoxAll.forEach((checkAll) => checkAll.parentNode.classList.add('list-item_done'));
        _saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.tasks.forEach((task) => (task.isActive = false));
    } else {
        checkBoxAll.forEach((checkAll) => checkAll.parentNode.classList.remove('list-item_done'));
        _saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.tasks.forEach((task) => (task.isActive = true));
    }
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasksToLocalStorage)();
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
};

checkAllcheckbox.addEventListener('change', () => checkAllTasks());

//delete Task
const deleteTask = (event) => {
    let listItem = event.target.closest('.list-item');
    if (event.target.dataset.action === 'delete') {
        listItem.remove();
        (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskDelete)(listItem);
    }
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.showBar)();
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasksToLocalStorage)();
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
        (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskAllDelete)();
    }
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.showBar)();
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasksToLocalStorage)();
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
        const taskIndex = _saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.tasks.findIndex((task) => task.id === id);

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
                    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.showBar)();
                    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
                    _saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.tasks = _saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.tasks.filter((task) => task.id !== id);
                } else {
                    label.innerText = editInput.value;
                    listItem.classList.remove('list-item_edit-mode');
                    if (taskIndex !== -1) {
                        _saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.tasks[taskIndex].text = editInput.value;
                    }
                }
            }
            (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasksToLocalStorage)();
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
                    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.showBar)();
                    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
                    _saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.tasks = _saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.tasks.filter((task) => task.id !== id);
                } else {
                    label.innerText = editInput.value;
                    listItem.classList.remove('list-item_edit-mode');
                    if (taskIndex !== -1) {
                        _saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.tasks[taskIndex].text = editInput.value;
                    }
                }
                listItem.classList.remove('list-item_edit-mode');
            }
            (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasksToLocalStorage)();
        });
        listItem.classList.toggle('list-item_edit-mode');
    }
};

taskList.addEventListener('dblclick', (event) => editATask(event));

(0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.filterStateButton)();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map