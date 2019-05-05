const { setCurrentScene } = require('./sceneManager');
const { leave } = require('../decoder/pick');

const exit0 = {
    name: 'exit0',
    shortDesc: `Sei in una minuscola stanzetta, stretta e lunga.`,
    longDesc: `In alto vedi una luce: c'è un boccaporto!`,
    actions: {
        n: () => `Di qui non si passa, questa è tutta l'aria di essere la chiglia della nave`,
        s: () => `Di qui non si passa, questa è tutta l'aria di essere la chiglia della nave`,
        e: () => `Di qui non si passa, questa è tutta l'aria di essere la chiglia della nave`,
        o: () => setCurrentScene('coffers'),
        u: () => `Provi a fare un salto, ma il boccaporto è troppo alto da raggiungere.`,
        d: () => `Sei già nella stiva, più in basso di così c'è solo l'inifinità degli abissi!`,
        use_ladder: () => `La scala è troppo corta e inoltre non riesci ad agganciarla al boccaporto`,
        leave_coffer: (...args) => {
            exit0.actions.use_ladder = () => {
                exit0.acServiceWorkerRegistrationtions.u = () => setWon()
                return `Salendo sul forziere riesci a lanciare la scala abbastanza in alto da agganciarla ai ganci.`
            }
            return leave(...args);
        }
    },
};

module.exports = exit0;