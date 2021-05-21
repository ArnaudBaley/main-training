let index = 0;

create = () => {
    const result = document.getElementById('input').value
    console.log(JSON.stringify(result));

    // Value.
    const newTodo = document.createElement('div');
    const newTodoText = document.createElement('p');
    newTodoText.innerText = result;
    newTodoText.style.color = 'white';
    newTodo.appendChild(newTodoText);
    
    // Delete button.
    const newTodoBtnDelete = document.createElement('span');
    newTodoBtnDelete.innerHTML = `<input type=\'submit\' value="Delete" onclick="remove(${index})")>`;
    newTodo.appendChild(newTodoBtnDelete);

    // Style.
    newTodo.classList.add('item');

    newTodo.id = index;

    const todoList = document.getElementById('todoList');
    todoList.appendChild(newTodo);    

    index += 1;
};

remove = (index) => {
    const target = document.getElementById(index);
    target.remove();
}