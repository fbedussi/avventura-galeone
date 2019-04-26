let promptMsg = '\nCosa devo fare?';
let resolveInput;

function init(bot, msg = promptMsg) {
    promptMsg = msg;
    bot.on('text', (ctx) => {
        ctx.message.text = ctx.message.text.trim().toLowerCase();
        return resolveInput(ctx);
    })
}

function getInput() {
    return new Promise((resolve) => {
        resolveInput = resolve;
    })
}

module.exports = {
    init,
    getInput,
}
