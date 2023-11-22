
export function editTodo(todo){
    return {type: "EDIT TODO",payload:todo}
}

export function addTodo(todo){
    return {type: "ADD TODO",payload:todo}
}

export function deleteTodo(id){
    return {type: "DELETE TODO",payload:id}
}