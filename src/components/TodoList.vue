<template>
  <ul class="todo" v-if="todos.length > 0">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @removeTodo="$emit('removeTodo', todo)"
    />
  </ul>
  <h2 v-else>List todo is empty</h2>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },

  props: {
    todos: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
.todo {
  text-align: start;
}
</style>
