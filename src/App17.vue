<template>
    <div>
        <SectionHero>
            <template slot="title">Counter 簡單範例</template>
            <template slot="subtitle">webpack config 設定多個 entry point，輸出時直接用 entry name 作為檔名</template>
        </SectionHero>

        <counter></counter>
    </div>
</template>

<script>
import SectionHero from './components/SectionHero.vue';
import Counter from './components/Counter.vue';

export default {
  name: 'app',
  components: { Counter, SectionHero },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
