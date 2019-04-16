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

function setWon() {
    ended = true;
    won = true;
}

module.exports = {
    getEnded,
    getWon,
    setLoose,
    setWon,
}