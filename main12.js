Vue.component('coupon', {
    template: `
        <input type="text" placholder="Enter your coupon code" @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {
            this.$emit('applied');
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
    }
});
