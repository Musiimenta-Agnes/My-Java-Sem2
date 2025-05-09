
let task = []; //stores tasks

//Add a task
function addTask(){
    let taskText = document.getElementById('taskInput').value.trim();
    if(!taskText) {alert('Please enter a task'); return;}
    // TODO: Add task to array, clear input and call the displayTask.

    displayTasks();
}


//Display tasks
function displayTasks(){
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';  // Clear the list
    // TODO: Loop through tasks array, create <li> elements, and add delete button.

}



//Delete task.
function deleteTask(){
    // TODO: Remove task using splice() and refresh list.
}