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
  background-color: var(--main-accent-cl);
  color: var(--main-text-cl);
  padding: 15px;
  border-radius: 5px;
  outline: none;
  border: none;

  &::placeholder {
    color: var(--secondary-accent-cl);
  }
}
</style>
