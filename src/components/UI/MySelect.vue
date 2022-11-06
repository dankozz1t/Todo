<template lang="">
  <select :value="modelValue" @change="changeOption">
    <option v-for="opt in options" :key="opt.value" :value="opt.value">
      {{ opt.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: "MySelect",
  props: {
    modelValue: { type: String },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style lang="scss"></style>
