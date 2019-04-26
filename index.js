"use strict";
require('dotenv').config();
const input = require("./input");
const { loadGame } = require('./saveGame');
const { getCurrentScene, setCurrentScene } = require("./scenes/sceneManager");
const { loop } = require("./loop");
const { help } = require("./help");
const output = require('./output');
const Telegraf = require('telegraf');

loadGame();

const currentScene = getCurrentScene();

function init(bot, ctx) {
  output(ctx, help());
  output(ctx, setCurrentScene(currentScene));
  input.init(bot);
  loop();
}

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
  init(bot, ctx);
})
bot.help((ctx) => {
  output(ctx, help());
})
bot.launch()

module.exports = (req, res) => {
  res.end('Welcome to my API')
}