const { setCurrentScene } = require('./sceneManager');

const coffers = {
    name: 'coffers',
    shortDesc: `Sei nel magazzino dei forzieri.`,
    longDesc: ``,
    actions: {
        n: () => setCurrentScene('ropes'),
        s: () => `Di qui non si passa, questa è tutta l'aria di essere la chiglia della nave`,
        e: () => setCurrentScene('exit0'),
        o: () => setCurrentScene('sails'),
        u: () => `Provi a fare un salto, ma il soffitto è troppo alto da raggiungere. Ad ogni modo modo non sembra esserci nulla di interessante.`,
        d: () => `Sei già nella stiva, più in basso di così c'è solo l'inifinità degli abissi!`,
    },
};

module.exports = coffers;