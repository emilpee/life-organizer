<template>
  <div id="app">
    <div class="slider">
      <todos :todos="todos" />
      <newtodo />
    </div>
  </div>
</template>

<script>
import todos from './views/Todos.vue'
import newtodo from './views/NewTodo.vue'

export default {
  name: 'app',
  data() {
    return {
      todos: [
        { done: false, text: 'Köp tomatketchup'},
        { done: false, text: 'Skaffa ett digitalt liv'},
        { done: true, text: 'Sluta röka på Kruthusgatan' }
      ]
    }
  },
  components: {
    todos, newtodo
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

.slider {
  width: 200vw;
  display: flex;
  height: inherit;

  div {
    flex: 1;
  }
}

</style>