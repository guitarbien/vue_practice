<template>
    <div class="box">
        <h1 class="title is-1">Count : {{ count }}</h1>
        <p><a @click="count += 1" class="button is-success">Increment</a></p>
    </div>
</template>

<script>
    export default {
        data() {
            return { count: 0 };
        }
    }
</script>
