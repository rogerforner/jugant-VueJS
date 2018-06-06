/*
|-------------------------------------------------------------------------------
| Componentes de Vue
|-------------------------------------------------------------------------------
| Los componentes de Vue deben situarse por encima de la instáncia de Vue.
|
*/

Vue.component('course', {
    data: function () {
        return {
            months: 0,
            styleClass: null,
            header: {
                title: 'Course default',
                image: 'http://lorempixel.com/64/64/'
            }
        }
    },
    // Las "props" son como los parámetros de una funciçon, variables que van a
    // poder pasarse a través del componente. Estas variables se pasan como
    // atributos del propio elemento HTML que forma el componente.
    props: {
        title:       { type: String, required: true },
        subtitle:    { type: String, required: true },
        description: { type: String, required: true },
    },
    // Añadimos un template porqué se requiere de éste.
    template: [
        '<div>',
            '<h1>{{ title }}</h1>',
            '<h2>{{ subtitle }}</h2>',
            '<p>{{ description }}</p>',
        '</div>' 
    ].join(''),
});

/*
|-------------------------------------------------------------------------------
| Instáncia de Vue
|-------------------------------------------------------------------------------
| Generar una instáncia que tenga como referencia el elemento HTML con id="app"
|
*/

const app = new Vue({
    el: '#app'
});