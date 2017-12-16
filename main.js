var Word = require('./word');
var Letter = require('./letter');

var theWord = new Word();
var guess = new Letter(theWord.word);

// if the guess is not already guessed, proceed, else say "You already guessed that!"
// if (guessed) {

// 	// if the guess is in the word, proceed, else say "Sorry, that's not in the word!" and 
// 	if (inWord) {
// 	// 	add the guess to wrongGuesses list and increment a counter for hangman death.
// 		// if the guess is correct, then replace appropriate blanks with the guess.
// 		if (correct) {

// 		} else {
// 			console.log("Your guess is incorrect! Error! This message shouldn't be possible to get to!");
// 		}
// 	} else {
//  		console.log("Sorry, that's not in the word :(");
// 	}	
// } else {
// 	console.log("Sorry, you already guessed that!");
// }

console.log(theWord.blanks);