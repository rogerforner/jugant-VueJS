new Vue({
    el: 'main',
    data: {
        mostrar: true,
        mensajes: {
            transicion: 'transición CSS con Vue',
            animación: 'Animaciones CSS con Vue',
            animationCustom: 'Animaciones CSS personalizadas con Vue',
            cargaPagina: 'transiciones CSS en el renderizado inicial, con Vue',
            entreElementos: 'Transiciones CSS entre elementos, con Vue'
        }
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