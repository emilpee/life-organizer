<template>
  <div id="newtodo">
    <div class="addnew" v-touch:swipe.right="swipe">
      <header>
        <h1>Add new task</h1>
        <h3>(If you have nothing else to do)</h3>
      </header>
      
      <section class="input">
        <p> {{ newTodo.length }} / 30 </p>
        <input type="text" v-model="newTodo" maxlength="30">
      </section>

      <footer @click="addTodo">
        <a href="#" class="btn">Add new task</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
    name: 'newtodo',
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        async addTodo() {
          let task = {
              done: false,
              text: this.newTodo
          }
          this.$store.dispatch('newTodo', task)
          this.$store.dispatch('getTodolist')
          this.newTodo = '';
          this.$store.commit('swipe', 0);
        },
        swipe() {
          this.$store.commit('swipe', 0)
        }
    }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#newtodo {
    background: rgb(252, 166, 209);
    display: flex;
    justify-content: center;
    height: 100vh;

    header {
      flex: 3;
      @extend %center;
      flex-direction: column;
    }

    .addnew {
      max-width: 600px;
      margin: auto;
      flex-direction: column;
      width: 100vw;
      height: inherit;
      display: flex;
    }

  .input {
    @extend %center;
    flex-direction: column;
    flex: 8;

    input[type="text"] {
        appearance: none;
        background: none;
        margin: .5rem;
        width: 35vw;
        color: white;
        text-align: center;
        font-size: 1.2em;
    }
}

  footer {
    background: #222;
    display: flex;
    flex: 1;
    @extend %center;
    border-radius: 999rem;
    flex-direction: column;
    margin: .5rem;
    font-weight: 700;
  }

  @media screen and (max-width: 480px) {
    .input {
        input[type="text"] {
            width: 80vw;
        }
    }
  }
}

</style>
