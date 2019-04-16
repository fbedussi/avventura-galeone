const { getRandomArrayItem } = require('./utils');

function getDefaultVoidResponse() {
	const defaultResponses = [
		'Non capisco',
		'Non capisco, mi spiace',
		'Sono un\'intelligenza artificale alle prime armi, non ho capito',
		'Cosa hai detto?',
		'Ti dispiace ripetere? Non ho capito bene',
		'Cosa?',
		'Sei sicuro di quello che dici?',
		'Scusa, ero distratto... dicevi?',
	]
	return getRandomArrayItem(defaultResponses);
}

function getNoPasingResponse() {
	const responses = [
		`Non si passa`,
		`Di là non si va`,
		`Strada senza uscita`,
		`Niente da fare`,
		`Non ho ancora imparato a passare attraverso i muri`,
	]

	return getRandomArrayItem(responses);
}

module.exports = {
    getDefaultVoidResponse,
    getNoPasingResponse,
}