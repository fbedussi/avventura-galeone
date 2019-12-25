const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');

const kitcken = {
    name: 'kitcken',
    shortDesc: 'Sei nella cucina.',
    longDesc: `Qui il cuoco di bordo preparava i pasti per l\'equipaggio. 
    Doveva essere un tipo preciso: tutto sembra pulito e ordinato, almeno per gli standard dei rudi pirati.`,
    actions: {
        ...keelDefaultActions,
        s: () => setCurrentScene('galley'),
        o: () => setCurrentScene('dining'),
        e: () => setCurrentScene('in1'),
    },
};

module.exports = kitcken;
