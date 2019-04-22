let currentScene;

function getScenes() {
    const scenes = require('./index');
    return scenes;
}

function getScene(sceneName) {
    const scenes = require('./index');
    return Object.values(scenes).find((scene) => scene.name === sceneName);
}

function setCurrentScene(newScene) {
	currentScene = typeof newScene === 'string' ? getScene(newScene) : newScene;
	return currentScene.shortDesc;
}

function getCurrentScene() {
    return currentScene;
}

module.exports = {
    setCurrentScene,
    getCurrentScene,
    getScenes,
}