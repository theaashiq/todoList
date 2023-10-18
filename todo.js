const button = document.querySelector('.add-item')
const input = document.getElementById('input')
const todoList = document.querySelector('#todo-list')

console.log(todoList)

const todos = []
console.log(todos)

button.addEventListener('click', () => {
    todos.push(input.value)
    addtodo(input.value)

    
    input.value = ''
})


function addtodo(todo){
        let todoDiv = document.createElement('div')
        todoDiv.id = "list-items"
        todoDiv.innerHTML = todo
        todoList.appendChild(todoDiv)
        todoDiv.addEventListener('click', () => {
            todoDiv.style.textDecoration = 'line-through'
            remove(todo)
        })
        todoDiv.addEventListener('dblclick', () => {
            todoList.removeChild(todoDiv)
            remove(todo)
        })

}

function remove(todo){
    let index = todos.indexOf(todo)
    if(index > -1) {
        todos.splice(index, 1)
    }
    console.log(todos)


}