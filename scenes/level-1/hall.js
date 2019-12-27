const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');
const { leave } = require('../../decoder/pick');
const { incrementPointsBy } = require('../../points');


const hall = {
    name: 'hall',
    shortDesc: 'Sei in un\'anticamera.',
    longDesc: `C'è solo una porta chiusa. 
    Sopra si può leggere, a caratteri sbiaditi, la scritta "capitano".`,
    actions: {
        ...keelDefaultActions,
        e: () => setCurrentScene('dining'),
        use_key_door: () => {
            incrementPointsBy(10);
            hall.actions.o = () => setCurrentScene('captain');
            leave({ parsedInput: ['leave', 'key'] });
            return 'Infili la chiave dentro la serratura, la giri, senti uno scatto metallico e la porta si apre.';
        },
        open_door: () => 'Non si apre, sembrerebbe chiusa a chiave.',
    },
};

module.exports = hall;
