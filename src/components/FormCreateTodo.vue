<template>
  <form @submit.prevent="createTodo">
    <MyInput v-model="todo.title" placeholder="enter title for todo" required />
    <MyInput v-model="todo.body" placeholder="enter body for todo" />

    <MyButton type="submit">Add Todo</MyButton>
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
      this.todo.isActive = true;
      this.$emit("create", this.todo);
      this.todo = { title: "", body: "", id: null };
    },
  },
};
</script>

<style lang="scss"></style>
