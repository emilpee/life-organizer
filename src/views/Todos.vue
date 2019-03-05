<template>
  <div class="home" v-touch:swipe.left="swipe">
    <main class="todolist">
      <header>
          <h1>Life Organizer</h1>
          <h3>Task provider since 2019</h3>
      </header>

      <span>Swipe right to complete a task</span>
      <section class="content">
        <todo v-for="(todo, index) in todos" :key="index" :index="index" :todo="todo" />
      </section>

      <footer>
        <span class="btn">Swipe to add new task</span>
      </footer>
    </main>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'

export default {
  name: 'home',
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  beforeMount() {
  if(localStorage.getItem('todos')) {
    this.$store.dispatch('getTasks');
    }
  },
  methods: {
    swipe() {
      this.$store.commit('swipe', 1)
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
      padding: 1rem;

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
    }
  }
}

</style>