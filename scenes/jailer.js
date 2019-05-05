const { setCurrentScene } = require('./sceneManager');
const { setObject, getObject } = require('../objects/objectsManager');
const { pick } = require('../decoder/pick');
const keelDefaultActions = require('./keelDefaultActions');

const prisoner = {
    name: 'jailer',
    shortDesc: `Ti trovi nell'anticamera della cella.`,
    longDesc: `Tra scatole sfondate e palle di cannone arrugginite spicca un pirata stramazzato al suolo.
    Doveva essere il tuo carceriere.`,
    actions: {
        ...keelDefaultActions,
        s: () => `C'è una solida parete di legno`,
        e: () => setCurrentScene('hardware'),
        o: () => setCurrentScene('prisoner'),
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