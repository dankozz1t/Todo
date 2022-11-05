<template>
  <div class="counter">
    <p>Like - {{ likes }}</p>
    <p>Dislike - {{ dislikes }}</p>
    <div>
      <ButtonItem @:click="clickLike">Like</ButtonItem>
      <ButtonItem @:click="clickDislike">Dislike</ButtonItem>
    </div>
  </div>
</template>

<script>
import ButtonItem from "./UI/ButtonItem.vue";

export default {
  components: {
    ButtonItem,
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
