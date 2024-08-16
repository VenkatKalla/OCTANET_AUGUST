function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') return; 

    const taskList = document.getElementById('task-list');
    const newTaskItem = document.createElement('li');
    newTaskItem.className = 'task-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.className = 'task-text';

    const completeButton = document.createElement('button');
    completeButton.textContent = '✓';
    completeButton.className = 'complete-btn';
    completeButton.onclick = () => {
        taskSpan.classList.toggle('completed');
    };

    const editButton = document.createElement('button');
    editButton.textContent = '✎';
    editButton.className = 'edit-btn';
    editButton.onclick = () => {
        const newTask = prompt('Edit task:', taskSpan.textContent);
        if (newTask !== null && newTask.trim() !== '') {
            taskSpan.textContent = newTask.trim();
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✗';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = () => {
        taskList.removeChild(newTaskItem);
    };

    newTaskItem.appendChild(taskSpan);
    newTaskItem.appendChild(completeButton);
    newTaskItem.appendChild(editButton);
    newTaskItem.appendChild(deleteButton);

    taskList.appendChild(newTaskItem);

    taskInput.value = '';
}

document.getElementById('new-task').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
