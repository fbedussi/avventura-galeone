const { setCurrentScene } = require('../sceneManager');
const keelDefaultActions = require('../keelDefaultActions');
const { setObject } = require('../../objects/objectsManager');
const { incrementPointsBy } = require('../../points');

const logDescription = `Il diario riporta solo alcune scarne indicazioni sulla navigazione.
Stai per chiuderlo quando ti accorgi che una delle ultime annotazioni è diversa dalle altre.
Dice: "Sull'isola stretta recuperato tesoro di Capitan Bill. Nascosto ai piedi dell'arcobaleno.`;

const captain = {
    name: 'captain',
    shortDesc: 'Sei nella cabina del capitano.',
    longDesc: `Si tratta di una stanza finemente arredata, almeno per gli standard di questi rozzi pirati. 
    Sulla parete di fondo c'è un'ampia vetrata che dà sulla poppa della nave. Sotto la vetrata si stende un divano che circonda un tavolo su cui il capitano era solito consumare i propri pasti.
    A destra c'è la scrivania del capiano. Le pareti sono decorate da vecchie stampe marinare.`,
    actions: {
        ...keelDefaultActions,
        e: () => setCurrentScene('hall'),
        sit_sofa: () => 'Ah! Avevi proprio bisogno di riposare un po\'',
        read_log: () => 'È chiuso.',
        open_log: () => {
            incrementPointsBy(10);
            setObject({
                id: 'captain-log',
                description: logDescription,
                actions: ['read'],
            });
            captain.actions.read_log = () => logDescription;
            return 'Hai aperto il diario di bordo.';
        },
        pull_third: () => {
            setObject({
                id: 'captain-handle',
                actionable: true,
                show: true,
            });
            setObject({
                id: 'captain-hole',
                actionable: true,
            });
            captain.actions.pull_handle = () => {
                incrementPointsBy(10);
                captain.actions.s = () => setCurrentScene('treasure');
                return 'Tiri la maniglia, si sente uno scatto metallico e nella parete si apre una porta che era perfettamente mimetizzata.';
            };
            return `Provi a tirare la stampa verso di te e ti accorgi che si può sollevare.
            Dietro c'è un piccolo vano che ospita una piccola maniglia`;
        },
    },
};

module.exports = captain;
