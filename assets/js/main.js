Vue.component('candidato', {
    // props: ['nombre', 'correoe', 'imagen'],
    props: {
        nombre: {
            type: [String, Array], // null = *
            required: true
        },
        correoe: {
            type: String,
            default: 'default@email.example'
        },
        imagen: String,
        location: {
            type: Object,
            default() {
                return {
                    ciudad: 'Tortosa'
                }
            }
        }
    },
    template: '#candidato-template',
});

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: []
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=50')
            .then((response) => {
                this.candidatos = response.data.results;
            });
        }
    }
});