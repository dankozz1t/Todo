<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ButtonItem> butttton </ButtonItem>
</template>

<script>
import ButtonItem from './components/ButtonItem.vue'

export default {
  name: 'App',
  components: {
    ButtonItem
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
