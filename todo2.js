let todoList = [];

// Check if there is any data in localStorage and initialize todoList
if (localStorage.getItem('todoList')) {
    todoList = JSON.parse(localStorage.getItem('todoList'));
}

displayItems();

function addTodo() {
    let inputElement = document.querySelector('.todo-input');
    let dateElement = document.querySelector('.todo-date');
    let inputValue = inputElement.value;
    let inputDate = dateElement.value;
    todoList.push({ item: inputValue, dueDate: inputDate, });
    inputElement.value = '';
    dateElement.value = '';
    updateLocalStorage();
    displayItems();
}

function displayItems() {
    let displayElement = document.querySelector('.todo-show');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class='todo-delete'  onclick='todoList.splice(${i},1); displayItems()'>Delete</button>
        `;
    }
    updateLocalStorage();
    displayElement.innerHTML = newHtml;
}

function updateLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
