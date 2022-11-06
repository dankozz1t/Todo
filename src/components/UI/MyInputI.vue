<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss">
.input {
  background-color: cadetblue;
  color: black;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: none;
}
</style>
