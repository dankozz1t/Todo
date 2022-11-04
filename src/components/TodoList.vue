<template>
    <ul class="todo">
        <li class="todo__item" v-for="todo in todos" :key="todo.id">

            <h2 class="todo__title">
                <span class="status" :class="todo.isActive ? 'status--green' : 'status--red'"></span>
                {{ todo.title }}
            </h2>
            <p class="todo__body">{{ todo.body }}</p>


        </li>
    </ul>
</template>

<script>



export default {
    props: {
        todos: {
            type: Array,
            default() { return [] },
        },
    },
};
</script>

<style lang="scss">
.todo {
    text-align: start;
}

.todo__item {
    width: 300px;
    padding: 15px;
    border-radius: 5px;
    background-color: cadetblue;

    transition: background-color var(--transition-time) var(--transition-cubic);

    &:not(:last-child) {
        margin-bottom: 5px;
    }

    &:hover {
        background-color: #6eabad;
    }
}

.status {
    display: inline-block;
    width: 10px;
    height: 10px;

    border-radius: 50%;

    &--green {
        background-color: green;
    }

    &--red {
        background-color: red;
    }

}
</style>
