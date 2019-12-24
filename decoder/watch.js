const { getCurrentScene } = require('../scenes/sceneManager');
const { getObject, listCurrentSceneObjects } = require('../objects/objectsManager');

function checkWatchAction(parsedInput, rawInput) {
    const object = getObject(parsedInput[1]);

    // no watch action
    if (parsedInput[0] !== 'watch') {
        return false;
    }

    // watch a know object
    if (object) {
        return () => object.description || object.label;
    }

    // watch an unknown object
    if (!object && rawInput[1]) {
        return () => 'Qui non ne vedo';
    }

    // watch scene
    if (!parsedInput[1] && !parsedInput[2]) {
        return () => `${getCurrentScene().shortDesc}\n${getCurrentScene().longDesc}${listCurrentSceneObjects()}`;
    }

    return undefined;
}

module.exports = {
    checkWatchAction,
};
