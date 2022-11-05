<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HomeView></HomeView>
</template>

<script>
import HomeView from "./views/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeView,
  },
};
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
