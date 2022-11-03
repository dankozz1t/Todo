<template >
    <div>
        <p>Like - {{ likes }} </p>
        <p>Dislike - {{ dislikes }} </p>
    </div>

    <button @:click="clickLike">Like</button>
    <button @:click="clickDislike">Dislike</button>
</template>


<script>
export default {
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
</script>
<style lang="">
    
</style>