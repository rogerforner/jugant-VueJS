new Vue({
    el: 'main',
    data: {
        tareas: [
            {titulo: 'tarea 1', completado: false},
            {titulo: 'tarea 2', completado: false},
            {titulo: 'tarea 3', completado: false},
            {titulo: 'tarea 4', completado: false},
            {titulo: 'tarea 5', completado: false},
            {titulo: 'tarea 6', completado: false},
        ]
    },
    methods: {
        completarTarea(tarea) {
            tarea.completado = !tarea.completado;
        }
    },
    computed: {
        tareasCompletadas() {
            return this.tareas.filter((tarea) => tarea.completado);
        }
    }
});