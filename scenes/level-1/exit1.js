const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');
const { setWon } = require('../../ended');
const { end } = require('../../end');
const { incrementPointsBy } = require('../../points');

const exit1 = {
    name: 'exit1',
    shortDesc: 'Sei in una stanzetta.',
    longDesc: 'In alto vedi una luce: è il boccaporto che porta in coperta, dal quale penzola una scala di corda.',
    actions: {
        ...keelDefaultActions,
        u: () => {
            incrementPointsBy(10);
            setWon();
            end();

            return 'Complimenti sei uscito alla luce';
        },
        n: () => setCurrentScene('dining'),
    },
};

module.exports = exit1;
