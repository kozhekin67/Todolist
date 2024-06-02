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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTasks);


/***/ }),

/***/ "./js/showBarAnditemsLeft.js":
/*!***********************************!*\
  !*** ./js/showBarAnditemsLeft.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemsLeft: () => (/* binding */ itemsLeft),
/* harmony export */   showBar: () => (/* binding */ showBar)
/* harmony export */ });
const bottomPanel = document.querySelector('.bottom-panel');
const filterAllButton = document.querySelector('#filterAll');
const filterActiveButton = document.querySelector('#filterActive');
const filterCompletedButton = document.querySelector('#filterCompleted');
const checkAllcheckbox = document.querySelector('.check-all-task__custom-button');

const showBar = () => {
    let listItem = document.querySelectorAll('.task-list__list-item');
    let checkAllTask = document.querySelector('.check-all-task');

    if (listItem.length !== 0) {
        bottomPanel.classList.add('bottom-panel_show');
        checkAllTask.classList.add('check-all-task_show');
    } else if (listItem.length === 0) {
        bottomPanel.classList.remove('bottom-panel_show');
        filterAllButton.classList.remove('bottom-panel__button_active');
        filterActiveButton.classList.remove('bottom-panel__button_active');
        filterCompletedButton.classList.remove('bottom-panel__button_active');
        checkAllTask.classList.remove('check-all-task_show');
    } else {
        bottomPanel.classList.remove('bottom-panel_show');
        checkAllTask.classList.remove('check-all-task_show');
    }
};

const itemsLeft = () => {
    let numberOfTask = document.querySelector('.number_of_tasks');
    let label = document.querySelectorAll('.list-item');
    let labelNotDone = document.querySelectorAll('.list-item:not(.list-item_done)');
    let clear = document.querySelector('.bottom-panel__button_clear');

    numberOfTask.innerHTML = labelNotDone.length;

    if (label.length === 0) {
        clear.classList.remove('bottom-panel__button_clear_show');
    } else if (labelNotDone.length === 0) {
        checkAllcheckbox.checked = true;
        clear.classList.add('bottom-panel__button_clear_show');
    } else {
        clear.classList.add('bottom-panel__button_clear_show');
        checkAllcheckbox.checked = false;
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
/* harmony import */ var _showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showBarAnditemsLeft.js */ "./js/showBarAnditemsLeft.js");

//import saveTasksToLocalStorage from './saveLocalStorage.js';


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
        (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.showBar)();
        (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
    }
};

saveTaskList ();

window.addEventListener('DOMContentLoaded', saveTaskList);

tasks.forEach((task) => {
    (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(task);
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
        (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(newTask);
        tasks.push(newTask);
        checkAllTask.classList.add('check-all-task_show');
        taskInput.value = '';
        (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.showBar)();
        (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
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
    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
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
    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
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
    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.showBar)();
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
    
    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.showBar)();
    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
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
                    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.showBar)();
                    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
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
                    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.showBar)();
                    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_1__.itemsLeft)();
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

})();

/******/ })()
;
//# sourceMappingURL=main.js.map