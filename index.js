'use strict';
const input = require('./input');


function changeScene(newScene) {
	currentScene = newScene;
	output(currentScene.shortDesc);
}

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

const scenes = {
	prisoner: {
		shortDesc: `Sei prigioniero nella stiva di su un galeone pirata.`,
		longDesc: () => `Una robustissima corda ti lega la vita ad un sudicio palo.
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
				ended = true;
				return `La misera crosta placa a malapena i morsi della fame. 
				Purtroppo però continui ad essere legato e non riesci a scappare.
				Il tuo destino è ormai segnato.
				Passano lo ore, ritorna la fame che inesorabilmente ti porta alla morte.`
			},
			spalm_cheese: () => scenes.prisoner.actions.use_cheese(), 
			use_cheese: () => {
				points += 10;
				scenes.prisoner.actions = {
					...scenes.prisoner.actions,
					n: () => `Sbatti contro la lurida parete della cella.`,
					s: () => `Sbatti contro la lurida parete della cella.`,
					e: () => `Sbatti contro la lurida parete della cella.`,
					o: () => `Arrivi ad una pesante porta di metallo che ti sbarra la via. 
					L'unica apertura è lo spioncino da cui i tuoi carcerieri ti passavano i tuoi magri pasti.`,
					u: () => `Provi a fare un salto, ma il soffitto è troppo alto da raggiungere. Ad ogni modo modo non sembra esserci nulla di interessante.`,
					d: () => `Sei già nella stiva, più in basso di così c'è solo l'inifinità degli abissi!`,
					use_rope: () => {
						points += 20;
						scenes.prisoner.actions = {
							...scenes.prisoner.actions,
							o: () => changeScene(scenes.deadJailer),
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
	},
};
let currentScene = scenes.prisoner;

function getRandomArrayItem(arr) {
	const randomIndex = Math.round(Math.random() * (arr.length - 1));
	return arr[randomIndex];	
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

const commonActions = {
	watch: currentScene.longDesc,
	n: getNoPasingResponse,
	s: getNoPasingResponse,
	e: getNoPasingResponse,
	o: getNoPasingResponse,
	u: () => `Non ho ancora imparato a volare!`,
	d: () => `Non ho ancora imparato a scavare!`,	
}

let points = 0;
let ended = false;
let turns = 0;

const objects = {
	cheese: {
		carried: true,
		location: null,
		used: false,
	},
}

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
	spalm: ['spalma'],
	watch: ['guarda', 'vedi', 'osserva', 'scruta'],
}

const objectTable = {
	cheese: ['formaggio'],
};

const complementTable = {};

function decodeTerm(term = '', table) {
	return Object.keys(table).find((key) => table[key].includes(term.trim()));
} 

function output(text) {
	console.log(text);
}

const endingMessages = {
	0: (points) => `oltretutto hai raccolto ${points} miseri punti, datti all'ippica`,
	1: (points) => `oltretutto hai raccolto ${points} miseri punti, vergogna`,
	2: (points) => `hai raccolto ${points} punticini, puoi fare di meglio`,
	3: (points) => `hai raccolto ${points} punticini, non male, ma puoi fare di meglio`,
	4: (points) => `consolati, hai raccolto ${points} punti`,
	5: (points) => `consolati, hai raccolto ${points} punti, non male`,
	6: (points) => `complimenti, hai raccolto ben ${points} punti`,
	7: (points) => `complimenti, hai raccolto il massimo dei punti: ${points}`,
};

function end() {
	output(`Hai giocato ${turns} turni.
	Purtroppo non sei riuscito ad uscire vivo da questa avventura...
	...${endingMessages[Math.round(points / 20)](points)}`);
	process.exit();
}

function parseInput(input) {
	const [rawVerb, rawObject, rawComplement] = input
		.replace("'", " ")
		.split(' ')
		.filter((term) => !stopWords.includes(term))
	;

	return [
		decodeTerm(rawVerb, verbTable),
		decodeTerm(rawObject, objectTable),
		decodeTerm(rawComplement, complementTable)
	];
}

function decodeAction(parsedInput) {
	// TODO: check is subject is undefined but not object?
	const actionKey = parsedInput.filter(x => x).join('_');
	return (typeof currentScene.actions[actionKey] === 'function' && currentScene.actions[actionKey])
		|| currentScene.defaultResponse 
		|| commonActions[actionKey]
		|| getDefaultVoidResponse
	;
}


function loop() {
	turns += 1;
	input.getInput()
		.then((userInput) => {
			const parsedInput = parseInput(userInput);
			const action = decodeAction(parsedInput);
			output(action());
			if (ended) {
				end()
			} else {
				loop();
			}
		})
	;
}

function init() {
	input.init();
	output(currentScene.shortDesc);
	loop();
}

init();


