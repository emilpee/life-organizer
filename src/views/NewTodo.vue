<template>
  <div id="newtodo">
    <div class="addnew">
      <header>
        <h1>Add new task</h1>
        <h3>(If you have nothing else to do)</h3>
      </header>
      
      <section class="input">
        <input type="text" v-model="newTodo" maxlength="30">
      </section>

      <p> {{ newTodo.length }} / 30 </p>

      <section href="#" class="footer">
        <a href="#" class="btn" @click="addTask">Add new task</a>
      </section>
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
        addTask() {
            let task = {
                done: false,
                text: this.newTodo
            }
            this.$emit('newtodo', task);
            this.newTodo = '';
            this.$emit('swipe', 0);
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

    .addnew {
      max-width: 600px;
      width: 100vw;
    }

  .input {
    height: 20vh;
    @extend %center;

    input[type="text"] {
        appearance: none;
        background: none;
        margin: .5rem;
        width: 35vw;
        padding: .5rem;
        color: white;
        text-align: center;
        font-size: 1.4em;
    }
}

.footer {
    background: #222;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-radius: 3px;

    &:hover {
        background: rgb(100, 236, 100);
        cursor: pointer;
    }
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
