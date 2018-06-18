> Aprendiendo [Vue.js](https://vuejs.org/) y [Firebase](https://firebase.google.com/?hl=es-419)

**Tabla de contenido**

- [Curso (apuntes)](#curso-apuntes)
    - [1. Vue.js esencial](#1-vuejs-esencial)
        - [1.1 Instalación y data binding](#11-instalacion-y-data-binding)
        - [1.2 Directivas incluídas](#12-directivas-incluidas)
        - [1.3 Renderizado de listas](#13-renderizado-de-listas)
        - [1.4 Vue DevTools](#14-vue-devtools)
        - [1.5 Eventos](#15-eventos)
        - [1.6 Propiedades computadas](#16-propiedades-computadas)
        - [1.7 Filtros](#17-filtros)
        - [1.8 La instancia Vue](#18-la-instancia-vue)
        - [1.9 Data binding en atributos y clases](#19-data-binding-en-atributos-y-clases)
        - [1.10 Transiciones y animaciones](#110-transiciones-y-animaciones)
    - [2. Componentes en Vue.js](#2-componentes-en-vuejs)
        - [2.1 Introducción a componentes](#21-introducción-a-componentes)
        - [2.2 Component templates](#22-component-templates)
        - [2.3 Component properties](#23-component-properties)
- [Bibliografía Web](#bibliografia-web)

# Curso (apuntes)

## 1. Vue.js esencial

### 1.1 Instalación y data binding

- [Vue.js (guía)](https://vuejs.org/v2/guide/installation.html)

**Script (CDN)**

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
```

**Crear instancia Vue**

```js
new Vue({
    el: 'main',
    data: {
        mensaje: 'hola mundo'
    }
});
```

**Data binding**

```html
<main> <!-- el: main -->
    <h1>{{ mensaje }}</h1> <!-- data: {mensaje:''} -->
    <input type="text" v-model="mensaje"> <!-- Valor = data: {mensaje:''} -->
    <pre>{{ $data }}</pre> <!-- Mostrar data en JSON -->
</main>
```

### 1.2 Directivas incluídas

- [Vue.js (guía)](https://vuejs.org/v2/guide/conditional.html)

Mostrar u ocultar elementos del DOM:

- **v-show**: aplica un display = none.
- **v-if**: elimina el elemento HTML del DOM.

Podemos encapsular elemtos HTML dentro de `<template>...</template>` de tal modo que podamos utilizar `v-if` o `v-show` sin la necesidad de aplicarlo a cada uno de los elementos, por separado. _template_ no va a ser creado, viéndose, nadamás, los elementos contenidos en éste (en el código).

**Sin renderizar**

```html
<template v-if="conectado">
    <h3>Hola</h3>
</template>
```

**Renderizado**

```html
<h3>Hola</h3>
```

### 1.3 Renderizado de listas

- [Vue.js (guía)](https://vuejs.org/v2/guide/list.html)

**Matriz**

```js
vm = new Vue({
    el: 'main',
    data: {
        laborales: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
    }
});
```

```html
<ul>
    <li v-for="dia in laborales">{{ dia }}</li>
</ul>
```

- Lunes
- Martes
- Miércoles
- Jueves
- Viernes

**Matriz de objetos (collection)**

```js
vm = new Vue({
    el: 'main',
    data: {
        tareas: [
            {nombre: 'tarea 1', prioridad: 'baja'},
            {nombre: 'tarea 2', prioridad: 'alta'},
            {nombre: 'tarea 3', prioridad: 'alta'},
        ]
    }
});
```

```html
<ul>
    <li v-for="(tarea, index) in tareas">
        {{ index }} - {{ tarea.nombre }} [{{ tarea.prioridad }}]
    </li>
</ul>
```

- 0 - tarea 1 [baja]
- 1 - tarea 2 [alta]
- 2 - tarea 3 [alta]

**Objeto**

```js
vm = new Vue({
    el: 'main',
    data: {
        persona: {
            nombre: 'Roger',
            profesion: 'padawan',
            ciudad: 'Tortosa'
        }
    }
});
```

```html
<ul>
    <li v-for="(value, key, index) in persona">
        {{ index }} - {{ key }}: {{ value }}
    </li>
</ul>
```

- 0 - nombre: Roger
- 1 - profesion: padawan
- 2 - ciudad: Tortosa

### 1.4 Vue DevTools

- [Vue DevTools](https://github.com/vuejs/vue-devtools).

### 1.5 Eventos

- [Vue.js (guía)](https://vuejs.org/v2/guide/events.html)

Algunos ejemplos:

- **v-on:click** => Cuando se realiza un click sobre el elemnto HTML que lo incluye.
- **v-on:keyup** => Cuando se deja de presionar una tecla.
- **v-on:keyup.enter** => Cuando se deja de presionar la tecla _Enter_.
    - [Key Modifiers](https://vuejs.org/v2/guide/events.html#Key-Modifiers).
- **v-on:submit** => Cuando se ejecuta el _submit_ de un formulario.
- **v-on:submit.prevent** => Cuando se realiza un _submit_ y se previene que la página sea recargada.
    - [Event Modifiers](https://vuejs.org/v2/guide/events.html#Event-Modifiers).

### 1.6 Propiedades computadas

- [Vue.js (guía)](https://vuejs.org/v2/guide/computed.html)

Las propiedades computadas son interesantes dado que permiten que el código del front-end esté más limpio gracias a que toda la lógica es escrita en dicha propiedad.

_Hay que intentar añadir expresiones simples en las plantillas y no demasiado complejas._

> Un método se evalúa constantemente mientras que una propiedad computada se evalúa cuando hay un cambio en las despendencias.

**Demasiada lógica en la plantilla**

```html
<h1>{{ mensaje.split('').reverse().join('') }}</h1>
```

**Solución mediante propiedades computadas**

```html
<h1>{{ mensajeAlReves }}</h1>
```

```js
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
```

### 1.7 Filtros

- [Vue.js (guía)](https://vuejs.org/v2/guide/computed.html)

Las propiedades computadas son útiles para filtrar (campos de búsqueda, rangos, etc.).

**Podemos crear nuestros propios filtros**

_Éstos deben insertarse antes de la instancia Vue._

```js
Vue.filter('alReves',(valor) => valor.split('').reverse().join(''));

new Vue({...});
```

```html
<h5>{{ juego.titulo | alReves }}</h5>
```

**Podemos utilizar filtros proporcionados por otras librerías**

- [vue2-filters](https://github.com/freearhey/vue2-filters)
- [Lodash](https://lodash.com/)

### 1.8 La instancia Vue

- [Vue.js (guía)](https://vuejs.org/v2/guide/instance.html)

La instancia de Vue es la intermediaria entre el DOM y la lógica de la aplicación.

```js
new Vue({...});
```

Podemos crear más de una instancia Vue, solo hay que guardar cada una en variables.

```js
const vm1 = new Vue({...});
const vm2 = new Vue({...});
const vmN = new Vue({...});
```

Además, se puede acceder desde una instancia a otra instancia.

```js
const vm1 = new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola mundo ^^'
    },
    ...
});

const vm2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola luna :)'
    },
    methods: {
        cambiarMensajeDeVm1() {
            vm1.mensaje = this.mensaje;
        }
    }
});
```

### 1.9 Data binding en atributos y clases

- [Vue.js (guía)](https://vuejs.org/v2/guide/class-and-style.html)

Mediante la propiedad **v-bind** de Vue podemos manipular los valores de los atributos de los elementos HTML.

**Botón con la classe _active_** (Si isActive = true)

```html
<button v-bind:class="{active: isActive}"></button>
```

**Versión abreviada de v-bind** (caso anterior)

```html
<button :class="{active: isActive}"></button>
```

### 1.10 Transiciones y animaciones

- [Vue.js (guía)](https://vuejs.org/v2/guide/transitions.html)

**Transiciones**

- [Transition Classes](https://vuejs.org/v2/guide/transitions.html#Transition-Classes)

```html
<head>
    <style>
        .nombreClase-enter {
            opacity: 0;
        }
        .nombreClase-enter-active {
            transition: opacity 1s;
        }
        .nombreClase-leave-to {
            opacity: 0;
        }
        .nombreClase-leave-active {
            transition: opacity 1s;
        }
    </style>
</head>
<body>
    <main>
        <transition name="nombreClase">
            ...
        </transition>
    </main>
</body>
```

**Animaciones**

- [CSS Animations](https://vuejs.org/v2/guide/transitions.html#CSS-Animations)
- [W3Schools](https://www.w3schools.com/css/css3_animations.asp)

```html
<head>
    <style>
        .nombreClase-enter-active {
            animation: bounce-in .5s;
        }
        .nombreClase-leave-active {
            animation: bounce-in .5s reverse;
        }
        @keyframes bounce-in {
            0% {
                transform: scale(0);
            }
            50% {
                transform: scale(1.5);
            }
            100% {
                transform: scale(1);
            }
        }
    </style>
</head>
<body>
    <main>
        <transition name="nombreClase">
            ...
        </transition>
    </main>
</body>
```

**Mediante librerías externas**

- [Custom Transition Classes](https://vuejs.org/v2/guide/transitions.html#Custom-Transition-Classes)
- [Animate.css](https://daneden.github.io/animate.css/)
    - U otras...

```html
<head>
    <link rel="stylesheet" href="https://cdn.x/libreria.min.css">
</head>
<body>
    <main>
        <transition name="cualquierNombreDescriptivo"
            enter-active-class="claseEntrada"
            leave-active-class="claseSalida">
            ...
        </transition>
    </main>
</body>
```

**Transiciones en el renderizado inicial (automáticas)**

- [Transitions on Initial Render](https://vuejs.org/v2/guide/transitions.html#Transitions-on-Initial-Render)

```html
<head>
    <style>
        .nombreClase-enter {
            opacity: 0;
        }
        .nombreClase-enter-active {
            transition: opacity 1s;
        }
        .nombreClase-leave-to {
            opacity: 0;
        }
        .nombreClase-leave-active {
            transition: opacity 1s;
        }
    </style>
</head>
<body>
    <main>
        <transition name="nombreClase" appear>
            ...
        </transition>
    </main>
</body>
```

**Transiciones entre elementos**

- [Transitioning Between Elements](https://vuejs.org/v2/guide/transitions.html#Transitioning-Between-Elements)

Si los elementos son iguales (h4 y h4 o p y p etc.) debemos añadirles `key` y, a éte, un valor que los distinga.

```html
<head>
    <style>
        .nombreClase-enter {
            opacity: 0;
        }
        .nombreClase-enter-active {
            transition: opacity 1s;
        }
        .nombreClase-leave-to {
            opacity: 0;
        }
        .nombreClase-leave-active {
            transition: opacity 1s;
        }
    </style>
</head>
<body>
    <main>
        <transition name="nombreClase" appear>
            <h4 v-if="mostrar" v-text="mensajes.entreElementos" key="aparecer"></h4>
            <h4 v-else key="ocultar">Ningún mensaje</h4>
            ...
        </transition>
    </main>
</body>
```

Para evitar que, después de una transición o animación, el elemento haga un movimiento para ocupar el sitio de otro elemento desaparecido, debemos hacer uso de las propiedad `mode`.

- [Transition Modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes)

```html
<head>
    <style>
        .nombreClase-enter {
            opacity: 0;
        }
        .nombreClase-enter-active {
            transition: opacity 1s;
        }
        .nombreClase-leave-to {
            opacity: 0;
        }
        .nombreClase-leave-active {
            transition: opacity 1s;
        }
    </style>
</head>
<body>
    <main>
        <transition name="nombreClase" mode="out-in">
            ...
        </transition>
    </main>
</body>
```

### 1.11 Ajax con vue-resource

- [vue-resource](https://github.com/pagekit/vue-resource)

*vue-resource* es un cliente HTTP para Vue.js y lo podemos añadir por **CDN**.

```html
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>
```

Ejecutaremos los métodos que realizan las peticiones AJAX mediante la instancia `mounted` del ciclo de vida de Vue.

- [The Vue Instance, Lifecycle](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

```js
new Vue({
    el: 'main',
    mounted() {
        this.ajaxMethod();
    },
    methods: {
        ajaxMethod() {
            ...
        }
    }
});
```

El resultado de un petición AJAX será guardado en una variable/array que habremos definido en `data: {}`.

```js
new Vue({
    el: 'main',
    mounted() {
        this.ajaxMethod();
    },
    data: {
        items: []
    }
    methods: {
        ajaxMethod() {
            // GET
            this.$http.get('https://randomuser.me/api/?results=50').then(response => {
                this.items = response.body.results;
            }, response => {
                // error callback
            });
        }
    }
});
```

### 1.12 Ajax con axios

- [axios](https://github.com/axios/axios)

*axios* es un cliente HTTP para Vue.js y lo podemos añadir por **CDN**.

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

La forma de utilizar *axios* no difiere de la de *vue-resource*. Con la excepción de que cada uno realiza la petición con un código escrito de diferente manera.

```js
new Vue({
    el: 'main',
    mounted() {
        this.ajaxMethod();
    },
    data: {
        items: []
    }
    methods: {
        ajaxMethod() {
            // GET
            axios.get('https://randomuser.me/api/?results=50')
            .then(function (response) {
                this.items = response.data.results;
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
});
```

## 2. Componentes en Vue.js

### 2.1 Introducción a componentes

- [Vue.js (guía)](https://vuejs.org/v2/guide/components.html)

**Crear el componente**

Podemos crear un componente que renderize unos datos pasados a través de propiedades (_props_), éstas insertadas mediante los atributos propios de una etiqueta HTML `<mis-tareas :tareas="tareasAjax">`.

> Este tipo de componente depende de la instancia Vue que proporciona los datos (_data_).

```js
Vue.component('mis-tareas', {
    props: ['tareas'],
    template: `<p>Plantilla HTML</p>`
});
```

**Instanciar Vue**

```js
new Vue({
    el: 'main',
    mounted() {
        this.cargarTareas();
    },
    data: {
        tareasAjax: []
    },
    methods: {
        cargarTareas() {
            // GET
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.tareasAjax = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
});
```

**Utilizar el componente**

```html
<mis-tareas :tareas="tareasAjax"></mis-tareas>
```

**Crear un componente independiente**

Podemos crear un componente que renderize sus propios datos, con lo que no es necesario utilizar propiedades (_props_).

> Este tipo de componente **no** depende de la instancia Vue porqué consume sus propios datos (_data_).

```js
Vue.component('las-tareas', {
    template: `<p>Plantilla HTML</p>`,
    mounted() {
        this.cargarTareas();
    },
    data() {
        return {
            tareasAjax: []
        }
    },
    methods: {
        cargarTareas() {
            // GET
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.tareasAjax = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },
    }
});
```

```html
<las-tareas></las-tareas>
```

### 2.2 Component templates

**Template en la propia instancia del componente**

```js
Vue.component('nombreComponente', {
    props: ['...'],
    template: `
        <div>
            ...
        </div>
    `,
    data() {...},
    methods: {...}
});
```

**Template fuera de la instancia del componente**

```js
Vue.component('nombreComponente', {
    props: ['...'],
    template: '#idScriptConTemplate',
    data() {...},
    methods: {...}
});
```

En un `<script type="text/template"></script>`.

```html
<main>...</main>
<script type="text/template" id="idScriptConTemplate">
    <div>
        ...
    </div>
</script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="./assets/js/main.js"></script>
```

En un `<template></template>`.

```html
<main>...</main>
<template id="idScriptConTemplate">
    <div>
        ...
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="./assets/js/main.js"></script>
```

**Dentro del componente**

```js
Vue.component('nombreComponente', {
    props: ['...'],
    data() {...},
    methods: {...}
});
```

```html
<main>
    <nombreComponente inline-template>
        <div>
            ...
        </div>
    </nombreComponente>
</main>
```

### 2.3 Component properties

- [Vue.js (guía)](https://vuejs.org/v2/guide/components-props.html)

```js
Vue.component('nombreComponente', {
    props: ['...'],
    ...
});
```

Las propiedades son  accesibles mediante _this_ y las pasaremos como atributos en la etiqueta HTML que representa el componente.

```js
Vue.component('nombreComponente', {
    props: ['atributo1', 'atributoN'],
    mounted() {
        console.log(this.atributo1);
    }
    ...
});
```

```html
<main>
    <nombreComponente v-bind:atributo1="unValor" :atributoN="unValor"></nombreComponente>
</main>
```

**Data Flow**

El _data flow_ es de padre a hijo y no al revés. Si intentamos sobreescribir una variable que se pasa como propiedad al componente, el valor de ésta no podrá sobreescribirse desde el componente.

- [One-Way Data Flow](https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow)

Aunque no podamos mutar el valor de una propiedad del padre, sí podremos utilizar éste para alimentar otras variables del componente.

```js
Vue.component('nombreComponente', {
    props: ['atributoComponente'],
    data() {
        return {
            nuestraVariable: this.atributoComponente;
        }
    }
    ...
});
```

_O también:_

```js
Vue.component('nombreComponente', {
    props: ['atributoComponente'],
    computed: {
        methodComputed: function () {
            return this.atributoComponente.trim().toLowerCase();
        }
    }
    ...
});
```

# Bibliografía Web

> [_Aprende Vue2 y Firebase paso a paso_](https://wmedia.teachable.com/p/aprende-vue2-y-firebase-paso-a-paso), de Wmedia.


- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [Random User Generator](https://randomuser.me/)