<template>
  <article class="todo" :class="{ doneTask: todo.done }" v-touch:swipe="completed">
    <div class="todoItem">
    <aside class="done" v-if="todo.done">
        <img src="../assets/check.svg" alt="Check!" />
    </aside>
    <section class="text">
        {{ todo.text }}
    </section>
    </div>
  </article>
</template>

<script>
export default {
    name: 'todo',
    props: ['todo', 'index'],
    methods: {
        completed() {
          this.$store.commit('updateTodo', this.index)
        }    
    }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

.todo {
    background: rgb(131, 236, 255);
    padding: .75rem;
       display: flex;
    color: white;

    .todoItem {
        background: #222;
        border-radius: 9999em;
        display: flex;
        align-items: center;
        padding: .5rem;
    }

    &.doneTask {
    
        .text {
            color: rgba(196, 196, 196, 0.2);
            text-decoration: line-through;
            font-style: italic;
        }
    }

    aside {
        height: 1rem;
        width: 1rem;
        border-radius: 9999rem;
        padding: .5rem;
        background: rgb(70, 236, 70);
        display: flex;
        align-items: flex-start;
        justify-content: center;

        & img {
            width: 1.25rem;
        }
    }

    .text {
        flex: 1;
        padding: .5rem;
        @extend %center;
    }
}

</style>
