<template>
    <form @submit.prevent="onSubmit({ title, body })">

        <input type="text" v-model="title" placeholder="enter title for todo">
        <textarea v-model="body" placeholder="enter body for todo"></textarea>
        <ButtonItem type="submit">Add Todo</ButtonItem>
    </form>
</template>

<script>
import ButtonItem from './ButtonItem.vue';

export default {
    data() {
        return {
            title: "",
            body: ""
        };
    },

    props: {
        onSubmit: {
            type: Function,
        }
    },

    components: { ButtonItem }
}
</script>

<style lang="scss">

</style>