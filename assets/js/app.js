/*
|-------------------------------------------------------------------------------
| Components de Vue
|-------------------------------------------------------------------------------
| Els components de Vue van per sobre de la instància de Vue.
|
| Tenint en compte la plantilla HTML generada en la instància:
| 1. game-header
| 2. game-add
| 3. game-list
|
*/

/* game-header
----------------------------------------------------------------------------- */
Vue.component('game-header', {
    template: '<h1>Video Games</h1>'
});

/* game-add
----------------------------------------------------------------------------- */
Vue.component('game-add', {
    // Plantilla
    template: [
        '<div>',
            '<input type="text" v-model="titleGame" />',    // v-model ens permet anar obtenint el valor del input, el qual sera afegit a la variable titleGame.
            '<button @click="emitNewGame">Añadir</button>', // Dur a terme la funció emitGame quan es faci clic (mètode).
        '</div>' 
    ].join(''),

    // L'element data, en un component, s0inicialitza com una funció i no com un objecte (tal i com passa en la instància de Vue).
    data: function () {
        return {
            titleGame: null
        }
    },

    // Mètodes
    methods: {
        // La funció mira si l'input està buit i, si no ho està, llança ($emit) un esdeveniment al component pare, permetent que sigui traspassat, de pare a fill, el títol introduït en l'input.
        emitNewGame: function () {
            if (this.titleGame) {
                this.$emit('new', { title: this.titleGame });
                this.titleGame = null;
            }
        }
    },
});

/* game-list
El component game-list conté un altre component, game-item.
----------------------------------------------------------------------------- */
Vue.component('game-list', {
    props: ['games'],
    template: [
        '<ol>',
            '<game-item v-for="item in games" :game="item" :key="item.id"></game-item>',
        '</ol>'
    ].join('')
});

Vue.component('game-item', {
    // Són com els paràmetres d'una funció, en aquest cas variables que són passades del component pare al fill.
    // Aquestes variables són afegides com si foren atributs (en el pare) => :game="item".
    props: ['game'],
    template: '<li>{{ game.title }}</li>'
});

/*
|-------------------------------------------------------------------------------
| Instància de Vue
|-------------------------------------------------------------------------------
| Generar una instància que tingui com a referència l'element HTML amb
| identificador app => <div id="app"></div>
|
*/

const app = new Vue({
    el: '#app',

    // Afegim una plantilla dintre de l'element HTML referenciat.
    template: [
        '<div class="view">',
            '<game-header></game-header>',                  // Component fill
            '<game-add @new="addNewGame"></game-add>',      // Component fill amb esdeveniment @new (escoltat pel pare)
            '<game-list v-bind:games="games"></game-list>', // Component fill amb directiva v-bind (enllaça una propietat interna del component amb un model (games) de l'element pare)
        '</div>'
    ].join(''),
    
    // Tots els models que un component o instància defineixen internament, s'han d'afegir dintre de data.
    data: {
        games: [
            { title: 'ME: Andromeda' },
            { title: 'Fifa 2017' },
            { title: 'League of Legend' }
        ]
    },

    // Mètodes
    methods: {
        addNewGame: function (game) {
            this.games.push(game);
        }
    }
});