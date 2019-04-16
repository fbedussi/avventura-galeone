const stopWords = ['il', 'la', 'un', 'una', 'uno', 'di', 'a', 'da', 'in', 'con', 'su', 'per', 'tra', 'fra'];

const verbTable = {
	n: ['nord', 'n'],
	s: ['sud', 's'],
	e: ['est', 'e'],
	o: ['ovest', 'o'],
	u: ['alto', 'a'],
	d: ['basso', 'b'],
	eat: ['mangia', 'addenta', 'sgranocchia'],
	use: ['usa'],
	spread: ['spalma'],
	watch: ['guarda', 'vedi', 'osserva', 'scruta'],
	inventary: ['inventario', 'i'],
}

const objectTable = {
	cheese: ['formaggio'],
};

const complementTable = {};

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
			decodeTerm(rawComplement, complementTable)
		],
		rawInput,
	};
}

module.exports = {
    parseInput,
}