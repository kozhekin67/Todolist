
const formGroup = document.querySelector('.form-group');
const taskInput = document.querySelector('.taskInput');
const taskList = document.querySelector('.task-list');
const checkAllcheckbox = document.querySelector('.checkAllTask input');
const bottomPanel = document.querySelector('.bottom_panel');

const createNewTask = (taskString) => {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');
    label.dataset.action = 'edit';

    let changeInput = document.createElement('input');
    let buttonDelete = document.createElement('button');

    label.textContent = taskString;

    checkBox.type = 'checkbox';
    checkBox.dataset.action = 'done';
    changeInput.type = 'text';

    buttonDelete.innerHTML = `<svg fill="#d2691e" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"/>
    </svg>`;
    buttonDelete.classList.add('delete');
    buttonDelete.dataset.action = 'delete';

    listItem.append(checkBox);
    listItem.append(label);
    listItem.append(changeInput);
    listItem.append(buttonDelete);

    return listItem;
}

let showBar = ()=> {
    let listItem = document.querySelectorAll('.task-list li');
    let checkAllTask = document.querySelector('.checkAllTask');
    let bottom_panel = document.querySelector('.bottom_panel');

    if(listItem.length !=0 ) {
        bottom_panel.classList.add('show');
        checkAllTask.classList.add('show');
    }

    else if(listItem.length=0) {
        bottom_panel.classList.remove('show');
    }

    else {
        bottom_panel.classList.remove('show');
        checkAllTask.classList.remove('show');
    }
}

formGroup.addEventListener ('submit', (event) => {
    event.preventDefault();

    let checkAllTask = document.querySelector('.checkAllTask');
    let listItem = createNewTask(taskInput.value);
    taskList.append(listItem);
    checkAllTask.classList.add('show');
    editButton (listItem);
    taskInput.value = '';
    showBar ();
    itemsLeft ();
})

let itemsLeft = () => {
    let numberOfTask = document.querySelector('.number_of_tasks');
    let labelDone = document.querySelectorAll('.task-list li.done');
    let labelNotDone = document.querySelectorAll('.task-list li:not(.done)');
    let clear = document.querySelector('.clear');


    numberOfTask.innerHTML = labelNotDone.length;

    if(labelDone.length == 0) {
        clear.classList.remove('show');
    }

    else if(labelNotDone.length === 0) {
		checkAllcheckbox.checked = true;
		clear.classList.add('show');
	}

    else {
        clear.classList.add('show');
        checkAllcheckbox.checked = false;
    }
}

//done Task 

taskList.addEventListener('click', doneTask);

function doneTask(event) {
    if (event.target.dataset.action === 'done') {
        let listItem = event.target.closest('.task-list li');
        listItem.classList.toggle('done');
        console.log(listItem);
    }
    
    itemsLeft ();
}

//checkAllcheckbox.addEventListener('click', checkAllTask);

function checkAllTasks(sourse) {
    let checkBoxAll = document.querySelectorAll('.task-list li input[type="checkbox"]');
    if(checkBoxAll) {
        if (sourse.checked == true) {
            for (let i = 0; i < checkBoxAll.length; i++) {
                checkBoxAll[i].checked = true;
                checkBoxAll[i].parentNode.classList.add('done');
            }
        }
        else {
            for (let i = 0; i < checkBoxAll.length; i++) {
                checkBoxAll[i].checked = false;
                checkBoxAll[i].parentNode.classList.remove('done');
            }
        }
    }
        itemsLeft ();
}   

checkAllcheckbox.onclick=checkAllTasks;

//delete Task
taskList.addEventListener('click', deleteTask);

function deleteTask(event) {
    if (event.target.dataset.action === 'delete') {
        let listItem = event.target.closest('.task-list li');
        listItem.remove();
    }
    itemsLeft ();
    showBar ();
}

//filterAll
const filterAllButton = document.querySelector('#filterAll');

filterAllButton.onclick = filterAll;

function filterAll() {
    let listItem=document.querySelector('#task-list');

	if(listItem.children.length>0){
		listItem.classList.remove("show_completed_tasks");
		listItem.classList.remove("show_active_tasks");
	}
     else {
		return false;
	 }	
}

//filterActive
const filterActiveButton = document.querySelector('#filterActive');

filterActiveButton.onclick = filterActive;

function filterActive() {
    let listItem=document.querySelector('#task-list');

	if(listItem.children.length>0){
		listItem.classList.remove("show_completed_tasks");
		listItem.classList.add("show_active_tasks");
	}
     else {
		return false;
	 }	
}

//filterCompleted
const filterCompletedButton = document.querySelector('#filterCompleted');

filterCompletedButton.onclick = filterCompleted;

function filterCompleted() {
    let listItem=document.querySelector('#task-list');

	if(listItem.children.length>0){
		listItem.classList.add("show_completed_tasks");
		listItem.classList.remove("show_active_tasks");
	}
     else {
		return false;
	 }	
}

//clearAllTask
const clearButton = document.querySelector('#clearTasks');

clearButton.onclick = clearAll;

function clearAll() {
    let listItem = document.querySelectorAll('li.done');
    if(listItem) {
        for (let i=0;  i<listItem.length; i++) {
            listItem[i].remove()
        }
    }
    showBar()
	itemsLeft()
}

//editATask
let editATask=function() {

    let listItem=this.parentNode;
    let editInput=listItem.querySelector('input[type=text]');
    let label=listItem.querySelector('label');
    let containsClass=listItem.classList.contains('editMode');


    if (containsClass) {
        label.innerText=editInput.value;
    }

    else{
        editInput.value=label.innerText;
    }

    window.addEventListener("keyup", function(event) {
		if (event.key === "Enter") {
			listItem.classList.remove('editMode');
			label.innerText=editInput.value;
		}
		
		else {
			return false
		}
    });

    window.addEventListener('keyup', function(event) {
		if (event.key === "Enter") {
				if(editInput.value === ''){
				listItem.remove()
				showBar()
				itemsLeft()
			}
			else {
				label.innerText=editInput.value;
			}
			listItem.classList.remove("editMode");
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
			listItem.classList.remove("editMode");
		}
		else {
			return false
		}
    });
	listItem.classList.toggle('editMode');
}

let editButton=function(taskListItem){
	let editing=taskListItem.querySelector('.task-list li label');
		editing.ondblclick=editATask;
}
