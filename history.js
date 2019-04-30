const { getScenes } = require('./scenes/sceneManager');
let actionHistory = []

function getActionHistory() {
    return actionHistory;
}

function setActionHistory(newHistory) {
    actionHistory = newHistory;
}

/**
 * @typedef actionData
 * @prop {string} sceneName
 * @prop {string} actionKey
 * @prop {array} params
 * 
 * @param {actionData} actionData 
 */
function recordAction(actionData) {
    actionHistory.push({ params: [], ...actionData });

    return true;
}

function replayActionHistory() {
    const { getCommonActions } = require('./decoder/commonActions');
    const scenes = getScenes();
    const commonActions = getCommonActions();

    actionHistory.forEach(({ sceneName, actionKey, params }) => {
        const action = sceneName ?
            scenes[sceneName].actions[actionKey]
            : commonActions[actionKey]
        ;
        action && action(...params);
    });
}

module.exports = {
    getActionHistory,
    setActionHistory,
    recordAction,
    replayActionHistory,
}