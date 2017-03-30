<template>
  <div>
    <SectionHero>
      <template slot="title">Custom Input Components</template>
      <template slot="subtitle">v-model 其實是拆解為 :value 和 @input 兩個行為，可依此概念客製出包含各種格式檢查的 input component、$event、$refs</template>
    </SectionHero>
    <div class="box">
      <div>
        <p>v-model</p>
        <input type="text" v-model="coupon">
      </div>
      <div>
        <p>:value & @input</p>
        <input type="text" :value="coupon" @input="coupon = $event.target.value">
      </div>
      <div>
        <p>component with custom input with validation</p>
        <coupon v-model="coupon"></coupon>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHero from './components/SectionHero.vue'
import coupon from './components/Coupon.vue'
export default {
    name: 'app',
    components: { SectionHero, coupon },
    data () {
        return {
            coupon: 'FREEBIE'
        }
    }
}
</script>

<style>
</style>
