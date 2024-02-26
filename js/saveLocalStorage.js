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

export default saveTasksToLocalStorage;
