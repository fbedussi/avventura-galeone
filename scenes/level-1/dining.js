const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');

const dining = {
    name: 'dining',
    shortDesc: 'Sei nella sala da pranzo.',
    longDesc: 'Da un lato c\'è la stufa che il cuoco di bordo usava per cucinare. Sopra ci sono le pentole e gli altri attrezzi di cucina.',
    actions: {
        ...keelDefaultActions,
        e: () => setCurrentScene('kitcken'),
        s: () => setCurrentScene('exit1'),
    },
};

module.exports = dining;
