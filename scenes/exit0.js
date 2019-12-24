const { setCurrentScene } = require('./sceneManager');
const { leave } = require('../decoder/pick');
const { setWon } = require('../ended');
const { end } = require('../end');
const { incrementPointsBy } = require('../points');
const keelDefaultActions = require('./keelDefaultActions');

const exit0 = {
    name: 'exit0',
    shortDesc: 'Sei in una minuscola stanzetta, stretta e lunga.',
    longDesc: 'In alto vedi una luce.',
    actions: {
        ...keelDefaultActions,
        e: () => 'Di qui non si passa, questa è tutta l\'aria di essere la chiglia della nave',
        o: () => setCurrentScene('coffers'),
        u: () => 'Provi a fare un salto, ma il boccaporto è troppo alto da raggiungere.',
        use_ladder: () => 'La scala è troppo corta e inoltre non riesci ad agganciarla al boccaporto',
        leave_coffer: (...args) => {
            incrementPointsBy(10);
            exit0.actions.jump_coffer = () => {
                incrementPointsBy(10);

                exit0.actions.use_ladder = () => {
                    incrementPointsBy(10);
                    exit0.actions.u = () => {
                        incrementPointsBy(10);
                        setWon();
                        end();
                    };
                    leave({ rawInput: ['leave', 'ladder'], parsedInput: ['lascia', 'scala di corda'] });

                    return 'Riesci a lanciare la scala abbastanza in alto da agganciarla ai ganci. Puoi salire!';
                };

                return 'Adessi sei un po\' più in alto, ma ancora non riesci ad arrivare al boccaporto.';
            };
            return leave(...args);
        },
    },
};

module.exports = exit0;
