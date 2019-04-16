let ended = false;

function getEnded() {
    return ended;
}

function setEnded(value) {
    ended = value;
}

module.exports = {
    getEnded,
    setEnded,
}