export default {
    swipe(state, current) {
        state.activeSlide = current;
    },
    updateTodo(state, index) {
        state.todos[index].done = !state.todos[index].done
    },
    addTodo(state, todo) {
        state.todos.push(todo)
    },
    getTodos(state, todos) {
        state.todos = todos
    }
}