> Aprendiendo [Vue.js](https://vuejs.org/) y [Firebase](https://firebase.google.com/?hl=es-419)

**Tabla de contenido**

- [Curso (apuntes)](#curso-apuntes)
    - [1. Vue.js esencial](#1-vuejs-esencial)
        - [1.1 Instalación y data binding](#11-instalacion-y-data-binding)
        - [1.2 Directivas incluídas](#12-directivas-incluidas)
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

# Bibliografía Web

- [_Aprende Vue2 y Firebase paso a paso_](https://wmedia.teachable.com/p/aprende-vue2-y-firebase-paso-a-paso), de Wmedia.
- [Vue DevTools](https://github.com/vuejs/vue-devtools).