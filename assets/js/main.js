Vue.component('autor', {
    props: ['nombre'],
    mounted() {
        console.log(this.nombre);
    },
    template: `
        <div>
            <h2>{{ nombre }}</h2>
            <button @click="cambiarProp">Cambiar nombre</button>
        </div>
    `,
    methods: {
        cambiarProp() {
            this.nombre = this.toUpperCase();
        }
    }
});

new Vue({
    el: 'main',
    data: {
        autor: 'Roger'
    },
});