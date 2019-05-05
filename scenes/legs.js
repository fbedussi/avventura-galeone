const { setCurrentScene } = require('./sceneManager');

const legs = {
    name: 'legs',
    shortDesc: `Sei in una stanza piena di scaffali.`,
    longDesc: `Sembrerebbe essere un magazzino pieno di protesi per curare i pirati che rimangono feriti.`,
    actions: {
        n: () => `C'è una solida parete di legno.`,
        s: () => `Di qui non si passa, questa è tutta l'aria di essere la chiglia della nave`,
        e: () => setCurrentScene('sails'),
        o: () => `C'è una solida parete di legno.`,
        u: () => `Provi a fare un salto, ma il soffitto è troppo alto da raggiungere. Ad ogni modo modo non sembra esserci nulla di interessante.`,
        d: () => `Sei già nella stiva, più in basso di così c'è solo l'inifinità degli abissi!`,
    },
};

module.exports = legs;