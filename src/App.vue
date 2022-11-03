<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <CounterItem />
</template>

<script>

import CounterItem from './components/CounterItem.vue';


export default {
  name: 'App',
  components: {
    CounterItem
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
