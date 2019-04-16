const { objects } = require('./objects');

function getInventary() {
    const possessions = Object.values(objects)
        .filter((object) => object.carried)
        .map((object) => object.label)
        .join(', ')
        ;
    return possessions.length ? `Al momento possiedi: ${possessions}.` : `Al momento non possiedi nulla.`;
}

module.exports = {
    getInventary,
};