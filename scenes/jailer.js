const { setCurrentScene } = require('./sceneManager');
const { setObject, getObject } = require('../objects/objectsManager');

const prisoner = {
    name: 'jailer',
    shortDesc: `Ti trovi nell'anticamera della cella.`,
    longDesc: `Tra scatole sfondate e palle di cannone arrugginite spicca un pirata stramazzato al suolo.
    Doveva essere il tuo carceriere.`,
    actions: {
        n: () => `Di qui non si passa, questa è tutta l'aria di essere la chiglia della nave`,
        s: () => /* setCurrentScene('woodlegs') */'DEV',
        e: () => /* setCurrentScene('hardware') */'DEV',
        o: () => setCurrentScene('prisoner'),
        u: () => `Provi a fare un salto, ma il soffitto è troppo alto da raggiungere. Ad ogni modo modo non sembra esserci nulla di interessante.`,
        d: () => `Sei già nella stiva, più in basso di così c'è solo l'inifinità degli abissi!`,
        watch_jailer: () => {
            setObject({
                id: 'keys-jailer',
                show: true,
                pickable: true,
            });
            const jailer = getObject('jailer');
            return jailer.description;
        }
    },
};

module.exports = prisoner;