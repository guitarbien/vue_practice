window.Event = new Vue();

Vue.component('coupon', {
    template: `
        <input type="text" placholder="Enter your coupon code" @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {
            this.$emit('applied');
            Event.$emit('applied');
        }
    }
});


new Vue({
    el: "#root",
    data: {
        couponApplied: false
    },
    methods: {
        onCouponApplied: function() {
            this.couponApplied = true;
        }
    },
    created: function() {
        Event.$on('applied', function() {
            alert('received');
        });
    }
});
