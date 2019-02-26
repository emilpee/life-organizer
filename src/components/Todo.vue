<template>
  <article class="todo" :class="{ doneTask: todo.done }">
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
    props: ['todo']
}
</script>

<style lang="scss">
@import '../scss/main.scss';

.todo {
    background: #999;
    padding: 1rem;
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
        flex: 1;
        padding: 0 1rem 0 0;
    }
}

</style>
