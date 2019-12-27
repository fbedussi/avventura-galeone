const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');
const { incrementPointsBy } = require('../../points');
const { setLoose } = require('../../ended');

const galley = {
    name: 'galley',
    shortDesc: 'Sei nella cambusa.',
    longDesc: 'Qui sono custodite tutte le riserve di cibo delle nave.',
    actions: {
        ...keelDefaultActions,
        n: () => setCurrentScene('kitcken'),
        drink_wine: () => {
            setLoose();
            return `Bevi una lunga sorsata di vino, ma quasi subito la testa comincia a girarti e la vista ti si appanna, in pochi secondi cadi a terra in preda ad atroci dolori di pancia. 
            Il vino doveva essere contaminato da qualche cosa. 
            Dopo qualche minuto che sembra eterno muori.`;
        },
        drink_water: () => {
            incrementPointsBy(30);
            return 'Bevi una lunga sorsata di acqua e finalmente calmi la sete che di affliggeva da giorni.';
        },
        eat_meat: () => {
            setLoose();
            return `In preda ai morsi della fame addenti un succulentpo pezzo di carne salata. 
            Quasi subito senti uno strano sapore di mandorla in bocca e poco dopo un atroce dolore alla pancia.
            Cadi a terra rantolando, con la vista che ti si appanna.  
            La carne doveva essere contaminata da un veleno. 
            Dopo qualche minuto che sembra eterno muori.`;
        },
        eat_cookies: () => {
            incrementPointsBy(30);
            return `Vincendo la ripugnanza addenti un paio di gallette, non prima di aver soffiato via i vermi che le infestano.
            Il sapore non è dei migliori, ma almeno calmi i morsi della fame, che ti affliggono da giorni`;
        },
    },
};

module.exports = galley;
