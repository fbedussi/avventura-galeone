const { getNoPasingResponse } = require("../defaultResponses");
const { saveGame } = require('../saveGame');
const { pick, leave } = require('./pick');
const { help } = require("../help");
const { end } = require("../end");
const { getInventary } = require("../inventary");

const commonActions =   {
    n: getNoPasingResponse,
    s: getNoPasingResponse,
    e: getNoPasingResponse,
    o: getNoPasingResponse,
    u: () => `Non ho ancora imparato a volare!`,
    d: () => `Non ho ancora imparato a scavare!`,
    inventary: getInventary,
    exit: end,
    pick: pick,
    leave: leave,
    save: saveGame,
    help: help
  };
  
  function getCommonActions() {
    return commonActions;
  }

  module.exports = {
      getCommonActions,
  }