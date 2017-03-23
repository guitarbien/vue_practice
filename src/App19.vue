<template>
  <div>
    <SectionHero>
      <template slot="title">Object-Oriented Forms</template>
      <template slot="subtitle">ES6 Class、<a href="https://vuejs.org/v2/guide/forms.html#Modifiers">Event Modifier</a></template>
    </SectionHero>

    <form action="" @submit.prevent="onSubmit">
      <div class="box">
        <div class="field">
          <label class="label">Project Name</label>
          <p class="control has-icon has-icon-right">
          <!--  is-success -->
            <input class="input" type="text" placeholder="Project Name" v-model="name">
            <span class="icon is-small">
              <i class="fa fa-check"></i>
            </span>
          </p>
          <!-- <p class="help is-danger">The name field is invalid</p> -->
        </div>

        <div class="field">
          <label class="label">Project Description</label>
          <p class="control has-icon has-icon-right">
          <!-- is-danger -->
            <input class="input" type="text" placeholder="Project Description" v-model="description">
            <span class="icon is-small">
              <i class="fa fa-warning"></i>
            </span>
          </p>
          <!-- <p class="help is-danger">The description field is invalid</p> -->
        </div>

        <div class="field is-grouped">
          <p class="control">
            <button class="button is-primary">Submit</button>
          </p>
        </div>

      </div>
    </form>
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
        name: '',
        description: '',
        errors: {}
    }
  },
  methods: {
    onSubmit () {
        // axios.post('/projects', this.$data);
        axios.post('/projects', {
            name: this.name,
            description: this.description
        })
        .catch(error => console.log(error.response.data));
    }
  }
}
</script>

<style>
</style>
