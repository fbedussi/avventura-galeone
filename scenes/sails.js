const { setCurrentScene } = require('./sceneManager');
const keelDefaultActions = require('./keelDefaultActions');


const sails = {
    name: 'sails',
    shortDesc: `Sei nel magazzino delle vele.`,
    longDesc: `Qui è dove i pirati ripongono le vele quando non sono utilizzate. 
    La stanza è piena di cumoli di vele mal piegate, macchiate e mezze rosicchiate dai topi.`,
    actions: {
        ...keelDefaultActions,
        n: () => setCurrentScene('hardware'),
        e: () => setCurrentScene('coffers'),
        o: () => setCurrentScene('legs'),
    },
};

module.exports = sails;