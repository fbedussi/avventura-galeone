const stopWords = require('./stopWords');

const verbTable = {
	n: ['nord', 'n'],
	s: ['sud', 's'],
	e: ['est', 'e'],
	o: ['ovest', 'o'],
	u: ['alto', 'a'],
	d: ['basso', 'b'],
	eat: ['mangia', 'addenta', 'sgranocchia'],
	use: ['usa', 'u'],
	insert: ['infila', 'inserisci', 'passa'],
	pick: ['raccogli', 'prendi', 'p'],
	leave: ['lascia', 'l', 'molla', 'smolla'],
	spread: ['spalma'],
	watch: ['guarda', 'vedi', 'osserva', 'scruta', 'g'],
	inventary: ['inventario', 'i'],
	exit: ['esci', 'stop', 'quit', 'esc', 'exit'],
	yes: ['no'],
	no: ['no'],
	help: ['help', 'aiuto', 'h'],
	save: ['save', 'salva'],
}

const objectTable = {
	rope: ['corda', 'fune', 'corde'],
	cheese: ['formaggio'],
	door: ['porta'],
	peephole: ['spioncino'],
	mirror: ['specchio', 'frammento di specchio'],
	jailer: ['carceriere', 'secondino'],
	pirate: ['pirata', 'corsaro', 'bucaniere'],
	key: ['chiave', 'chiavi'],
	knife: ['coltello'],
	shelf: ['scaffale'],
	sail: ['vela', 'vele'],
	wood: ['legno', 'legni'],
	leg: ['gambe', 'gamba'],
	coffers: ['forzieri'],
	coffer: ['forziere'],
	hole: ['boccaporto'],
};

function decodeTerm(term = '', table) {
	return Object.keys(table).find((key) => table[key].includes(term.trim()));
}

function parseInput(input) {
	const rawInput = input
		.replace("'", " ")
		.split(' ')
		.filter((term) => !stopWords.includes(term))
		;
	const [rawVerb, rawObject, rawComplement] = rawInput

	return {
		parsedInput: [
			decodeTerm(rawVerb, verbTable),
			decodeTerm(rawObject, objectTable),
			decodeTerm(rawComplement, objectTable)
		],
		rawInput,
	};
}

module.exports = {
    parseInput,
}
