new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,

        tareas: [
            'Aprender Vue.js',
            'Aprender ES6',
            'Firebase'
        ],
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    }
});