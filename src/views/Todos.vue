<template>
  <div class="home">
    <main class="todolist">
      <header>
          <h1>Life Organizer</h1>
          <h3>Task provider since 2019</h3>
      </header>

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
  props: ['todos'],
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
    display: flex;
    flex-direction: column;
    align-items: center;

    .todolist {
      max-width: 600px;
      width: 100vw;
      height: 100vh;
    }

    header {
      background: rgb(131, 236, 255);
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
        background: #333;
        padding: 1.5rem;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;

        &:hover {
          background: rgb(252, 166, 209);
          cursor: pointer;
        }
      }

  }
</style>
