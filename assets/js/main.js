new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola mundo ^^'
    },
    beforeUpdate() {
        console.log('Before update: ', this.mensaje);
    },
    updated() {
        console.log('Updated: ', this.mensaje);
    },
    methods: {
        alReves() {
            this.mensaje = this.mensaje.split('').reverse().join('');
        }
    },
    computed: {
        mensajeMayusculas() {
            return this.mensaje.toUpperCase();
        }
    }
});