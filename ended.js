let ended = false;
let won = false;

function getEnded() {
    return ended;
}

function getWon() {
    return won
}

function setLoose() {
    ended = true;
}

function setWon(endedValue = true, wonValue = true) {
    ended = endedValue;
    won = wonValue;
}

module.exports = {
    getEnded,
    getWon,
    setLoose,
    setWon,
}