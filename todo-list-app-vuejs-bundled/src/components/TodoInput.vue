<template>
    <div>
        <input v-model="newTodo">
        <button v-on:click="addTodo">Add</button>
    </div>
</template>

<script>
export default {
  name: 'TodoInput',
  methods: {
    addTodo() {
      this.$emit('clickedadd', this.newTodo);
    },
  },
  data() {
    return {
      newTodo: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
