const { setCurrentScene } = require('./sceneManager');
const { setObject, getObject } = require('../objects/objectsManager');
const { pick } = require('../decoder/pick');

const sails = {
    name: 'sails',
    shortDesc: `Sei nel magazzino delle vele.`,
    longDesc: `Qui è dove i pirati ripongono le vele quando non sono utilizzate. 
    La stanza è piena di cumoli di vele mal piegate, macchiate e mezze rosicchiate dai topi.`,
    actions: {
        n: () => setCurrentScene('hardware'),
        s: () => `Di qui non si passa, questa è tutta l'aria di essere la chiglia della nave`,
        e: () => /* setCurrentScene('coffers') */'DEV',
        o: () => setCurrentScene('legs'),
        u: () => `Provi a fare un salto, ma il soffitto è troppo alto da raggiungere. Ad ogni modo modo non sembra esserci nulla di interessante.`,
        d: () => `Sei già nella stiva, più in basso di così c'è solo l'inifinità degli abissi!`,
    },
};

module.exports = sails;