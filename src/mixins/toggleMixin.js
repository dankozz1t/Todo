export default {
  props: {
    isShow: Boolean,
    default: () => false,
  },
  methods: {
    closeModal() {
      this.$emit("update:isShow", false);
    },
  },
};
