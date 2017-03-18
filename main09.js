Vue.component('message', {
    props: ['title', 'body'],
    data: function() {
        return {
            isVisible: true
        };
    },
    template: `
        <article class="message" v-show="isVisible">
          <div class="message-header">
            {{ title }}
            <button @click="hideModal" class="delete"></button>
          </div>

          <div class="message-body">
            {{ body }}
          </div>
        </article>
    `,
    methods: {
        hideModal: function() {
            this.isVisible = false;
        }
    }
});

new Vue({
    el: '#root'
});
