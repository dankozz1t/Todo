import { createStore } from "vuex";
import { todoModules } from "./todoModules";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todo: todoModules,
  },
});
