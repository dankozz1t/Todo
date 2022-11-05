<template>
  <main>
    <div class="container">
      <CounterItem />
      <ModalWindow v-model:isShow="isShow">
        <FormCreateTodo @create="createTodo" />
      </ModalWindow>
      <ButtonItem type="button" @click="openModal">Create Todo</ButtonItem>
      <TodoList :todos="todos" @removeTodo="removeTodo" />
    </div>
  </main>
</template>

<script>
import CounterItem from "../components/CounterItem.vue";
import FormCreateTodo from "../components/FormCreateTodo.vue";
import TodoList from "../components/TodoList.vue";

import dataTodos from "../services/todos.json";

export default {
  components: {
    CounterItem,
    FormCreateTodo,
    TodoList,
  },
  data() {
    return {
      todos: dataTodos,
      isShow: false,
    };
  },
  methods: {
    openModal() {
      this.isShow = true;
    },

    createTodo(todo) {
      console.log(todo);
      this.todos.push(todo);
    },

    removeTodo(todo) {
      this.todos = this.todos.filter(({ id }) => id !== todo.id);
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
