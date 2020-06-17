// Creates a function and defines constructor

function Letter(character) {
    this.character = character,
        this.guessed = false,
        // Method to show either the character or an underscore
        this.toString = function () {
            // If letter is guessed, the return will be the character 
            if (this.guessed === false) {
                return "_";
            }
            // If the letter is not guessed, the return will be an underscore
            else {
                return this.character;
            }
        };
    // Method to check if user input is same as character
    this.checkLetter = function (input) {
        if (input === this.character) {
            this.guessed = true;
            return true;
        }
        else {
            return false;
        }
    };

}


// Export the Letter constructor so ability to access in word.js

module.exports = Letter;