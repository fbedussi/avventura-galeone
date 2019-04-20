const { objects } = require('./objects');

function getInventary() {
    const possessions = Object.values(objects)
        .filter((object) => object.carried)
        .map((object) => object.label)
        ;

    switch (possessions.length) {
        case 0:
            return `Purtroppo al momento non possiedi nulla.`;
        case 1:
            return `Al momento possiedi solo ${possessions[0]}.`;
        default:
            return  `Al momento possiedi: ${possessions.join(', ')}.`;
    }
}

module.exports = {
    getInventary,
};