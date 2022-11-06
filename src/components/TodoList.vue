<template>
  <ul class="todo" v-if="todos.length > 0">
    <transition-group name="todo--animation">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @removeTodo="$emit('removeTodo', todo)"
      />
    </transition-group>
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

.todo--animation-item {
  display: inline-block;
  margin-right: 10px;
}

.todo--animation-enter-active,
.todo--animation-leave-active {
  transition: all 0.4s ease;
}

.todo--animation-enter-from,
.todo--animation-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.todo--animation-move {
  transition: transform 0.4s ease;
}
</style>
