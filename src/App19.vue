<template>
  <div>
    <SectionHero>
      <template slot="title">Object-Oriented Forms 所有檢查都由後端 API 處理 (此處是以 mock 設定)</template>
      <template slot="subtitle">ES6 Class、<a href="https://vuejs.org/v2/guide/forms.html#Modifiers">Event Modifier</a>、Mock Adapter、$event.target.name、Clone object => Object.assign({}, this);</template>
    </SectionHero>

    <form action="" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
      <div class="box">

        <div class="field">
          <p class="control">
            <label class="radio">
              <input type="radio" name="question" :value="form.radioYes" v-model="form.picked">
              模擬 API 成功
            </label>
            <label class="radio">
              <input type="radio" name="question" :value="form.radioNo" v-model="form.picked">
              模擬 API 失敗
            </label>
          </p>
        </div>

        <div class="field">
          <label class="label">Project Name</label>
          <p class="control has-icon has-icon-right">
          <!--  is-success -->
            <input class="input" :class="{ 'is-danger': nameIsDanger }" type="text" name="name" placeholder="Project Name" v-model="form.name">
            <span class="icon is-small">
              <i class="fa fa-check"></i>
            </span>
          </p>
          <p class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></p>
        </div>

        <div class="field">
          <label class="label">Project Description</label>
          <p class="control has-icon has-icon-right">
          <!-- is-danger -->
            <input class="input" :class="{ 'is-danger': descriptionIsDanger }" type="text" name="description" placeholder="Project Description" v-model="form.description">
            <span class="icon is-small">
              <i class="fa fa-warning"></i>
            </span>
          </p>
          <p class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></p>
        </div>

        <div class="field is-grouped">
          <p class="control">
            <button class="button is-primary" :disabled="form.errors.any()">Submit</button>
          </p>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
import SectionHero from './components/SectionHero.vue';
var axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance

class Errors {
    constructor() {
        this.errors = {};
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
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

    clear(field) {
        if (field) {
            delete this.errors[field];
            return;
        }

        this.errors = {};
    }
}

class Form {
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    data() {
        // clone the object
        let data = Object.assign({}, this);

        delete data.originalData;
        delete data.errors;

        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = null;
        }

        this.errors.clear();
    }

    submit(requestType, url) {
        return new Promise((resolve, reject) {
            // axios.post('/projects', this.$data);
            axios[requestType](url, this.data())
                .then(response => => {
                    this.onSuccess(response.data);
                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);
                    reject(error.response.data);
                });
        });

    }

    onSuccess(data) {
        alert(data.message);
        this.reset();
    }

    onFail(errors) {
        this.errors.record(errors);
    }
}

export default {
    name: 'app',
    components: { SectionHero },
    data () {
        return {
            form: new Form({
                radioYes: 'yes',
                radioNo: 'no',
                picked: 'no',
                name: '',
                description: ''
            })
        }
    },
    methods: {
        onSubmit () {
            // decide axios result
            this.setResult();

            this.form.submit('post', '/projects')
                .then(data => console.log(data))
                .catch(error => console.log(error));
        },
        setResult() {
            let mock = new MockAdapter(axios);

            if (this.form.picked == 'yes')
            {
                mock.onPost('/projects').reply(200, {
                    message: "Added"
                });
            }
            else
            {
                mock.onPost('/projects').reply(422, {
                    name: ["The name field is required."],
                    description: ["The description field is required."]
                });
            }
        }
    },
    computed: {
        nameIsDanger() {
            return this.form.errors.has('name');
        },
        descriptionIsDanger() {
            return this.form.errors.has('description');
        }
    }
}
</script>

<style>
</style>
