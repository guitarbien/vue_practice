Vue.component('coupon', {
    template: `
        <input type="text" placholder="Enter your coupon code" @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {
            alert('gogo');
        }
    }
});


new Vue({
    el: "#root",
    methods: {
        onCouponApplied: function() {
            alert('coupon applied');
        }
    }
});
