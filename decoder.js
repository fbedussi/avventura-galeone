const {
  getDefaultVoidResponse,
  getNoPasingResponse
} = require("./defaultResponses");
const { getInventary } = require("./inventary");
const { getCurrentScene } = require("./scenes/sceneManager");
const { end } = require("./end");
const { getObject, playerHasObject, listCurrentSceneObjects } = require("./objects/objectsManager");
const { help } = require("./help");
const { getRandomArrayItem } = require('./utils');

function pick({ parsedInput, rawInput }) {
  const currentLocation = getCurrentScene();
  const objectName = parsedInput[1];
  const rawObjectName = rawInput[1];
  const object = getObject(objectName);

  if (!object || object.location !== currentLocation.name) {
    return `Non c'è nessun ${rawObjectName} qui.`;
  }

  if (object.carried) {
    return `Hai già ${rawObjectName}`;
  }

  object.carried = true;
  object.location = null;

  return `Hai preso ${object.label}`;
}

function checkWatchAction(parsedInput) {
  const object = getObject(parsedInput[1]);
  if (parsedInput[0] !== 'watch') {
    return false;
  }
  if (parsedInput[1] && object && object.description) {
    return () => object.description;
  }
  if (parsedInput[1] && object) {
    return () => object.label;
  }
  if (!parsedInput[1] && !parsedInput[2]) {
    return () => getCurrentScene().longDesc + listCurrentSceneObjects();
  }
}

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
  help: help
};
decodeAction
const transitiveVerbs = ['eat', 'spread', 'use', 'pick'];

function getTransitiveError(verb) {
  return () => `${verb}... cosa?`;
}

function checkTransitiveError(parsedInput, rawInput) {
  return transitiveVerbs.includes(parsedInput[0]) &&
    !parsedInput[1] &&
    getTransitiveError(rawInput[0]);
}

function checkYouDontKnowError(parsedInput, rawInput) {
  const getYouDontOwnError = () => `Non hai ${rawInput[1]}`;

  return parsedInput[0] === 'use' &&
    !playerHasObject(parsedInput[1]) &&
    getYouDontOwnError;
}


function getForbiddenActionError() {
  pick
  const forbiddenActionErrors = [
    `Ma sei matto?`,
    `Non è possibile`,
    `Purtroppo non è possibile`,
    `Sai bene che non è possibile`,
    `Fossi matto`,
    `Magari fosse possibile!`,
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
    `Non è possibile`,
    `Non funziona`,
    'Per fare cosa?',
    `Non succede nulla`,
    `E niente... non succede niente`,
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
    checkYouDontKnowError(parsedInput, rawInput) ||
    checkWatchAction(parsedInput) ||
    checkForbiddenActionError(parsedInput) ||
    checkSceneAction(parsedInput) ||
    checkPickAction(parsedInput) ||
    commonActions[parsedInput[0]] ||
    checkUnfruifulAction(parsedInput) ||
    getDefaultVoidResponse
  );
}

module.exports = {
  decodeAction
};
