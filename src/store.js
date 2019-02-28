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
    }
  },
  actions: {
    newTodo(ctx, todo) {
      if (todo.text != '') {
        ctx.commit('addTodo', todo)

        // Improvement - sync with mongodb?
      }
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    doneTodos(state) {
      return state.todos.filter(todo => todo.done)
    }
  }
})
