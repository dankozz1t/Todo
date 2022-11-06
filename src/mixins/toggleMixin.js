export default {
  props: {
    isShow: Boolean,
    default: () => false,
    require,
  },
  methods: {
    closeModal() {
      this.$emit("update:isShow", false);
    },
  },
};
