const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');

const galley = {
    name: 'galley',
    shortDesc: 'Sei nella cambusa.',
    longDesc: 'Ci sono barili di carne salata, damigiane di vino, scatole di gallette e otri piene d\'acqua.',
    actions: {
        ...keelDefaultActions,
        n: () => setCurrentScene('kitcken'),
    },
};

module.exports = galley;
