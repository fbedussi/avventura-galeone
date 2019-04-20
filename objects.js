const { getCurrentScene } = require('./scenes/sceneManager');

/**
 * @property {boolean} carried - the object is carried by the player
 * @property {string} location - the name of the scene where the object is located
 * @property {string[]} actions - the actions allowed on the object
 * @property {boolean} pickable - the object can be picked
 * @property {boolean} show - the object is listed in the scene description
 * @property {string} description - the detailed description returend when the player looks at the object
 */
const objects = {
    cheese: {
        carried: true,
        label: 'un pezzo di formaggio ammuffito',
        show: true,
        actions: ['eat', 'use', 'spread'],
        pickable: true,
    },
    rope: {
        label: 'la corda che ti teneva legato',
        show: true,
        actions: ['use', 'insert'],
        pickable: true,
    },
    door: {
        location: 'prisoner',
        description: `E Una porta di ferro. Sembra decisamente resistente. 
        Al centro c'è uno spioncino che i tuoi carcerieri usavano per passarti il cibo. Se di cibo si può parlare.
        Ma ovviamente è troppo piccolo perché tu ci possa passare.`,
        show: false,
    }
}

function listCurrentSceneObjects() {
    const currentScene = getCurrentScene();

    const currentSceneObjects = Object.values(objects)
        .filter((object) => 
            object.showInDescription 
            && object.location 
            && object.location === currentScene.name);

    switch (currentSceneObjects.length) {
        case 0:
            return '';
        case 1:
            return `\nC'è ${currentSceneObjects.map(o => o.label).join(', ')}.`;
        default:
            return `\nCi sono: ${currentSceneObjects.map(o => o.label).join(', ')}.`;
    }
}

function getObject(object) {
    return objects[object];
}

function playerHasObject(object) {
    return getObject(object).carried;
}

module.exports = {
    objects,
    listCurrentSceneObjects,
    getObject,
    playerHasObject,
}
