<template>
  <li class="todo__item">
    <div>
      <h2 class="todo__title">
        <span
          :class="['status', todo.isActive ? 'status--green' : 'status--red']"
        ></span>
        {{ todo.title }}
      </h2>
      <p class="todo__body">{{ todo.body }}</p>
    </div>
    <MyButton @click="$emit('removeTodo', todo)" type="button">Delete</MyButton>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
.todo__item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 15px;
  border-radius: 5px;
  background-color: var(--main-accent-cl);

  transition: background-color var(--transition-time) var(--transition-cubic);

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  &:hover {
    background-color: var(--main-light-accent-cl);
  }
}

.status {
  display: inline-block;
  width: 10px;
  height: 10px;

  border-radius: 50%;

  &--green {
    background-color: var(--online-cl);
  }

  &--red {
    background-color: var(--offline-cl);
  }
}
</style>
