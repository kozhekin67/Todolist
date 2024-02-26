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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewTask);


/***/ }),

/***/ "./js/saveLocalStorage.js":
/*!********************************!*\
  !*** ./js/saveLocalStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const taskList = document.querySelector('.task-list');
const filterAllButton = document.querySelector('#filterAll');
const filterActiveButton = document.querySelector('#filterActive');
const filterCompletedButton = document.querySelector('#filterCompleted');

const saveTasksToLocalStorage = () => {
    const tasks = taskList.innerHTML;
    localStorage.setItem('tasks', tasks);
};

if (localStorage.getItem('filterState') === 'active') {
    taskList.innerHTML = localStorage.getItem('tasks');
    filterActiveButton.click();
} else if (localStorage.getItem('filterState') === 'completed') {
    taskList.innerHTML = localStorage.getItem('tasks');
    filterCompletedButton.click();
} else if (localStorage.getItem('filterState') === 'all') {
    taskList.innerHTML = localStorage.getItem('tasks');
    filterAllButton.click();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveTasksToLocalStorage);


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
    let labelDone = document.querySelectorAll('.list-item');
    let labelNotDone = document.querySelectorAll('.list-item:not(.list-item_done)');
    let clear = document.querySelector('.bottom-panel__button_clear');

    numberOfTask.innerHTML = labelNotDone.length;

    if (labelDone.length === 0) {
        clear.classList.remove('bottom-panel__button_clear_show');
    } else if (labelNotDone.length === 0) {
        checkAllcheckbox.checked === true;
        clear.classList.add('bottom-panel__button_clear_show');
    } else {
        clear.classList.add('bottom-panel__button_clear_show');
        checkAllcheckbox.checked === false;
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
/* harmony import */ var _showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showBarAnditemsLeft.js */ "./js/showBarAnditemsLeft.js");




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
        let listItem = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(taskInput.value);
        taskList.prepend(listItem);
        checkAllTask.classList.add('check-all-task_show');
        editButton(listItem);
        taskInput.value = '';
        (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.showBar)();
        (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.itemsLeft)();
    }
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

formGroup.addEventListener('submit', (event) => newTask(event));

//done Task

taskList.addEventListener('click', (event) => doneTask(event));

const doneTask = (event) => {
    if (event.target.dataset.action === 'done') {
        let listItem = event.target.closest('.list-item');
        listItem.classList.toggle('list-item_done');
    }
    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.itemsLeft)();
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.itemsLeft)();
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

checkAllcheckbox.addEventListener('change', (event) => checkAllTasks(checkAllcheckbox));

//delete Task
const deleteTask = (event) => {
    if (event.target.dataset.action === 'delete') {
        let listItem = event.target.closest('.task-list__list-item');
        listItem.remove();
    }
    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.itemsLeft)();
    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.showBar)();
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.showBar)();
    (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.itemsLeft)();
    (0,_saveLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
                (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.showBar)();
                (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.itemsLeft)();
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
                (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.showBar)();
                (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.itemsLeft)();
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
        (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.showBar)();
        (0,_showBarAnditemsLeft_js__WEBPACK_IMPORTED_MODULE_2__.itemsLeft)();
        const taskItems = document.querySelectorAll('.task-list__list-item');
        taskItems.forEach((taskItem) => {
            editButton(taskItem);
        });
    }
};
window.addEventListener('DOMContentLoaded', saveTaskList);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map