<template>
  <main id="app">
    <img alt="Vue logo" class="brand" src="./assets/logo.png" />
    <h1 class="title">Vue Todo List</h1>
    <TodoList />
    <p class="github-link">
      <a href="https://github.com/ruegen/vue-todo">github repo</a>
    </p>
  </main>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "app",
  components: {
    TodoList
  }
};
</script>

<style>
*,
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  background: dimgray;
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
}

main {
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
}

.brand {
  width: 8em;
}

h1.title {
  color: #aaa;
}

.github-link {
  text-align: center;
  color: white;
  font-size: 0.5em;
}
</style>
