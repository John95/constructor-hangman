function Word() {
	this.wordList = [
		"buddy",
		"squad",
		"sasquatch",
		"bigfoot",
		"beast",
		"babby"
	]

	this.randomNum = Math.floor((Math.random() * this.wordList.length));
	this.word = this.wordList[this.randomNum];
}

module.exports = Word;