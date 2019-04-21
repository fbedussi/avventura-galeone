"use strict";
const input = require("./input");
const scenes = require("./scenes/index");
const { setCurrentScene } = require("./scenes/sceneManager");
const { loop } = require("./loop");
const { help } = require("./help");
const output = require('./output');

function init() {
  output(help());
  output(setCurrentScene(scenes.prisoner));
  input.init();
  loop();
}

init();
