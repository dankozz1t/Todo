<template >
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: "ButtonItem",
  props: {
    type: String,
    default: function () { return 'default button' }  
  }
    
}
</script>

<style lang="scss" scoped>
    .btn{
      display: inline-block;
      background-color: chocolate;
    }
</style>