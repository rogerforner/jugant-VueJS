> Aprendiendo [Vue.js](https://vuejs.org/) y [Firebase](https://firebase.google.com/?hl=es-419)

**Tabla de contenido**

- [Curso (apuntes)](#curso-apuntes)
    - [1. Vue.js esencial](#1-vuejs-esencial)
        - [1.1 Instalación y data binding](#11-instalacion-y-data-binding)
        - [1.2 Directivas incluídas](#12-directivas-incluidas)
        - [1.3 Renderizado de listas](#13-renderizado-de-listas)
        - [1.4 Vue DevTools](#14-vue-devtools)
        - [1.5 Eventos](#15-eventos)
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
- 0 - tarea 1 [baja]
- 1 - tarea 2 [alta]
- 2 - tarea 3 [alta]

```html
<ul>
    <li v-for="(tarea, index) in tareas">
        {{ index }} - {{ tarea.nombre }} [{{ tarea.prioridad }}]
    </li>
</ul>
```

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

# Bibliografía Web

- [_Aprende Vue2 y Firebase paso a paso_](https://wmedia.teachable.com/p/aprende-vue2-y-firebase-paso-a-paso), de Wmedia.