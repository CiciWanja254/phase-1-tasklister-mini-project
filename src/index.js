document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the default form submission behavior

    const task = input.value.trim(); // get the trimmed value of the input field

    if (task) {
      const taskItem = document.createElement('li'); // create a new list item
      taskItem.textContent = task; // set the text content of the list item
      taskList.appendChild(taskItem); // add the list item to the task list
      input.value = ''; // clear the input field
      
      const deleteButton = document.createElement('button'); // create a new delete button
      deleteButton.textContent = 'Delete'; // set the text content of the delete button
      taskItem.appendChild(deleteButton); // add the delete button to the list item
      
      deleteButton.addEventListener('click', function(event) {
        taskItem.remove(); // remove the list item from the task list
      });
    }
  });
});
