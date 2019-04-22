let turns = 0;

function getTurns() {
    return turns;
}

function setTurns(value) {
    turns = value;
}

function incrementTurns() {
    turns += 1;
}

module.exports = {
    getTurns,
    setTurns,
    incrementTurns,
}