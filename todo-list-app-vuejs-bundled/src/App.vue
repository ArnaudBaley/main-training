<template>
  <div id="app">
        <h1>{{ message }}</h1>

        <TodoInput @clickedadd="addItemToList"></TodoInput>

        <h3>List :</h3>
        <TodoItem @clickedremoved="removeItemFromList" v-for="item in todoList"
         v-bind:todo="item" :key="item.id"></TodoItem>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoItem,
  },
  data() {
    return {
      message: 'todo-list-app-vuejs-bundled',
      todoList: [],
      index: 0,
    };
  },
  methods: {
    addItemToList(item) {
      const todo = {
        id: this.index,
        text: item,
      };
      this.todoList.push(todo);
      this.index += 1;
    },
    removeItemFromList(itemToDeleteId) {
      this.todoList = this.todoList.filter((item) => item.id !== itemToDeleteId);
    },
  },
};
</script>

<style></style>
