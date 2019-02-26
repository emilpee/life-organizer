<template>
  <div id="app">
    <div class="slider">
      <todos />
      <newtodo />
    </div>
  </div>
</template>

<script>
import todos from './views/Todos.vue'
import newtodo from './views/NewTodo.vue'

export default {
  name: 'app',
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