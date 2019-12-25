const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');

const dining = {
    name: 'dining',
    shortDesc: 'Sei nella sala da pranzo.',
    longDesc: 'Attorno al tavolo vedi radunato tutto l\'equipaggio. I pirati sono accasciati sulle sedie. Alcuni sono caduti con la faccia nel piatto, altri pendono di lato. Tutti sono morti stecchiti.',
    actions: {
        ...keelDefaultActions,
        e: () => setCurrentScene('kitcken'),
        o: () => setCurrentScene('hall'),
        s: () => setCurrentScene('exit1'),
    },
};

module.exports = dining;
