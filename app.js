new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false
    },
    methods: {
        pegar: function() {
            this.health -= 10;
            if (this.health <= 0)
                this.ended = true;
        },
        resetear: function() {
            this.ended = false;
            this.health = 100;
        }
    },
    computed: {

    }
});