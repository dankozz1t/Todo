<template>
  <form @submit.prevent="createTodo">
    <b-row align-v="center" class="gx-5 gy-2">
      <b-col cols="12" md="4">
        <MyInput
          v-model="todo.title"
          placeholder="enter title for todo"
          required
        />
      </b-col>
      <b-col cols="12" md="4">
        <MyInput v-model="todo.body" placeholder="enter body for todo" />
      </b-col>
      <b-col cols="12" md="4">
        <MyButton type="submit">Add Todo</MyButton>
      </b-col>
    </b-row>
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
