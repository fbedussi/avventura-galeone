const fs = require('fs');
const { getActionHistory, setActionHistory, replayActionHistory } = require('./history');

function saveGame() {
    const actionHistory = getActionHistory();
    //const date = new Date();
    //const fileName = `avventura-galeone-save-${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getSeconds()}.json`;
    const fileName = `avventura-galeone-save.json`;
    const data = {
        actionHistory,
    };
    fs.writeFileSync(fileName, JSON.stringify(data))
    return `Gioco salvato in ${fileName}`;
}

function loadGame(fileName = 'avventura-galeone-save.json') {
    data = {};

    try {
        const fileData = fs.readFileSync(fileName);
        data = JSON.parse(fileData);
    } catch (e) {
        console.log('No data saved');
    }

    const { actionHistory } = data;

    if (actionHistory) {
        setActionHistory(actionHistory);
        replayActionHistory();
    }

    return data
}

module.exports = {
    saveGame,
    loadGame,
}