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
            axios.get('https://randomuser.me/api/?results=50')
            .then((response) => {
                this.personas = response.data.results;
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
});