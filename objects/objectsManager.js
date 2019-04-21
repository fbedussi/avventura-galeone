const { getCurrentScene } = require('../scenes/sceneManager');

let objects = require('./objects');

function listCurrentSceneObjects() {
    const currentScene = getCurrentScene();

    const currentSceneObjects = objects
        .filter((object) =>
            object.show
            && object.location
            && object.location === currentScene.name);

    switch (currentSceneObjects.length) {
        case 0:
            return '';
        case 1:
            return `\nC'è ${currentSceneObjects[0].label}.`;
        default:
            return `\nCi sono: ${currentSceneObjects.map(o => o.label).join(', ')}.`;
    }
}

function getObject(term) {
    const location = getCurrentScene();
    return objects.find(object => object.term === term && (object.carried || object.location == location.name));
}

function playerHasObject(object) {
    return !!getObject(object);
}

function setObject(updatedObject) {
    objects = objects.map((object) =>
        object.id === updatedObject.id ?
            {
                ...object,
                ...updatedObject,
            }
            : object
    );
}

function getCarriedObjects() {
    return objects.filter((object) => object.carried);
}

module.exports = {
    objects,
    listCurrentSceneObjects,
    getObject,
    playerHasObject,
    setObject,
    getCarriedObjects,
}
