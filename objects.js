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
        label: 'i resti della corda che ti teneva legato'
    },
}

function listCurrentSceneObjects() {
    const currentScene = getCurrentScene();

    const currentSceneObjects = Object.values(objects)
        .filter((object) => object.location && object.location.name === currentScene.name);

    return currentSceneObjects.length ?
        `\nCi sono: ${currentSceneObjects.map(o => o.label).join(', ')}.`
        : ''
    ;
}

module.exports = {
    objects,
    listCurrentSceneObjects,
}
