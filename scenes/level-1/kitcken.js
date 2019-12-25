const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');

const kitcken = {
    name: 'kitcken',
    shortDesc: 'Sei nella cucina.',
    longDesc: 'Da un lato c\'è la stufa che il cuoco di bordo usava per cucinare. Sopra ci sono le pentole e gli altri attrezzi di cucina.',
    actions: {
        ...keelDefaultActions,
        s: () => setCurrentScene('galley'),
        o: () => setCurrentScene('dining'),
    },
};

module.exports = kitcken;
