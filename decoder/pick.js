const { getCurrentScene } = require('../scenes/sceneManager');
const { getObject, canCarryMoreObjects } = require('../objects/objectsManager');

function pick({ parsedInput, rawInput }) {
    const currentLocation = getCurrentScene();
    const objectName = parsedInput[1];
    const rawObjectName = rawInput[1];
    const object = getObject(objectName);

    if (!object || object.location !== currentLocation.name) {
        return `${rawObjectName}? Qui non ce n'è.`;
    }

    if (!object.pickable) {
        return 'Non è possibile!';
    }

    if (object.carried) {
        return `Hai già ${rawObjectName}`;
    }

    if (!canCarryMoreObjects()) {
        return 'Sei già carico, per prendere ulteriori oggetti devi lasciare qualcosa';
    }

    object.carried = true;
    object.location = null;

    return `Hai preso ${object.label}`;
}

function leave({ parsedInput, rawInput }) {
    const currentLocation = getCurrentScene();
    const objectName = parsedInput[1];
    const rawObjectName = rawInput && rawInput[1];
    const object = getObject(objectName);

    if (!object || !object.carried) {
        return `${rawObjectName}? Non ne hai!`;
    }

    object.carried = false;
    object.show = true;
    object.location = currentLocation.name;

    return `Hai lasciato ${object.label}`;
}

module.exports = {
    pick,
    leave,
};
