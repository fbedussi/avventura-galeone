const { setCurrentScene } = require('./sceneManager');
const { setObject, getObject } = require('../objects/objectsManager');
const { pick } = require('../decoder/pick');

const prisoner = {
    name: 'jailer',
    shortDesc: `Ti trovi nell'anticamera della cella.`,
    longDesc: `Tra scatole sfondate e palle di cannone arrugginite spicca un pirata stramazzato al suolo.
    Doveva essere il tuo carceriere.`,
    actions: {
        n: () => `Di qui non si passa, questa è tutta l'aria di essere la chiglia della nave`,
        s: () => `C'è una solida parete di legno`,
        e: () => setCurrentScene('hardware'),
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
        },
        pick_key: (...args) => {
            setObject({
                id: 'jailer-jailer',
                description: `È accasciato a terra. La bocca contorta in una smorfia di dolore.
                È vestito solo con dei luridi calzoncini mezzi strappati.
                Alla vita ha una rozza cintura, fatta con un pezzo di corda.`,
            });
            return pick(...args);
        }
    },
};

module.exports = prisoner;