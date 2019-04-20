'use strict';
const input = require('./input');
const { getEnded } = require('./ended');
const output = require('./output');
const { end } = require('./end');
const { incrementTurns } = require('./turns');
const { parseInput } = require('./parser/parser');
const { decodeAction } = require('./decoder');

function loop() {
	incrementTurns();
	input.getInput()
		.then((userInput) => {
			const parsedInput = parseInput(userInput);
			const action = decodeAction(parsedInput);
			output(action(parsedInput));
			if (getEnded()) {
				end()
			} else {
				loop();
			}
		})
		;
}

module.exports = {
    loop,
};