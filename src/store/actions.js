import axios from 'axios'

export default {
    getTasks(data) {
        let tasks = localStorage.getItem('todos');
        let parsedTasks = JSON.parse(tasks);
        data.commit('getTodos', parsedTasks);
    },

    async getTodolist(data) {
        let todos = await axios.get('http://localhost:3000/todos')
        data.commit('getTodos', todos.data)
    },

    async newTodo(ctx, todo) {
        if (todo.text != '') {
          let todos = await axios.post('http://localhost:3000/todos', todo)
          ctx.commit('addTodo', todos.data)
          let todoStorage = JSON.stringify(todos.data);
          localStorage.setItem('todos', todoStorage);
        }
    },

    async removeTask(ctx, index) {
        await axios.get('http://localhost:3000/todos/');
        ctx.commit('removeTodo', index)
      }
}