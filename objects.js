const { getCurrentScene } = require('./scenes/sceneManager');

const objects = {
    cheese: {
        carried: true,
        location: null,
        used: false,
        label: 'un pezzo di formaggio ammuffito',
    },
    rope: {
        carried: false,
        location: null,
        used: false,
        label: 'la corda che ti teneva legato'
    },
}

function listCurrentSceneObjects() {
    const currentScene = getCurrentScene();

    const currentSceneObjects = Object.values(objects)
        .filter((object) => object.location && object.location === currentScene.name);

    switch (currentSceneObjects.length) {
        case 0:
            return '';
        case 1:
            return `\nC'è: ${currentSceneObjects.map(o => o.label).join(', ')}.`;
        default:
            return `\nCi sono: ${currentSceneObjects.map(o => o.label).join(', ')}.`;
    }
}

function getObject(object) {
    return objects[object];
}

module.exports = {
    objects,
    listCurrentSceneObjects,
    getObject,
}
