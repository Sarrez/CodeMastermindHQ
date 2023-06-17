// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
  let taskInput = document.getElementById('taskInput');
  let taskList = document.getElementById('taskList');

  // Create a new task object
  let task = {
    id: tasks.length + 1,
    name: taskInput.value,
    completed: false
  };

  // Add the task to the array
  tasks.push(task);

  // Create a new list item for the task
  let li = document.createElement('li');
  li.textContent = task.name;

  // Add event listener to mark task as completed when clicked
  li.addEventListener('click', function() {
    task.completed = !task.completed;
    li.classList.toggle('completed');
  });

  // Append the list item to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}
