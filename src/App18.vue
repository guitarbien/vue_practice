<template>
    <div>
      <SectionHero>
        <template slot="title">Ajax 範例</template>
        <template slot="subtitle">使用 axios 和 ES6 Arrow function</template>
      </SectionHero>

      <div class="box">{{ username }}</div>
    </div>
</template>

<script>
import SectionHero from './components/SectionHero.vue';
var axios = require('axios');

export default {
  name: 'app',
  components: { SectionHero },
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
