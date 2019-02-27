import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      todos: [
        { done: false, text: 'Köp tomatketchup'},
        { done: false, text: 'Skaffa ett digitalt liv'},
        { done: false, text: 'Sluta röka på Kruthusgatan' }
      ],
  },
  mutations: {
    newTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, index) {
      state.todos[index].done = !state.todos[index].done
    }
  },
  actions: {

  }
})
