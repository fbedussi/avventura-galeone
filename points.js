let points = 0;

function getPoints() {
    return points;
}

function setPoints(newPoints) {
    points = newPoints;
}

function incrementPointsBy(increment) {
    points += increment;
}

module.exports = {
    getPoints,
    setPoints,
    incrementPointsBy,
};