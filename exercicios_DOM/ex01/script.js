taskForm.onsubmit = (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Deletar';
    deleteButton.onclick = () => li.remove();
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput = "";
}