let turns = 0;

function getTurns() {
    return turns;
}

function incrementTurns() {
    turns += 1;
}

module.exports = {
    getTurns,
    incrementTurns,
}