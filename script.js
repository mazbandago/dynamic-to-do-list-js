document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    function addTask(){
    const taskInputValue = document.getElementById('task-input').value;
    const taskText = taskInputValue.trim();
    if (taskText && taskText.trim() !== '') {
        const li = document.creatElement('li');
        li.textContent = 'taskText.';
        const newButton = document.createElement('button');
        newButton.textContent = 'Remove';
        newButton.addClassList.add('remove-btn');
        console.log(li);
    } else{
        alert('Enter a task');
    };
    


    }
});
