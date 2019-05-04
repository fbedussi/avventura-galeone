const { setCurrentScene } = require('./sceneManager');
const { setObject, getObject } = require('../objects/objectsManager');
const { pick } = require('../decoder/pick');

const legs = {
    name: 'sails',
    shortDesc: `Sei nel deposito delle gambe di legno.`,
    longDesc: `Qui i pirati custodiscono la loro collezione di gambe i legno, ma sinceramente mi semrano tutte piuttosto malmesse.`,
    actions: {
        n: () => setCurrentScene('jailer'),
        s: () => `Di qui non si passa, questa è tutta l'aria di essere la chiglia della nave`,
        e: () => setCurrentScene('sails'),
        o: () => /* setCurrentScene('legs') */'DEV',
        u: () => `Provi a fare un salto, ma il soffitto è troppo alto da raggiungere. Ad ogni modo modo non sembra esserci nulla di interessante.`,
        d: () => `Sei già nella stiva, più in basso di così c'è solo l'inifinità degli abissi!`,
    },
};

module.exports = legs;