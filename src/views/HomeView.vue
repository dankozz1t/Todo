<template >
    <main>
        <div class="container">

            <CounterItem />
            <FormCreateTodo :onSubmit="handleSubmitForm" />
            <TodoList :todos="todos" />
        </div>

    </main>
</template>

<script>
import CounterItem from '../components/CounterItem.vue';
import FormCreateTodo from '../components/FormCreateTodo.vue';
import TodoList from '../components/TodoList.vue';

import dataTodos from "../services/todos.json"

export default {
    components: {
        CounterItem,
        FormCreateTodo,
        TodoList
    },
    data() {
        return {
            todos: dataTodos,
        };
    },
    methods: {
        handleSubmitForm(todo) {
            console.log(todo);
            this.todos.push(todo);
        }
    },
}
</script>

<style lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>