const { getDefaultVoidResponse } = require('../defaultResponses');
const { getCurrentScene } = require('../scenes/sceneManager');
const { getObject, playerHasObject } = require('../objects/objectsManager');
const { getRandomArrayItem } = require('../utils');
const { checkWatchAction } = require('./watch');
const { recordAction } = require('../history');
const { getCommonActions } = require('./commonActions');

const commonActions = getCommonActions();
const transitiveVerbs = ['eat', 'spread', 'use', 'pick', 'leave'];

function getTransitiveError(verb) {
    return () => `${verb}... cosa?`;
}

function checkTransitiveError(parsedInput, rawInput) {
    return transitiveVerbs.includes(parsedInput[0])
    && !parsedInput[1]
    && getTransitiveError(rawInput[0]);
}

function checkYouDontOwnError(parsedInput, rawInput) {
    const getYouDontOwnError = () => `Non hai ${rawInput[1]}`;

    return parsedInput[0] === 'use'
    && !playerHasObject(parsedInput[1])
    && getYouDontOwnError;
}


function getForbiddenActionError() {
    const forbiddenActionErrors = [
        'Non è possibile',
        'Purtroppo non è possibile',
        'Sai bene che non è possibile',
        'Magari fosse possibile!',
        'Non funziona',
        'Non succede nulla',
        'E niente... non succede niente',
    ];

    return getRandomArrayItem(forbiddenActionErrors);
}

function checkForbiddenActionError(parsedInput) {
    const action = parsedInput[0];
    const object = getObject(parsedInput[1]);
    const isNotCommonAction = !Object.keys(commonActions).includes(action);
    return parsedInput[1]
    && object
    && isNotCommonAction
    && (!object.actions || !object.actions.length || !object.actions.includes(action))
    && getForbiddenActionError;
}

function checkSceneAction(parsedInput, rawInput) {
    const actionKey = parsedInput.filter((x) => x).join('_');
    const currentScene = getCurrentScene();

    return (
        typeof currentScene.actions[actionKey] === 'function'
    && recordAction({ sceneName: currentScene.name, actionKey, params: [{ parsedInput, rawInput }] })
    && currentScene.actions[actionKey]
    );
}

function checkPickAction(parsedInput, rawInput) {
    return parsedInput[0] === 'pick'
    && recordAction({ sceneName: null, actionKey: 'pick', params: [{ parsedInput, rawInput }] })
    && commonActions.pick;
}

function checkLeaveAction(parsedInput, rawInput) {
    return parsedInput[0] === 'leave'
    && recordAction({ sceneName: null, actionKey: 'leave', params: [{ parsedInput, rawInput }] })
    && commonActions.pick;
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
        checkTransitiveError(parsedInput, rawInput)
    || checkYouDontOwnError(parsedInput, rawInput)
    || checkSceneAction(parsedInput, rawInput)
    || checkWatchAction(parsedInput, rawInput)
    || checkForbiddenActionError(parsedInput)
    || checkPickAction(parsedInput, rawInput)
    || checkLeaveAction(parsedInput, rawInput)
    || commonActions[parsedInput[0]]
    || checkUnfruifulAction(parsedInput)
    || getDefaultVoidResponse
    );
}

module.exports = {
    decodeAction,
};
