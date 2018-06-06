const app = new Vue({
    // Generar una instància que tingui com a referència l'element HTML amb
    // identificador app => <div id="app"></div>
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