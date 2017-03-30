<template>
    <input type="text" :value="value" @input="updateCode($event.target.value)" ref="input">
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            updateCode(code) {
                // Validation
                if ('ALLFREE' === code) {
                    alert('This coupon is no longer valid. Sorry!');
                    this.$refs.input.value = code = '';
                }

                this.$emit('input', code);
            }
        }
    }
</script>

<style>
</style>