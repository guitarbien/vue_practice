Vue.component('progress-view', {
    // template: '<div>abc</div>',
    data: function() {
        return {
            completionRate: 50
        };
    }
});

new Vue({
    el: "#root"
});
