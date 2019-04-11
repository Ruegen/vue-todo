<template>
  <section>
    <form v-on:submit.prevent="addTodo" class="todo-form">
      <input type="text" name="title" />
    </form>
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id">
        <button class="button-complete" v-on:click="toggleTodoComplete(todo.id)">
          <span v-bind:class="{ 'completed': todo.completed }"></span>
        </button>
        <input
          autocomplete="off"
          type="text"
          v-bind:class="{ 'completed': todo.completed }"
          v-model="todo.title"
        />
        <button class="button-delete" v-on:click="deleteTodo(todo)">Delete</button>
      </li>
    </ul>
  </section>
</template>

<script>
import createTodo from "./createTodo";
import { setTimeout } from "timers";

export default {
  name: "TodoList",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos:vue")) || []
    };
  },
  watch: {
    todos: {
      handler: (oldTodos, newTodos) => {
        localStorage.setItem("todos:vue", JSON.stringify(newTodos))
      },
      deep: true
    }
  },
  methods: {
    addTodo(e) {
      const title = e.target.title.value;
      if (!title) return;
      const todo = createTodo(title);
      this.todos.unshift(todo)
      e.target.reset();
    },
    deleteTodo(todo) {
      const index = this.todos.indexOf(todo)
      this.$delete(this.todos, index)
    },
    toggleTodoComplete(id) {
      this.todos = this.todos.map(t => {
        if (t.id === id) {
          t.completed = !t.completed;
          return t;
        }
        return t;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.todo-form {
  max-width: 25em;
  min-width: 25em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1em;

  input {
    background: white;
    margin: 0 auto;
    min-width: 22em;
    font-size: 1em;
    color: dimgray;
  }
}

.todo-list {
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  list-style: none;
  background: gray;
  padding: 1em;
  max-width: 25em;
  min-width: 25em;
  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75);

  li {
    border: none;
    background: gray;
    border-bottom: 0.05em dashed white;
    &:hover > button {
      opacity: 1;
    }
  }

  .button-complete {
    opacity: 0;
    width: 1.4em;
    height: 1.4em;
    padding: 0;
    border-radius: 50%;
    border: 0.1em solid white;
    cursor: pointer;
    outline: none;
    background: transparent;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease-in-out;
  }

  .button-complete span {
    display: inline-block;
    margin: 0;
    width: 0.9em;
    height: 0.9em;
    border-radius: 50%;
    background: gray;
  }

  .button-complete span.completed {
    background: white;
  }

  input[type="text"] {
    background: none;
    font-size: 1em;
    border: none;
    outline: none;
    color: white;
    box-sizing: border-box;
    min-height: 1em;
    min-width: 20em;
    padding: 0.3em;
    &:focus {
      color: white;
      background: none;
      outline: none;
    }
  }

  button.button-delete {
    min-height: 1em;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    font-size: 0.8em;
    cursor: pointer;
    outline: none;
    color: white;
    background: none;
    border: none;
    box-sizing: content-box;
    &:hover {
      color: coral;
    }
  }
}

.completed {
  text-decoration: line-through;
}
</style>
