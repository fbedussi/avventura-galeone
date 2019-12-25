const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');


const captain = {
    name: 'captain',
    shortDesc: 'Sei nella cabina del capitano.',
    longDesc: `Si tratta di una stanza finemente arredata, almeno per gli standard di questi rozzi pirati. 
    Sulla parete di fondo c'è un'ampia vetrata che dà sulla poppa della nave. Sotto la vetrata si stende un divano che circonda un tavolo su cui il capitano era solito consumare i propri pasti.
    A destra c'è la scrivania del capiano. Le pareti sono decorate da vecchie stampe marinare.`,
    actions: {
        ...keelDefaultActions,
        e: () => setCurrentScene('hall'),
    },
};

module.exports = captain;
