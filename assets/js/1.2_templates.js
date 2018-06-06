/*
|-------------------------------------------------------------------------------
| Instáncia de Vue
|-------------------------------------------------------------------------------
| Generar una instáncia que tenga como referencia el elemento HTML con id="app"
|
*/

const app = new Vue({
    // Referenciar el elemento html por su id.
    el: '#app',

    // Modelo (datos/variables inicializadas)
    data: {
        user: {
            name: null,
            password: null
        },
        urlPasswordChange: 'http://localhost:8080',
        errors: []
    },

    // Propiedades computadas.
    // Éstas són como métodos, aunque utilizadas para hacer más simple la lógica
    // en las plantillas. No es lo mismo insertar en la plantilla toda la lógica
    // de "isFormEmpty" = !(this.user.name && this.user.password) a insertar
    // únicamente "isFormEmpty"
    computed: {
        isFormEmpty: function () {
            return !(this.user.name && this.user.password);
        }
    },

    // Métodos
    methods: {
        onLogin: function () {
            this.errors = [];

            if (this.user.name.length < 6) {
                this.errors.push('El nombre de usuario tiene que tener al menos 6 caracteres');
            }

            if (this.user.password.length < 6) {
                this.errors.push('La contraseña tiene que tener al menos 6 caracteres');
            }
        }
    },

    // Filtros
    // Existe un paquete que nos facilita la utilización de los filtros.
    // https://github.com/freearhey/vue2-filters (en este caso no lo usamos).
    filters: {
        uppercase: function (data) {
            return data && data.toUpperCase();
        }
    }
});