const { setCurrentScene } = require('./sceneManager');
const keelDefaultActions = require('./keelDefaultActions');

const legs = {
    name: 'legs',
    shortDesc: `Sei in una stanza piena di scaffali.`,
    longDesc: `Sembrerebbe essere un magazzino pieno di protesi per curare i pirati che rimangono feriti.`,
    actions: {
        ...keelDefaultActions,
        n: () => `C'è una solida parete di legno.`,
        e: () => setCurrentScene('sails'),
    },
};

module.exports = legs;