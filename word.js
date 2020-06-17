// This imports the letter.js file for access
var Letter = require("./letter.js");

//constructor func 'Word' that depends on the Letter constructor.  This is used to create an object representing the current word the user is attempting to guess.
function Word(word) {
    //an array of 'new' Letter objects representing the letters of underlying word
    this.wordArray = [];
    //for loop to go through each letter 
    for (let i = 0; i < word.length; i++) {
        var char = new Letter(word[i]);
        this.wordArray.push(char);
    }

    //a func that returns a string representing the word. This should call the function on each letter object (the first function defined in letter.js) that displays the character or an underscore and concatenate those together.
    this.displayWord = function () {
        let outputWord = [];
        for (let i = 0; i < this.wordArray.length; i++) {
            outputWord.push(this.wordArray[i].toString());
        }
        return outputWord.join(" ");
    };

    //a func that takes a character as an argument and call the guess func on each letter object(the second funtion defined in letter.js)
    this.checkWord = function (character) {
        for (let i = 0; i < this.wordArray.length; i++) {
            var char = this.wordArray[i];
            char.letterCheck(character);
        }
        return this.displayWord();
    };
}
var car = new Word("car");
// console.log(car.displayWord())
// console.log(car.checkWord("a"))
// console.log(car.displayWord())
//export this file to index.js
// console.log(car.checkWord("b"));



module.exports = Word;