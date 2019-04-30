"use strict";
const input = require("./input");
const { loadGame } = require('./saveGame');
const { getCurrentScene, setCurrentScene } = require("./scenes/sceneManager");
const { loop } = require("./loop");
const { help } = require("./help");
const output = require('./output');

loadGame();

const currentScene = getCurrentScene();

function init() {
  output(help());
  output(setCurrentScene(currentScene));
  input.init();
  loop();
}

init();
