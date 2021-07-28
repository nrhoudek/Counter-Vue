new Vue({
    el: ".counter-cont",
    data: {
        currentNumber : 0
    },
    methods: {
        increase: function() {
            this.currentNumber++;
        },
        decrease: function() {
            this.currentNumber--;
        },
    }
});