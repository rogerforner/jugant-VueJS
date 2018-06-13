new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola mundo ^^',

        nuevaTarea: null,
        tareas: [
            {
                titulo: 'Tarea 1',
                prioridad: true,
                antiguedad: 5
            },
            {
                titulo: 'Tarea 2',
                prioridad: false,
                antiguedad: 15
            },
            {
                titulo: 'Tarea 3',
                prioridad: true,
                antiguedad: 10
            }
        ]
    },
    computed: {
        mensajeAlReves() {
            return this.mensaje.split('').reverse().join('');
        },

        tareasConPrioridad() {
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasPorAntiguedad() {
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
});