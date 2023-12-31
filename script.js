const inputElement = document.querySelector('.todo-input')
const buttonElement = document.querySelector('.add-button')
const errorElement = document.querySelector('.error-message')
const todoContainer = document.querySelector('.js-container-list')
const dateInput = document.querySelector('.date-input')

let todoObjectList = []

main()

function main(){
    buttonElement.addEventListener('click', addItens)
    inputElement.addEventListener('keydown', event => {if(event.key === 'Enter'){addItens()}})
}

function addItens(){
    if(inputElement.value === ''){
        errorElement.innerHTML = 'Invalid input!'
    }
    else{
        todoObjectList.push({name:inputElement.value, date:dateInput.value})
        errorElement.innerHTML = ''
        renderTodoList()
    }
    inputElement.value = ''
}


function renderTodoList(){
    let allElements = ''
    todoObjectList.forEach((object, index) => {
        let html = `
        <p class="item-paragraph">${object.name}</p>
        <p class="date-paragraph">${object.date}</p>
        <button class="delete-button" onclick="deleteItens(${index})">Delete</button>
        `
        allElements += html
    })
    todoContainer.innerHTML = allElements
}

function deleteItens(index){
    todoObjectList.splice(index,1)
    renderTodoList()
}
