const stopWords = require('./stopWords');
const { getCurrentScene } = require('../scenes/sceneManager');
const { getObjects } = require('../objects/objectsManager');

const verbTable = {
    n: ['nord', 'n'],
    s: ['sud', 's'],
    e: ['est', 'e'],
    o: ['ovest', 'o'],
    u: ['alto', 'al'],
    d: ['basso', 'b'],
    eat: ['mangia', 'addenta', 'sgranocchia'],
    drink: ['bevi'],
    use: ['usa', 'u'],
    insert: ['infila', 'inserisci', 'passa'],
    pick: ['raccogli', 'prendi', 'p'],
    leave: ['lascia', 'l', 'molla', 'smolla', 'poggia'],
    spread: ['spalma'],
    watch: ['guarda', 'vedi', 'osserva', 'scruta', 'g', 'guardati', 'perquisisci'],
    inventary: ['inventario', 'i'],
    exit: ['esci', 'stop', 'quit', 'esc', 'exit'],
    yes: ['no'],
    no: ['no'],
    help: ['help', 'aiuto', 'h'],
    save: ['save', 'salva'],
    jump: ['salta', 'sali'],
    open: ['sfoglia', 'apri'],
    read: ['leggi'],
    pull: ['solleva', 'tira', 'togli', 'sposta', 'gira'],
    chest: ['scrigno'],
    sit: ['siedi', 'siediti'],
};

const objectTable = {
    rope: ['corda', 'fune', 'corde'],
    cheese: ['formaggio'],
    door: ['porta'],
    peephole: ['spioncino'],
    mirror: ['specchio', 'frammento di specchio'],
    jailer: ['carceriere', 'secondino', 'pirata'],
    pirate: ['pirata', 'corsaro', 'bucaniere'],
    pirates: ['pirata', 'pirati'],
    key: ['chiave', 'chiavi'],
    knife: ['coltello'],
    shelf: ['scaffale'],
    sail: ['vela', 'vele'],
    wood: ['legno', 'legni'],
    leg: ['gamba'],
    legs: ['gambe'],
    coffers: ['forzieri'],
    coffer: ['forziere'],
    hole: ['boccaporto'],
    ladder: ['scala'],
    stove: ['stufa'],
    oven: ['forno', 'forni'],
    cooker: ['piastra'],
    cookware: ['pentole', 'padelle', 'pentola', 'padella', 'attrezzi', 'coperchi', 'mestoli', 'cucchiai'],
    barrels: ['barili', 'barile'],
    meat: ['carne'],
    carboys: ['damigiane', 'damigiana'],
    wine: ['vino'],
    water: ['acqua'],
    boxes: ['scatole', 'scatola'],
    cookies: ['gallette', 'biscotti', 'galletta', 'biscotto'],
    goatskin: ['otri', 'otre'],
    food: ['cibo', 'viveri'],
    chairs: ['sedie', 'seida'],
    table: ['tavolo', 'tavola', 'tavolaccio'],
    window: ['finestra', 'finestre', 'vetrata'],
    sofa: ['divano', 'sofà'],
    desk: ['scrivania', 'scrittoio'],
    prints: ['stampe', 'quadri'],
    maps: ['carte'],
    log: ['diario'],
    third: ['terza'],
    wallhole: ['vano'],
    handle: ['maniglia'],
    chest: ['scrigno'],
};

function decodeTerm(term = '', table) {
    return Object.keys(table).find((key) => table[key].includes(term.trim()));
}

function decodeObject(term = '', table) {
    const trimmedTerm = term.trim();
    const scene = getCurrentScene();
    const objects = getObjects();
    return Object.keys(table).find((key) => {
        const keyIsRight = table[key].includes(trimmedTerm);

        if (!keyIsRight) {
            return false;
        }

        const object = objects.find((o) => o.term === key && (o.carried || o.location === scene.name));
        return Boolean(object);
    });
}

function parseInput(input) {
    const rawInput = input
        .replace("'", ' ')
        .split(' ')
        .filter((term) => !stopWords.includes(term));
    const [rawVerb, rawObject, rawComplement] = rawInput;

    return {
        parsedInput: [
            decodeTerm(rawVerb, verbTable),
            decodeObject(rawObject, objectTable),
            decodeObject(rawComplement, objectTable),
        ],
        rawInput,
    };
}

module.exports = {
    parseInput,
};
