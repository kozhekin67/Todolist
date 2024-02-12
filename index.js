const formGroup = document.querySelector('.form-group');
const taskInput = document.querySelector('.form-group__task-input');
const taskList = document.querySelector('.task-list');
const checkAllcheckbox = document.querySelector('.check-all-task__custom-button');
const bottomPanel = document.querySelector('.bottom-panel');
const filterAllButton = document.querySelector('#filterAll');
const filterActiveButton = document.querySelector('#filterActive');
const filterCompletedButton = document.querySelector('#filterCompleted');
filterAllButton.classList.add('bottom-panel__button_active');

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
    changeInput.type = 'text';
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
}

let showBar = ()=> {
    let listItem = document.querySelectorAll('.task-list__list-item');
    let checkAllTask = document.querySelector('.check-all-task');

    if(listItem.length !=0 ) {
        bottomPanel.classList.add('bottom-panel_show');
        checkAllTask.classList.add('check-all-task_show');
    }

    else if(listItem.length = 0) {
        bottomPanel.classList.remove('bottom-panel_show');
        filterAllButton.classList.remove('bottom-panel__button_active');
        filterActiveButton.classList.remove('bottom-panel__button_active');
        filterCompletedButton .classList.remove('bottom-panel__button_active');                
    }

    else {
        bottomPanel.classList.remove('bottom-panel_show');
        checkAllTask.classList.remove('check-all-task_show');
    }
}

const newTask = (event) => {
event.preventDefault();

    if (taskInput.value.trim() !== '') {
    let checkAllTask = document.querySelector('.check-all-task');
    let listItem = createNewTask(taskInput.value);
    taskList.prepend(listItem);
    checkAllTask.classList.add('check-all-task_show');
    editButton (listItem);
    taskInput.value = '';
    showBar ();
    itemsLeft ();
    }
    saveTasksToLocalStorage ();
}

formGroup.addEventListener ('submit', (event) => newTask(event))

let itemsLeft = () => {
    let numberOfTask = document.querySelector('.number_of_tasks');
    let labelDone = document.querySelectorAll('.list-item');
    let labelNotDone = document.querySelectorAll('.list-item:not(.list-item_done)');
    let clear = document.querySelector('.bottom-panel__button_clear');


    numberOfTask.innerHTML = labelNotDone.length;

    if(labelDone.length == 0) {
        clear.classList.remove('bottom-panel__button_clear_show');
    }

    else if(labelNotDone.length === 0) {
		checkAllcheckbox.checked = true;
		clear.classList.add('bottom-panel__button_clear_show');
	}

    else {
        clear.classList.add('bottom-panel__button_clear_show');
        checkAllcheckbox.checked = false;
    }
}

//done Task 


taskList.addEventListener('click', (event) => doneTask(event));

const doneTask = (event) => {
    if (event.target.dataset.action === 'done') {
        let listItem = event.target.closest('.list-item');
        listItem.classList.toggle('list-item_done');
    }
    itemsLeft ();
    saveTasksToLocalStorage ();
}

const checkAllTasks = (sourse) => {
    let checkBoxAll = document.querySelectorAll('.custom-button');
    if(checkBoxAll) {
        if (sourse.checked === true) {       
                for (let i = 0; i < checkBoxAll.length; i++) {
                checkBoxAll[i].parentNode.classList.add('list-item_done');
            }
        }

        else if (sourse.checked === false) {
            for (let i = 0; i < checkBoxAll.length; i++) {
                checkBoxAll[i].parentNode.classList.remove('list-item_done');
            }
        }  
    }
    itemsLeft ();
    saveTasksToLocalStorage ();
}   

//delete Task
const deleteTask = (event) => {
    if (event.target.dataset.action === 'delete') {
        let listItem = event.target.closest('.task-list__list-item');
        listItem.remove();
}
    itemsLeft ();
    showBar ();
    saveTasksToLocalStorage ();
}

taskList.addEventListener('click', (event) => deleteTask(event));

//filterAll

