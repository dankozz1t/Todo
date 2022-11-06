<template>
  <main class="/">
    <MyContainer>
      <MyModal v-model:isShow="isShow">
        <FormCreateTodo @create="createTodo" />
      </MyModal>
      <MyButton class="home__btnCreate" type="button" @click="openModal"
        >Create Todo</MyButton
      >
      <div class="home__sort">
        <MyInput
          v-model="searchQuery"
          placeholder="search todo by title"
        ></MyInput>

        <MySelect v-model="selectedSort" :options="sortOptions"></MySelect>
      </div>
      <TodoList :todos="sortedBySearch" @removeTodo="removeTodo" />
    </MyContainer>
  </main>
</template>

<script>
import FormCreateTodo from "../components/FormCreateTodo.vue";
import TodoList from "../components/TodoList.vue";

import dataTodos from "../services/todos.json";

export default {
  components: {
    FormCreateTodo,
    TodoList,
  },
  data() {
    return {
      todos: dataTodos,
      isShow: false,
      searchQuery: "",
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
  computed: {
    sortedTodo() {
      if (this.selectedSort === "isActive" || this.selectedSort === "id") {
        return [...this.todos].sort(
          (a, b) => Number(a[this.selectedSort]) - Number(b[this.selectedSort])
        );
      }

      return [...this.todos].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
    sortedBySearch() {
      return [...this.todos].filter(({ title }) =>
        title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style lang="scss">
.home__btnCreate {
  margin: 10px 0;

  width: 100%;
}

.home__sort {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
}
</style>
