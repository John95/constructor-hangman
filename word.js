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

	this.blanks = [];
	for (var i = 0; i < this.word.length; i++) {
		this.blanks.push("-");
	}
}

module.exports = Word;