function output(text) {
	console.log(text.replace(/[\t]/g, '').replace(/ +/g, ' '));
}

module.exports = output;