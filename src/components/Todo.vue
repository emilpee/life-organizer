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
    margin: 1rem;
    display: flex;
    color: white;

    .todoItem {
        background: #222;
        height: 2.5rem;
        border-radius: 9999em;
        display: flex;
        align-items: center;
    }

    &.doneTask {
    
        .text {
            color: rgba(196, 196, 196, 0.2);
            text-decoration: line-through;
            font-style: italic;
        }
    }

    aside {
        border-radius: 9999rem;
        background: rgb(70, 236, 70);
        padding: .75rem;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin: -.5rem;

        & img {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    .text {
        flex: 1;
        @extend %center;
    }
}

</style>
