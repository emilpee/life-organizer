<template>
  <div id="app">
    <div class="slider" :class="'slide-' + activeSlide">
      <todos :todos="todos" @swipe="handleSwipe" />
      <newtodo @swipe="handleSwipe" @newtodo="newTodo" />
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
        { done: false, text: 'Sluta röka på Kruthusgatan' }
      ],
      activeSlide: 0
    }
  },
  methods: {
    handleSwipe(e) {
      this.activeSlide = e;
      console.log(e);
    },
    newTodo(todo) {
      this.todos.push(todo);
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
  overflow: hidden;
  transition: transform .2s ease;

  &.slide-0 {
    transform: translate3d(0, 0, 0);
  }

  &.slide-1 {
    transform: translate3d(-100vw, 0, 0);
  }

  div {
    flex: 1;
  }
}

</style>