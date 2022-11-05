<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonItem",
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
  background-color: #5479d6;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}
</style>
