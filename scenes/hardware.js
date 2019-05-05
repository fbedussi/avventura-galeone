const { setCurrentScene } = require('./sceneManager');
const { setObject, getObject } = require('../objects/objectsManager');
const { pick } = require('../decoder/pick');
const keelDefaultActions = require('./keelDefaultActions');

const hardware = {
    name: 'hardware',
    shortDesc: `Sei nel magazzino degli attrezzi.`,
    longDesc: `Questa è la ferramenta della nave, dove vengono custoditi tutti gli attrezzi che possono servire alla sua manutenzione... sempre che i pirati si ricordino di riportarli qui dopo averli utilizzati... l'ordine non è la loro migliore qualità.`,
    actions: {
        ...keelDefaultActions,
        s: () => setCurrentScene('sails'),
        e: () => `C'è un pesante scaffale pieno di chiodi storti e attrezzi arrugginiti. E anche qualche insetto morto. Non mi sembra proprio che si possa passare.`,
        o: () => setCurrentScene('jailer'),
        watch_shelf: () => {
            setObject({
                id: 'knife-hardware',
                show: true,
                pickable: true,
            });
            const shelf = getObject('shelf-hardware');
            return shelf.description;
        },
        pick_knife: (...args) => {
            setObject({
                id: 'shelf-hardware',
                description: `Lo scaffale è pieno di ciarpame inutile.`,
            });
            return pick(...args);
        }
    },
};

module.exports = hardware;