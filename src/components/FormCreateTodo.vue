<template>
  <form @submit.prevent="createTodo">
    <InputItem
      v-model="todo.title"
      placeholder="enter title for todo"
      required
    />
    <InputItem v-model="todo.body" placeholder="enter body for todo" />

    <ButtonItem type="submit">Add Todo</ButtonItem>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: { title: "", body: "", id: null },
    };
  },
  methods: {
    createTodo() {
      this.todo.id = Date.now();
      this.$emit("create", this.todo);
      this.todo = { title: "", body: "", id: null };
    },
  },
};
</script>

<style lang="scss"></style>
