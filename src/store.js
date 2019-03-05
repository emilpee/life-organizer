import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      todos: [],
      activeSlide: 0
  },
  mutations: {
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
  },
  actions: {
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
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.done)
    },
  }
})
