<template>
  <div id="newtodo">
    <div class="addnew">
      <header>
        <h1>Add new task</h1>
        <h3>(If you have nothing else to do)</h3>
      </header>
      <section class="input">
        <input type="text" v-model="newTodo">
      </section>

      <section class="footer">
        <a href="#" class="btn">Add new task</a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
    name: 'newtodo',
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#newtodo {
    background: rgb(252, 166, 209);
    display: flex;
    justify-content: center;

    .addnew {
        max-width: 600px;
        width: 100vw;
    }

}

.input {
    height: 20vh;
    @extend %center;

    input[type="text"] {
        appearance: none;
        margin: .5rem;
        width: 25vw;
        padding: .5rem;
    }
}

.footer {
    background: #222;
    padding: 1.5rem;
    @extend %center;
    border-radius: 3px;

    &:hover {
        background: rgb(53, 202, 53);
    }
}

</style>
