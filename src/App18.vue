<template>
    <div class="box">{{ username }}</div>
</template>

<script>
var axios = require('axios');

export default {
  name: 'app',
  data () {
    return {
        username: ''
    }
  },
  mounted () {
    axios.get('https://api.github.com/users/guitarbien')
        .then(response => {
           this.username = response.data.name;
        });
    }
}
</script>

<style>
</style>
