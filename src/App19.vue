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
          <p class="help is-danger" v-text="errors.get('name')"></p>
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
          <p class="help is-danger" v-text="errors.get('description')"></p>
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
var MockAdapter = require('axios-mock-adapter');


// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

mock.onPost('/projects').reply(422, {
        name: ["The name field is required."],
        description: ["The description field is required."]
});

class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field])
        {
          return this.errors[field][0];
        }
    }

    record(errors) {
        this.errors = errors;
    }
}

export default {
    name: 'app',
    components: { SectionHero },
    data () {
        return {
            name: '',
            description: '',
            errors: new Errors()
        }
    },
    methods: {
        onSubmit () {
            // axios.post('/projects', this.$data);
            axios.post('/projects', {
                name: this.name,
                description: this.description
            })
            .then(response => alert('Success'))
            .catch(error => this.errors.record(error.response.data));
        }
    }
}
</script>

<style>
</style>
