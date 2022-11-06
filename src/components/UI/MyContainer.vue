<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyContainer",
};
</script>

<style lang="scss" scoped>
@import "src/styles/_mixin.scss";
.container {
  margin: 0 auto;
  max-width: 100%;

  padding-left: 16px;
  padding-right: 16px;

  @include media(mobile-only) {
    max-width: $mobile;
  }

  @include media(tablet) {
    max-width: 100%;
  }

  @include media(desktop) {
    max-width: $desktop;
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
