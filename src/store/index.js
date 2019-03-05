import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      todos: [],
      activeSlide: 0
  },
  mutations: mutations,
  actions: actions,
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.done)
    },
  }
})
