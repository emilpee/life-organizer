<template>
  <article class="todo" :class="{ doneTask: todo.done }" v-touch:swipe.right="completed">
    <aside class="done" v-if="todo.done">
      <img src="../assets/check.svg" alt="Check!" />
    </aside>
    <section class="text">
        {{ todo.text }}
    </section>
  </article>
</template>

<script>
export default {
    name: 'todo',
    props: ['todo', 'index'],
    methods: {
        completed() {
            this.$parent.$parent.todos[this.index].done = !this.$parent.$parent.todos[this.index].done
        }    
    }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

.todo {
    background: #999;
    padding: .75rem;
    color: white;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;

    &.doneTask {
        .text {
            color: rgba(0, 0, 0, .3);
            text-decoration: line-through;
        }
    }

    aside {
        height: 1rem;
        width: 1rem;
        border-radius: 9999rem;
        padding: .5rem;
        background: rgb(70, 236, 70);
        @extend %center;

        & img {
            width: 1.25rem;
        }
    }

    .text {
        border-radius: 9999em;
        flex: 1;
        padding: .5rem;
    }
}

</style>
