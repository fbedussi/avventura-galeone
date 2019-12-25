const { setCurrentScene } = require('../sceneManager');
const bridgeDefaultActions = require('../bridgeDefaultActions');

const in2 = {
    name: 'in2',
    shortDesc: 'Sei sul ponte della nave.',
    longDesc: `Da qui puoi vedere la nave in quasi tutta la sua estensione: dalla prua al cassero di poppa.
    In mezzo si ergono i possenti alberi delle vele.`,
    actions: {
        ...bridgeDefaultActions,
        e: () => setCurrentScene('bow'),
        o: () => setCurrentScene('stern'),
        d: () => setCurrentScene('exit1'),
    },
};

module.exports = in2;
