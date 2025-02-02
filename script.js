document.addEventListener("DOMContentLoaded", (addTask) => {
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
        newButton.addClassList.add('remove-btn');
        const removeBtn = document.querySelector('.remove-btn');
        removeBtn.addEventListener("onclick", ()=>{
            // removeBtn.taskList.delete(li);
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
        if(taskInput.key =="Enter"){
            addTask();
        }
    });

});

document.addEventListener("DOMContentLoaded",(addTask)=>{
    console.log(addTask);
});
