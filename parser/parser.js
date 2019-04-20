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
	pick: ['raccogli', 'prendi', 'p'],
	spread: ['spalma'],
	watch: ['guarda', 'vedi', 'osserva', 'scruta', 'g'],
	inventary: ['inventario', 'i'],
	exit: ['esci', 'stop', 'quit', 'esc'],
	yes: ['no'],
	no: ['no'],
	help: ['help', 'aiuto', 'h'],
}

const objectTable = {
	rope: ['corda', 'fune', 'corde'],
	cheese: ['formaggio'],
	door: ['porta'],
	peephole: ['spioncino'],
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
