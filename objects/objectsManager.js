const { getCurrentScene } = require('../scenes/sceneManager');

const MAX_CARRIABLE_OBJECTS = 10;
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

function getObjects() {
    return objects;
}

function getObject(termOrId) {
    const location = getCurrentScene();
    return objects.find(object => (object.term === termOrId || object.id === termOrId) && (object.carried || object.location == location.name));
}

function playerHasObject(objectName) {
    const object = getObject(objectName); 
    return object && object.carried;
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

function setObjects(newObjects) {
    objects = newObjects;
}

function getCarriedObjects() {
    return objects.filter((object) => object.carried);
}

function canCarryMoreObjects() {
    return objects.filter((object) => object.carried).length < MAX_CARRIABLE_OBJECTS;
}

module.exports = {
    objects,
    listCurrentSceneObjects,
    getObject,
    playerHasObject,
    setObject,
    getCarriedObjects,
    getObjects,
    setObjects,
    canCarryMoreObjects,
}
