const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');
const { leave } = require('../../decoder/pick');


const hall = {
    name: 'hall',
    shortDesc: 'Sei in un\'anticamera.',
    longDesc: 'C\'è solo una porta chiusa a chiave.',
    actions: {
        ...keelDefaultActions,
        e: () => setCurrentScene('dining'),
        use_key_door: () => {
            hall.actions.o = () => setCurrentScene('captain');
            leave({ parsedInput: ['leave', 'key'] });
            return 'Infili la chiave dentro la serratura, la giri, senti uno scatto metallico e la porta si apre';
        },
    },
};

module.exports = hall;
