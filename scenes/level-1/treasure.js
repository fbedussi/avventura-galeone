const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');
const { incrementPointsBy } = require('../../points');

const treasure = {
    name: 'treasure',
    shortDesc: 'Sei in una piccola stanzetta.',
    longDesc: `È un piccolo vano nascosto dietro la parete della cabina del capitano.
        Non ci sono finestre, quindi non c'è molta luce, ma al centro riesci comunque ad intravedere uno scrigno.`,
    actions: {
        ...keelDefaultActions,
        n: () => setCurrentScene('captain'),
        pick_chest: () => {
            incrementPointsBy(10);
            return 'Hai preso lo scrigno';
        },
    },
};

module.exports = treasure;
