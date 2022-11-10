<template>
  <button class="my-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: String,
    default: function () {
      return "default button";
    },
  },
};
</script>

<style lang="scss" scoped>
.my-btn {
  display: inline-block;
  background-color: var(--secondary-accent-cl);
  font-weight: 700;

  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;

  &:active {
    color: white;
    background-color: var(--secondary-accent-cl);
  }
}
</style>
