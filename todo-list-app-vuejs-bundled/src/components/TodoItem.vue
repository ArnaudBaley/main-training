<template>
        <div>
            <span class="item">{{ todo.text }}</span>
            <button v-on:click="removeTodo">Remove</button>
        </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  data() {
    return {
      item: this.todo,
    };
  },
  methods: {
    removeTodo() {
      this.$emit('clickedremoved', this.item.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
    background-color: grey;
}
</style>
