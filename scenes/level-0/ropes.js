const { setCurrentScene } = require('../sceneManager');
const { incrementPointsBy } = require('../../points');
const { pick } = require('../../decoder/pick');
const keelDefaultActions = require('../keelDefaultActions');

const ropes = {
    name: 'ropes',
    shortDesc: 'Sei nel deposito del cordame.',
    longDesc: 'Qui vengono custodite le corde e il sartiame che serve alla nave.',
    actions: {
        ...keelDefaultActions,
        s: () => setCurrentScene('coffers'),
        pick_ladder: (...args) => {
            incrementPointsBy(10);
            return pick(...args);
        },
    },
};

module.exports = ropes;
