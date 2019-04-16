'use strict';
const input = require('./input');
const scenes = require('./scenes/index');
const { setCurrentScene } = require('./scenes/sceneManager');
const { loop } = require('./loop');

function init() {
	setCurrentScene(scenes.prisoner);
	input.init();
	loop();
}

init();
