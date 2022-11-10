<template>
  <main class="/">
    <MyContainer>
      <MyModal v-model:isShow="isShow">
        <FormCreateTodo @create="createTodo" />
      </MyModal>
      <MyButton class="home__btnCreate" type="button" @click="openModal"
        >Create Todo</MyButton
      >

      <b-row class="home__sort">
        <b-col cols="12" md="6" order-md="2">
          <MySelect
            class="home__select"
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
            :options="sortOptions"
          ></MySelect>
        </b-col>

        <b-col cols="12" md="6" order-md="1">
          <MyInput
            class="home__input"
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="search todo by title"
          ></MyInput>
        </b-col>
      </b-row>

      <TodoList :todos="sortedBySearch" @removeTodo="removeTodo" />
    </MyContainer>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import FormCreateTodo from "../components/FormCreateTodo.vue";
import TodoList from "../components/TodoList.vue";

export default {
  components: {
    FormCreateTodo,
    TodoList,
  },

  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    ...mapActions({
      getTodo: "todo/getTodo",
    }),
    ...mapMutations({
      setSearchQuery: "todo/setSearchQuery",
      setSelectedSort: "todo/setSelectedSort",
      setTodo: "todo/setTodo",
    }),

    openModal() {
      this.isShow = true;
    },

    createTodo(todo) {
      this.todos.push(todo);
    },

    removeTodo(todo) {
      this.setTodo(this.todos.filter(({ id }) => id !== todo.id));
    },
  },

  mounted() {
    this.getTodo();
  },

  computed: {
    ...mapState({
      todos: (state) => state.todo.todos,
      searchQuery: (state) => state.todo.searchQuery,
      selectedSort: (state) => state.todo.selectedSort,
      sortOptions: (state) => state.todo.sortOptions,
    }),
    ...mapGetters({
      sortedTodo: "todo/sortedTodo",
      sortedBySearch: "todo/sortedBySearch",
    }),
  },
};
</script>

<style lang="scss">
.home__btnCreate {
  margin: 10px 0;

  width: 100%;
}

.home__sort {
  margin: 10px 0;
}

.home__select {
  height: 50px;
  width: 100%;
}

.home__input {
  width: 100%;
  height: 100%;
}
</style>
