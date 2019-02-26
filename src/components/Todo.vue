<template>
  <article class="todo">
    <aside class="done">
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
    data() {
        return {
            todo: {
                text: 'Renovera Kruthusgatan 17',
                done: false
            } 
        }
    }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

.todo {
    background: #999;
    padding: 1rem;
    color: white;
    flex-direction: row;
    @extend %center;

    aside {
        height: 2rem;
        width: 2rem;
        border-radius: 9999rem;
        padding: .5rem;
        background: rgb(70, 236, 70);
        @extend %center;
    }

    .text {
        flex: 1;
        padding: 0 1rem 0 0;
    }
}

</style>
