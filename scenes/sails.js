const { setCurrentScene } = require('./sceneManager');
const keelDefaultActions = require('./keelDefaultActions');
const { setLoose } = require('../ended');
const { incrementPointsBy } = require('../points');
const { setObject } = require('../objects/objectsManager');

const sails = {
    name: 'sails',
    shortDesc: 'Sei nel magazzino delle vele.',
    longDesc: `Qui è dove i pirati ripongono le vele quando non sono utilizzate. 
    La stanza è piena di cumoli di vele mal piegate, macchiate e mezze rosicchiate dai topi.
    All'improvviso da dietro le vele sbuca un pirata: barcolla, geme, ma ti si avventa contro.`,
    actions: {
        ...keelDefaultActions,
        e: () => {
            setLoose();
            return `Prima di esalare l'ultimo respiro il pirata fa in tempo a colpirti alle spalle, tu sei disarmato e non riesci a difenderti. 
            Prima di morire fai in tempo a pensare che non è stata una buona idea aggirarti su un galeone pirata solo e disarmato.`;
        },
        use_knife_pirate: () => {
            incrementPointsBy(10);
            sails.actions.e = () => setCurrentScene('legs');
            setObject({
                id: 'sails-piraterope-prisoner',
                label: 'un feroce pirata stecchito',
                description: 'Il pirata giace a terra con un coltello conficcato nel petto.',
            });
            return 'Il pirata prova a saltarti alla gola, ma tu sei più forte e lo infilzi dritto al cuore. Il pirata si accascia stecchito';
        },
        use_leg_pirate: () => {
            incrementPointsBy(10);
            sails.actions.e = () => setCurrentScene('legs');
            setObject({
                id: 'sails-piraterope-prisoner',
                label: 'un feroce pirata stecchito',
                description: 'Il pirata giace a terra con il cranio spaccato.',
            });
            return 'Il pirata prova a saltarti alla gola, ma tu sei più forte e gli rifili una bastonata sulla testa con la gamba di legno. Il pirata si accascia stecchito';
        },
    },
};

module.exports = sails;
