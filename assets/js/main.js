new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola mundo ^^',
    },
    computed: {
        mensajeAlReves() {
            return this.mensaje.split('').reverse().join('');
        }
    }
});