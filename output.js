function output(ctx, text) {
	ctx.reply(text.replace(/\n[ \t]+/g, '\n'));
}

module.exports = output;
