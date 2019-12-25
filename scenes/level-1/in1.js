const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');

const in1 = {
    name: 'in1',
    shortDesc: 'Sei sul pianerottolo delle scale che portano alla stiva.',
    longDesc: 'C\'è l\'apertura della scala che porta alla stiva.',
    actions: {
        ...keelDefaultActions,
        o: () => setCurrentScene('kitcken'),
        d: () => setCurrentScene('exit0'),
    },
};

module.exports = in1;
