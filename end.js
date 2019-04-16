const {getTurns} = require('./turns');
const { getPoints } = require('./points');
const output = require('./output');
const turns = getTurns();

const endingMessages = {
	0: (points) => `oltretutto hai raccolto ${points} miseri punti, datti all'ippica!`,
	1: (points) => `oltretutto hai raccolto ${points} miseri punti, vergogna`,
	2: (points) => `hai raccolto ${points} punticini, puoi fare di meglio`,
	3: (points) => `hai raccolto ${points} punticini, non male, ma puoi fare di meglio`,
	4: (points) => `consolati, hai raccolto ${points} punti`,
	5: (points) => `consolati, hai raccolto ${points} punti, non male`,
	6: (points) => `complimenti, hai raccolto ben ${points} punti`,
	7: (points) => `complimenti, hai raccolto il massimo dei punti: ${points}`,
};

function end() {
	const points = getPoints();
	output(`Hai giocato ${turns} turni.
	Purtroppo non sei riuscito ad uscire vivo da questa avventura...
	...${endingMessages[Math.round(points / 20)](points)}`);
	process.exit();
}

module.exports = end;