const filterAll = () => {
    let listItem=document.querySelector('.task-list');

	if(listItem.children.length>0){
		listItem.classList.remove('task-list_show-completed-tasks');
		listItem.classList.remove('task-list_show-active-tasks');
        filterAllButton.classList.add('bottom-panel__button_active');
        filterActiveButton.classList.remove('bottom-panel__button_active');
        filterCompletedButton.classList.remove('bottom-panel__button_active');
        localStorage.setItem('filterState', 'all');
	}

    else {
        return false;
    }	
}

filterAllButton.onclick = filterAll;

//filterActive
const filterActive = () => {
    let listItem=document.querySelector('.task-list');

	if(listItem.children.length>0){
		listItem.classList.remove('task-list_show-completed-tasks');
		listItem.classList.add('task-list_show-active-tasks');
        filterAllButton.classList.remove('bottom-panel__button_active');
        filterActiveButton.classList.add('bottom-panel__button_active');
        filterCompletedButton.classList.remove('bottom-panel__button_active');
        localStorage.setItem('filterState', 'active');
	}

     else {
		return false;
	}	
}

filterActiveButton.onclick = filterActive;



//filterCompleted
const filterCompleted = () => {
    let listItem=document.querySelector('.task-list');

	if(listItem.children.length>0){
		listItem.classList.add('task-list_show-completed-tasks');
		listItem.classList.remove('task-list_show-active-tasks');
        filterAllButton.classList.remove('bottom-panel__button_active');
        filterActiveButton.classList.remove('bottom-panel__button_active');
        filterCompletedButton.classList.add('bottom-panel__button_active');
        localStorage.setItem('filterState', 'completed');
	}
    else {
		return false;
	}	
}

filterCompletedButton.onclick = filterCompleted;

//clearAllTask
const clearButton = document.querySelector('.bottom-panel__button_clear');

const clearAll = () => {
    let listItem = document.querySelectorAll('.list-item_done');
    if(listItem) {
        for (let i=0;  i<listItem.length; i++) {
            listItem[i].remove()
        }
    }
    showBar();
	itemsLeft();
    saveTasksToLocalStorage();
}

clearButton.onclick = clearAll;


//editATask

const editATask = function () {

    let listItem=this.parentNode;
    let editInput=listItem.querySelector('textarea');
    let label=listItem.querySelector('.task-list__task-text');
    let containsClass=listItem.classList.contains('list-item_edit-mode');
    window.addEventListener('dblclick', function() {editInput.focus();})
    
    if (containsClass) {
        label.innerText=editInput.value;
    }

    else{
        editInput.value=label.innerText;
    }

    window.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
			listItem.classList.remove('list-item_edit-mode');
			label.innerText=editInput.value;
		}
		
		else {
			return false
		}
    });

    window.addEventListener('keypress', function(event) {
		if (event.key === "Enter") {
				if(editInput.value === ''){
				listItem.remove()
				showBar()
				itemsLeft()
			}
			else {
				label.innerText=editInput.value;
			}
			listItem.classList.remove('list-item_edit-mode');
		}

		else {
			return false
		}
    });

    window.addEventListener('keyup', function(event) {
		if (event.key === "Escape") {
		listItem.classList.remove('list-item_edit-mode');
        editInput.value=label.innerText;
        }

		else {
			return false
		}
    });

    window.addEventListener('click', function(event) {
		if (event.target != editInput) {
				if(editInput.value === ''){
				listItem.remove()
				showBar()
				itemsLeft()
			}
			else {
				label.innerText=editInput.value;
			}
			listItem.classList.remove('list-item_edit-mode');
		}
		else {
			return false
		}
    });
    
	listItem.classList.toggle('list-item_edit-mode');
}

const editButton = (taskListItem) => {
	let editing=taskListItem.querySelector('.task-list__task-text');
		editing.ondblclick=editATask;
}

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

const saveTasksToLocalStorage = () => {
    const tasks = taskList.innerHTML;
    localStorage.setItem('tasks', tasks);
}

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