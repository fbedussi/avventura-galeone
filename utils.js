function getRandomArrayItem(arr) {
	const randomIndex = Math.round(Math.random() * (arr.length - 1));
	return arr[randomIndex];
}

module.exports = {
    getRandomArrayItem,
}