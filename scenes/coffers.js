const { setCurrentScene } = require('./sceneManager');
const { incrementPointsBy } = require('../points');
const { pick } = require('../decoder/pick');
const keelDefaultActions = require('./keelDefaultActions');

const coffers = {
    name: 'coffers',
    shortDesc: `Sei nel magazzino dei forzieri.`,
    longDesc: ``,
    actions: {
        ...keelDefaultActions,
        n: () => setCurrentScene('ropes'),
        e: () => setCurrentScene('exit0'),
        o: () => setCurrentScene('sails'),
        pick_coffers: () => `Tutti quanti? Non sono mica un camion! Al limite posso provare con uno...`,
        pick_coffer: (...args) => {
            incrementPointsBy(10);
            return pick(...args);        
        },
    },
};

module.exports = coffers;