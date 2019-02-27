<template>
  <div class="home">
    <main class="todolist">
      <header>
          <h1>Life Organizer</h1>
          <h3>Task provider since 2019</h3>
      </header>

      <span>Swipe right to complete a task</span>
      <section class="content">
        <todo v-for="(todo, index) in todos" :key="index" :index="index" :todo="todo" />
      </section>

      <footer v-touch:swipe.left="swipe">
        <a href="#" class="btn">Swipe to add new task</a>
      </footer>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from '@/components/Todo.vue'

export default {
  name: 'home',
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  methods: {
    swipe(e) {
      this.$emit('swipe', 1)
    },
  },
  components: {
    Todo
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

.home {

  .todolist {

    header {
      padding: 1.5rem;

      h1 {
        font-size: 2.5rem;
      }

      h1, h3 {
        margin: 0;
        padding: .5rem;
      }

    }

    footer {
      background: rgb(252, 166, 209);

      &:active {
        background: rgb(221, 108, 164);
      }
      
    }
  }
}

</style>