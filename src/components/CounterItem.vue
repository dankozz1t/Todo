<template >
    <div>
        <p>Like - {{ likes }} </p>
        <p>Dislike - {{ dislikes }} </p>
    </div>
    <ButtonItem @:click="clickLike">Like</ButtonItem>
    <ButtonItem @:click="clickDislike">Dislike</ButtonItem>
</template>

<script>
import ButtonItem from './ButtonItem.vue';

export default {
    components: {
        ButtonItem
    },

    data() {
        return {
            likes: 0,
            dislikes: 0,
        }
    },
    methods: {
        clickLike() {
            this.likes += 1;
        },
        clickDislike() {
            this.dislikes += 1;
        }
    }

}
</script >

<style lang="scss">

</style>