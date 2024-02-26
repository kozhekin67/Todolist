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

export { showBar, itemsLeft};