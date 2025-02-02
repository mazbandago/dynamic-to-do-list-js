document.addEventListener("DOMContentLoaded", (addTask) => {
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }
    
    // Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
    function addTask(taskText, save = true) {
        // Task creation logic remains the same
    
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        loadTasks();
        // Other initialization code
    });
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        let li = document.creatElement('li');
        li.textContent = 'taskText.';
        let newButton = document.createElement('button');
        newButton.textContent = 'Remove';
        newButton.classList.add('remove-btn');
        const removeBtn = document.querySelector('.remove-btn');
        removeBtn.addEventListener("onclick", ()=>{
            removeBtn.taskList.delete(li);
            li.appendChild(newButton);
            taskList.appendChild(li);
            taskInput.value = "";
        })
    } else{
        alert('Enter a task');
    };
    }

    addButton.addEventListener("clicked", (addTask) =>{
        addTask.target;
    });

    taskInput.addEventListener("keypress", (addTask)=>{
        if("event.key" =="Enter"){
            addTask();
        }
    });

    
});

document.addEventListener("DOMContentLoaded",(addTask)=>{
    addTask();
});
