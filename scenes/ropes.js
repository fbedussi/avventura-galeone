const { setCurrentScene } = require('./sceneManager');

const ropes = {
    name: 'ropes',
    shortDesc: `Sei nel deposito del cordame.`,
    longDesc: `Qui vengono custodite le corde e il sartiame che serve alla nave.`,
    actions: {
        n: () => `Di qui non si passa, questa è tutta l'aria di essere la chiglia della nave`,
        s: () => setCurrentScene('coffers'),
        e: () => `C'è una solida parete di legno.`,
        o: () => `C'è una solida parete di legno.`,
        u: () => `Provi a fare un salto, ma il soffitto è troppo alto da raggiungere. Ad ogni modo modo non sembra esserci nulla di interessante.`,
        d: () => `Sei già nella stiva, più in basso di così c'è solo l'inifinità degli abissi!`,
    },
};

module.exports = ropes;