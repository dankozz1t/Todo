import dataTodos from "../services/todos.json";

export const todoModules = {
  state: () => ({
    todos: [],
    searchQuery: "",
    selectedSort: "",
    sortOptions: [
      { value: "title", name: "Sort by title" },
      { value: "body", name: "Sort by body" },
      { value: "isActive", name: "Sort by status" },
      { value: "id", name: "Sort by id" },
    ],
  }),
  getters: {
    sortedTodo(state) {
      if (state.selectedSort === "isActive" || state.selectedSort === "id") {
        return [...state.todos].sort(
          (a, b) =>
            Number(a[state.selectedSort]) - Number(b[state.selectedSort])
        );
      }

      return [...state.todos].sort((a, b) =>
        a[state.selectedSort]?.localeCompare(b[state.selectedSort])
      );
    },

    sortedBySearch(state, getters) {
      return getters.sortedTodo.filter(({ title }) =>
        title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setTodo(state, todos) {
      state.todos = todos;
    },

    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },

    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },

    setSortOptions(state, sortOptions) {
      state.sortOptions = sortOptions;
    },
  },

  actions: {
    getTodo({ commit }) {
      commit("setTodo", dataTodos);
    },
  },

  modules: {},

  namespaced: true,
};
