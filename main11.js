Vue.component('tabs', {
    template:`
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
                        <a href="#" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="tab-details">
                <slot></slot>
            </div>
        </div>
    `,
    data: function() {
        return {
            tabs: []
        };
    },
    created: function() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab: function(selectTab) {
            this.tabs.forEach(function(tab) {
                tab.isActive = (tab.name == selectTab.name);
            });
        }
    }
});

Vue.component('tab', {
    template: `<div><slot></slot></div>`,
    props: {
        name: { required: true },
        selected: { default: false }
    },
    data: function() {
        return {
            isActive: false
        };
    },
    mounted: function() {
        this.isActive = this.selected;
    }
});

new Vue({
    el: '#root'
});
