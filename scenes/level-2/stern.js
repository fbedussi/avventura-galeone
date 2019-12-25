const { setCurrentScene } = require('../sceneManager');
const bridgeDefaultActions = require('../bridgeDefaultActions');

const stern = {
    name: 'stern',
    shortDesc: 'Sei sulla poppa.',
    longDesc: 'Sei sul cassero di poppa. Dietro puoi vedere la scia bianca lasciata dal galeone.',
    actions: {
        ...bridgeDefaultActions,
        e: () => setCurrentScene('in2'),
    },
};

module.exports = stern;
