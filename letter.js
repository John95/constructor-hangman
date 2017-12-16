function Letter(word) {
	this.word = word;

	this.letterGuesses = [];

	for (var i = 0; i < this.word.length; i++) {
		this.letterGuesses.push(this.word.charAt(i))
	}
}

module.exports = Letter;