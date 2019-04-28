"use strict";
const input = require("./input");
const { loadGame } = require('./saveGame');
const savedData = loadGame();
const { setScenes, getScenes, setCurrentScene } = require("./scenes/sceneManager");
const { loop } = require("./loop");
const { help } = require("./help");
const output = require('./output');

savedData.scenes && setScenes(savedData.scenes);

const scenes = getScenes();
const currentScene = savedData.currentSceneName || scenes.prisoner

function init() {
  output(help());
  output(setCurrentScene(currentScene));
  input.init();
  loop();
}

init();
