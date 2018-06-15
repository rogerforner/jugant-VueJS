new Vue({
    el: 'main',
    mounted() {
        this.cargarPersonas();
    },
    data: {
        personas: []
    },
    methods: {
        cargarPersonas() {
            // GET
            this.$http.get('https://randomuser.me/api/?results=50').then(response => {
                this.personas = response.body.results;
            });
        }
    }
});