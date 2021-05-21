create = () => {
    const result = document.getElementById('input').value
    console.log(JSON.stringify(result));

    const newTodo = document.createElement('div');
    const newTodoText = document.createElement('p');
    newTodoText.innerText = result;
    newTodo.appendChild(newTodoText);

    const todoList = document.getElementById('todoList');
    todoList.appendChild(newTodo);
}