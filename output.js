function output(text) {
	console.log(text.replace(/\n[ \t]+/g, '\n'));
}

module.exports = output;