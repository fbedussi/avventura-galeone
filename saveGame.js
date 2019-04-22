const fs = require('fs');
const { getTurns, setTurns } = require('./turns');
const { getPoints, setPoints } = require('./points');
const { getObjects, setObjects } = require('./objects/objectsManager');
const { getScenes } = require('./scenes/sceneManager');
const { getEnded, getWon, setWon } = require('./ended');

function objectToString(object) {
    return JSON.stringify(object, function (key, val) {
        return (typeof val === 'function') ? '' + val : val;
    });
}

function stringToObject(objString) {
    return JSON.parse(objString, function (key, val) {

        // Make sure the current value is not null (is a string)
        // and that the first characters are "function"
        if (typeof val === "string" && val.indexOf('function') === 0) {

            // Isolate the argument names list
            var start = val.indexOf("(") + 1;
            var end = val.indexOf(")");
            var argListString = val.substring(start, end).split(",");

            // Isolate the body of the function
            var body = val.substr(val.indexOf("{"), val.length - end + 1);

            // Construct a new function using the argument names and body
            // stored in the string:
            return new Function(argListString, body);

        } else {
            // Non-function property, just return the value
            return val;
        }
    });
}

function saveGame() {
    const turns = getTurns();
    const points = getPoints();
    const objects = getObjects();
    const scenes = getScenes();
    const ended = getEnded();
    const won = getWon();
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
    ended && won && setWon(ended, won)

    return data
}

module.exports = {
    saveGame,
    loadGame,
}