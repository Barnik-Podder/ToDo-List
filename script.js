function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskInput.value}</span>
            <i class="fa fa-arrow-up move-up-icon"></i>
            <i class="fa fa-arrow-down move-down-icon"></i>
            <i class="fa fa-trash delete-icon"></i>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';

        taskItem.querySelector('.delete-icon').addEventListener('click', function () {
            this.parentElement.remove();
        });

        taskItem.querySelector('.move-up-icon').addEventListener('click', function () {
            const prev = this.parentElement.previousElementSibling;
            if (prev) {
                taskList.insertBefore(this.parentElement, prev);
            }
        });

        taskItem.querySelector('.move-down-icon').addEventListener('click', function () {
            const next = this.parentElement.nextElementSibling;
            if (next) {
                taskList.insertBefore(next, this.parentElement);
            }
        });
    }
}
