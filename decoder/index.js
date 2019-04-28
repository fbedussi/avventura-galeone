const {
  getDefaultVoidResponse,
  getNoPasingResponse
} = require("../defaultResponses");
const { getInventary } = require("../inventary");
const { getCurrentScene } = require("../scenes/sceneManager");
const { end } = require("../end");
const { getObject, playerHasObject } = require("../objects/objectsManager");
const { help } = require("../help");
const { getRandomArrayItem } = require('../utils');
const { saveGame } = require('../saveGame');
const { pick, leave } = require('./pick');
const { checkWatchAction } = require('./watch');

const commonActions = {
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

const transitiveVerbs = ['eat', 'spread', 'use', 'pick', 'leave'];

function getTransitiveError(verb) {
  return () => `${verb}... cosa?`;
}

function checkTransitiveError(parsedInput, rawInput) {
  return transitiveVerbs.includes(parsedInput[0]) &&
    !parsedInput[1] &&
    getTransitiveError(rawInput[0]);
}

function checkYouDontOwnError(parsedInput, rawInput) {
  const getYouDontOwnError = () => `Non hai ${rawInput[1]}`;

  return parsedInput[0] === 'use' &&
    !playerHasObject(parsedInput[1]) &&
    getYouDontOwnError;
}


function getForbiddenActionError() {
  const forbiddenActionErrors = [
    `Non è possibile`,
    `Purtroppo non è possibile`,
    `Sai bene che non è possibile`,
    `Magari fosse possibile!`,
    `Non funziona`,
    `Non succede nulla`,
    `E niente... non succede niente`,
  ]

  return getRandomArrayItem(forbiddenActionErrors);
}

function checkForbiddenActionError(parsedInput) {
  const action = parsedInput[0];
  const object = getObject(parsedInput[1]);
  const isNotCommonAction = !Object.keys(commonActions).includes(action);
  return parsedInput[1] &&
    object &&
    isNotCommonAction &&
    (!object.actions || !object.actions.length || !object.actions.includes(action)) &&
    getForbiddenActionError;
}

function checkSceneAction(parsedInput) {
  const actionKey = parsedInput.filter(x => x).join("_");
  const currentScene = getCurrentScene();

  return (typeof currentScene.actions[actionKey] === "function" &&
    currentScene.actions[actionKey])
    || currentScene.defaultResponse;
}

function checkPickAction(parsedInput) {
  return parsedInput[0] === "pick" && commonActions.pick
}

function getUnfruitfulAction() {
  const unfruifulActionErrors = [
    'Per fare cosa?',
    'In che modo?',
    'Come?',
    'Non so come',
  ];

  return getRandomArrayItem(unfruifulActionErrors);
}

function checkUnfruifulAction(parsedInput) {
  return parsedInput[1] && getUnfruitfulAction;
}

function decodeAction({ parsedInput, rawInput }) {
  // This function must always return a function
  // To be invoked by `output` in the loop 
  return (
    checkTransitiveError(parsedInput, rawInput) ||
    checkYouDontOwnError(parsedInput, rawInput) ||
    checkSceneAction(parsedInput) ||
    checkWatchAction(parsedInput, rawInput) ||
    checkForbiddenActionError(parsedInput) ||
    checkPickAction(parsedInput) ||
    commonActions[parsedInput[0]] ||
    checkUnfruifulAction(parsedInput) ||
    getDefaultVoidResponse
  );
}

module.exports = {
  decodeAction
};
