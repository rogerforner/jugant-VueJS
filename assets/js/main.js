Vue.component('mis-tareas', {
    props: ['listado'],
    template: '#mis-tareas-template',
});

new Vue({
    el: 'main',
    data: {
        tareas: [
            {titulo: 'tarea1'},
            {titulo: 'tarea2'},
            {titulo: 'tarea3'},
            {titulo: 'tarea4'},
            {titulo: 'tarea5'},
        ]
    }
});