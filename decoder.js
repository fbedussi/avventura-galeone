const { getDefaultVoidResponse, getNoPasingResponse } = require('./defaultResponses');
const { listCurrentSceneObjects } = require('./objects');
const { getInventary } = require('./inventary');
const { getCurrentScene } = require('./scenes/sceneManager');
const { end } = require('./end');
const { getObject, playerHasObject } = require('./objects');

function pick({parsedInput, rawInput}) {
	const objectName = parsedInput[1];
	const rawObjectName = rawInput[1];
	const object = getObject(objectName);
	
	if (!object || object.location !== getCurrentScene().name) {
		return `Non c'è nessun ${rawObjectName} qui.`;
	}

	if (object.carried) {
		return `Hai già ${rawObjectName}`;
	}

	object.carried = true;

	return `Hai preso ${object.label}`;
}

const commonActions = {
	watch: () => getCurrentScene().longDesc + listCurrentSceneObjects(),
	n: getNoPasingResponse,
	s: getNoPasingResponse,
	e: getNoPasingResponse,
	o: getNoPasingResponse,
	u: () => `Non ho ancora imparato a volare!`,
	d: () => `Non ho ancora imparato a scavare!`,
	inventary: getInventary,
	exit: end,
	pick: pick,
}

const transitiveVerbs = ['eat', 'spread', 'use'];

function getTransitiveError(verb) {
	return () => `${verb}... cosa?`;
}

function decodeAction({ parsedInput, rawInput }) {
	const actionKey = parsedInput.filter(x => x).join('_');
	const currentScene = getCurrentScene();
	const youDontOwnError = () => `Non hai ${rawInput[1]}`;
	
	return transitiveVerbs.includes(parsedInput[0]) && !parsedInput[1] && getTransitiveError(rawInput[0])  
		|| parsedInput[0] === 'use' && !playerHasObject(parsedInput[1]) && youDontOwnError
		|| (typeof currentScene.actions[actionKey] === 'function' && currentScene.actions[actionKey])
		|| currentScene.defaultResponse
		|| parsedInput[0] === 'pick' && commonActions.pick
		|| commonActions[actionKey]
		|| getDefaultVoidResponse
		;
}

module.exports = {
	decodeAction,
}