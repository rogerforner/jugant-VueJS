Vue.component('mis-tareas', {
    props: ['tareas'],
    template: `<ul><li v-for="tarea in tareas">{{ tarea.title }}</li></ul>`
});

Vue.component('las-tareas', {
    template: `<ul><li v-for="tarea in tareasAjax">{{ tarea.title }}</li></ul>`,
    mounted() {
        this.cargarTareas();
    },
    data() {
        return {
            tareasAjax: []
        }
    },
    methods: {
        cargarTareas() {
            // GET
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.tareasAjax = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },
    }
});

new Vue({
    el: 'main',
    mounted() {
        this.cargarTareas();
    },
    data: {
        tareasAjax: [],
        tareasLocales: [
            {title: 'Tarea 1'},
            {title: 'Tarea 2'},
            {title: 'Tarea 3'}
        ]
    },
    methods: {
        cargarTareas() {
            // GET
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.tareasAjax = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },
    }
});