const fs = require('fs');
const { getTurns, setTurns } = require('./turns');
const { getPoints, setPoints } = require('./points');
const { getObjects, setObjects } = require('./objects/objectsManager');
const { getScenes } = require('./scenes/sceneManager');
const { getEnded, getWon, setWon } = require('./ended');
const { getCurrentScene } = require('./scenes/sceneManager');
const _eval = require('node-eval');

function objectToString(object) {
    return JSON.stringify(object, function (key, val) {
        return (typeof val === 'function') ? '' + val : val;
    });
}

function stringToObject(objString) {
    return JSON.parse(objString, (key, val) => {
        const isRegularFunction = typeof val === 'string' && val.indexOf('function') === 0;
        const isArrowFunction = typeof val === 'string' && val.indexOf('=>') > -1;
        return isRegularFunction || isArrowFunction ?
            _eval(val)
            : val
        ;
    });
}

function saveGame() {
    const turns = getTurns();
    const points = getPoints();
    const objects = getObjects();
    const scenes = getScenes();
    const ended = getEnded();
    const won = getWon();
    const currentScene = getCurrentScene();
    //const date = new Date();
    //const fileName = `avventura-galeone-save-${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getSeconds()}.json`;
    const fileName = `avventura-galeone-save.json`;
    const data = objectToString({
        turns,
        points,
        objects,
        scenes,
        ended,
        won,
        currentSceneName: currentScene.name,   
    });
    fs.writeFileSync(fileName, data);
    return `Gioco salvato in ${fileName}`;
}

function loadGame(fileName = 'avventura-galeone-save.json') {
    data = {};

    try {
        const dataString = fs.readFileSync(fileName);
        data = stringToObject(dataString);
    } catch (e) {
        console.log('No data saved');
    }

    const {
        turns,
        points,
        objects,
        ended,
        won,
    } = data;

    turns && setTurns(turns);
    points && setPoints(points);
    objects && setObjects(objects);
    ended && won && setWon(ended, won);

    return data
}

module.exports = {
    saveGame,
    loadGame,
}