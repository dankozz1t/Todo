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


<style lang="scss">
#app {
  text-align: center;
}
</style>
