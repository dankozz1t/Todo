<template>
  <main>
    <div class="container">
      <CounterItem />
      <MyModal v-model:isShow="isShow">
        <FormCreateTodo @create="createTodo" />
      </MyModal>
      <MyButton type="button" @click="openModal">Create Todo</MyButton>
      <MySelect v-model="selectedSort" :options="sortOptions"></MySelect>
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
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "Sort by title" },
        { value: "body", name: "Sort by body" },
        { value: "isActive", name: "Sort by status" },
        { value: "id", name: "Sort by id" },
      ],
    };
  },
  methods: {
    openModal() {
      this.isShow = true;
    },

    createTodo(todo) {
      this.todos.push(todo);
    },

    removeTodo(todo) {
      this.todos = this.todos.filter(({ id }) => id !== todo.id);
    },
  },
  watch: {
    selectedSort(newSelectedSort) {
      console.log("newSelectedSort: ", newSelectedSort);
      if (newSelectedSort === "isActive" || newSelectedSort === "id") {
        return this.todos.sort(
          (a, b) => Number(a[newSelectedSort]) - Number(b[newSelectedSort])
        );
      }

      return this.todos.sort((a, b) =>
        a[newSelectedSort]?.localeCompare(b[newSelectedSort])
      );
    },
  },
  computed: {},
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
