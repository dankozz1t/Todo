<template>
  <div class="counter">
    <p>Like - {{ likes }}</p>
    <p>Dislike - {{ dislikes }}</p>
    <div>
      <MyButton @:click="clickLike">Like</MyButton>
      <MyButton @:click="clickDislike">Dislike</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";

export default {
  components: {
    MyButton,
  },
  name: "CounterItem",

  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    clickLike() {
      this.likes += 1;
    },
    clickDislike() {
      this.dislikes += 1;
    },
  },
};
</script>

<style lang="scss">
.counter {
  padding: 20px;
}
</style>
