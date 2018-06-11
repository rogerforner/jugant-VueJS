> Aprendiendo [Vue.js](https://vuejs.org/) y [Firebase](https://firebase.google.com/?hl=es-419)

**Tabla de contenido**

- [Curso (apuntes)](#curso-apuntes)
    - [1. Vue.js esencial](#1-vuejs-esencial)
        - [1.1 Instalación y data binding](#11-instalacion-y-data-binding)
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

# Bibliografía Web

- [_Aprende Vue2 y Firebase paso a paso_](https://wmedia.teachable.com/p/aprende-vue2-y-firebase-paso-a-paso), de Wmedia.
- [Vue DevTools](https://github.com/vuejs/vue-devtools).