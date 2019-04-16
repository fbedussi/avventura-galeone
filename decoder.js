const { getDefaultVoidResponse, getNoPasingResponse } = require('./defaultResponses');
const { listCurrentSceneObjects } = require('./objects');
const { getInventary } = require('./inventary');
const { getCurrentScene } = require('./scenes/sceneManager');

const commonActions = {
	watch: () => getCurrentScene().longDesc + listCurrentSceneObjects(),
	n: getNoPasingResponse,
	s: getNoPasingResponse,
	e: getNoPasingResponse,
	o: getNoPasingResponse,
	u: () => `Non ho ancora imparato a volare!`,
	d: () => `Non ho ancora imparato a scavare!`,
	inventary: getInventary,
}

const transitiveVerbs = ['eat', 'spread', 'use'];

function getTransitiveError(verb) {
	return () => `${verb}... cosa?`;
}

function decodeAction({ parsedInput, rawInput }) {
	if (transitiveVerbs.includes(parsedInput[0]) && !parsedInput[1]) {
		return getTransitiveError(rawInput[0])
	}

	// TODO: check is subject is undefined but not object?
	const actionKey = parsedInput.filter(x => x).join('_');
	const currentScene = getCurrentScene();
	return (typeof currentScene.actions[actionKey] === 'function' && currentScene.actions[actionKey])
		|| currentScene.defaultResponse
		|| commonActions[actionKey]
		|| getDefaultVoidResponse
		;
}

module.exports = {
    decodeAction,
}