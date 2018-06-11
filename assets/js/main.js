vm = new Vue({
    el: 'main',
    data: {
        laborales: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        tareas: [
            {nombre: 'tarea 1', prioridad: 'baja'},
            {nombre: 'tarea 2', prioridad: 'alta'},
            {nombre: 'tarea 3', prioridad: 'alta'},
        ],
        persona: {
            nombre: 'Roger',
            profesion: 'padawan',
            ciudad: 'Tortosa'
        }
    }
});