const { setCurrentScene } = require('../sceneManager');
const bridgeDefaultActions = require('../bridgeDefaultActions');

const bow = {
    name: 'bow',
    shortDesc: 'Sei sulla prua.',
    longDesc: 'Sei sul punto più avanzato della nave, il vento ti soffia sulla faccia, all\'orizzonte si può scorgere una sottile striscia di terra.',
    actions: {
        ...bridgeDefaultActions,
        o: () => setCurrentScene('in2'),
    },
};

module.exports = bow;
