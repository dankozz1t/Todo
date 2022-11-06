<template>
  <button class="btn">
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
.btn {
  display: inline-block;
  background-color: var(--secondary-accent-cl);

  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}
</style>
