const stdin = process.stdin;

let promptMsg = '\nCosa devo fare?';

function init(msg = promptMsg) {
    stdin.setEncoding('utf-8');
    promptMsg = msg;
}

function getInput() {
    return new Promise((resolve) => {
        console.log(promptMsg);
        process.stdin.on('data', function (data) {
            resolve(data);
        });
    })
}

module.exports = {
    init,
    getInput,
}
