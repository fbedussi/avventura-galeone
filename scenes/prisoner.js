const { setCurrentScene } = require('./sceneManager');
const { incrementPointsBy } = require('../points');
const { setLoose, setWon } = require('../ended');
const { setObject } = require('../objects/objectsManager');

const prisoner = {
    name: 'prisoner',
    shortDesc: `Sei prigioniero nella stiva di su un galeone pirata.`,
    longDesc: `Una robustissima corda ti lega la vita ad un sudicio palo.
    L'odore degli escrementi è nauseante e lo squittire dei ratti non ti lascia dormire.  
    Da parecchie ore, forse un paio di giorni, non senti più le grida dei pirati e l'eco dei loro pesanti movimenti.
    Nessuno si è fatto più vivo, nemmeno per portarti acqua o cibo.
    Evidentemente devono essere tutti morti per qualche causa misteriosa. 
    E' il momento adatto per cercare di scappare.
    Peccato solo che tu stia morendo di fame!`,
    actions: {
        n: () => `Non puoi muoverti, sei legato come un salame!`,
        s: () => `Non puoi muoverti, sei legato come un salame!`,
        e: () => `Non puoi muoverti, sei legato come un salame!`,
        o: () => `Non puoi muoverti, sei legato come un salame!`,
        u: () => `Non puoi muoverti, sei legato come un salame!`,
        d: () => `Non puoi muoverti, sei legato come un salame!`,
        eat_cheese: () => {
            setLoose();
            return `La misera crosta placa a malapena i morsi della fame. 
            Purtroppo però continui ad essere legato e non riesci a scappare.
            Il tuo destino è ormai segnato.
            Passano lo ore, ritorna la fame che inesorabilmente ti porta alla morte.`
        },
        spread_cheese: () => prisoner.actions.use_cheese(),
        use_cheese_rope: () => {
            incrementPointsBy(10);
            setObject({
                id: 'rope-prisoner',
                show: true,
                actionable: true,
            });
            setObject({
                id: 'cheese-prisoner',
                carried: false,
            });
            prisoner.shortDesc = `Questa è la cella in cui eri tenuto prigioniero.`;
            prisoner.longDesc = `Al centro si erge ancora il sudicio palo a cui eri legato. 
            C'è sempre l'odore di escrementi e lo squittire di ratti, ma ora pensi a quelle bestioline con tenera gratitudine.`
            prisoner.actions = {
                ...prisoner.actions,
                n: () => `Sbatti contro la lurida parete della cella.`,
                s: () => `Sbatti contro la lurida parete della cella.`,
                e: () => `Sbatti contro la lurida parete della cella.`,
                o: () => `Arrivi ad una pesante porta di metallo che ti sbarra la via. 
                L'unica apertura è lo spioncino da cui i tuoi carcerieri ti passavano i tuoi magri pasti.`,
                u: () => `Provi a fare un salto, ma il soffitto è troppo alto da raggiungere. Ad ogni modo modo non sembra esserci nulla di interessante.`,
                d: () => `Sei già nella stiva, più in basso di così c'è solo l'inifinità degli abissi!`,
                use_rope_peephole: () => {
                    setWon();
                    incrementPointsBy(20);
                    prisoner.actions = {
                        ...prisoner.actions,
                        o: () => setCurrentScene(/* deadJailer */),
                    }
                    return `Infili la corda che ti teneva legato nello spioncino e riesci a tirare il chiavistello che chiude la porta.
                    Finalmente sei libero!`;
                }
            };
            return `A malincuore rinunci a mangiare il ghiotto boccone e decidi invece di provare a spalmarlo sulle corde che ti tengono imprigionato.
            Uno dei topi che ti fanno compagnia nella misera cella si avvicina leccandosi i baffi e comincia a rosicchiare la corda. 
            In pochi minuti sei libero!`
        },
    },
};

module.exports = prisoner;