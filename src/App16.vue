<template>
  <div>
      <SectionHero>
          <template slot="title">Component 簡單範例</template>
          <template slot="subtitle">Single File Component</template>
      </SectionHero>
      <div id="app">
        <message>Hello There</message>
        <message>Hello Here</message>
      </div>
  </div>
</template>

<script>
import SectionHero from './components/SectionHero.vue';
import Message from './components/Message.vue';

export default {
  name: 'app',
  components: { Message, SectionHero },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
