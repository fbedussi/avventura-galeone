const output = require('../output');

let currentScene;

function setCurrentScene(newScene) {
	currentScene = newScene;
	output(currentScene.shortDesc);
}

function getCurrentScene() {
    return currentScene;
}

module.exports = {
    setCurrentScene,
    getCurrentScene,
}