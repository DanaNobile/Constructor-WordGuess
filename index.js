// This imports the word.js file for access
var Word = require("./word.js");

// This imports inquirer for user guessing access 
var inquirer = require("inquirer");

// Global variables
let guesses
let wordsChosen;
let word;
let pickedWord;

// Word guess logic

let wordChoice = [
    "downward dog",
    "pigeon",
    "triangle",
    "warrior",
    "wheel",
    "tree",
    "pyramid",
    "boat",
    "dancer",
    "chair",
    "mountain"
];

// Intro to game
function gameIntro() {
    wordsChosen = [];
    console.log("Let's start playing the yoga posture guessing game! Enter your posture guesses in English (rather than Sanskrit).")
    console.log("- - - - - - - - - - - -")

    // Calls function to start game 
    gamePlay();
}

// Game start
function gamePlay() {
    pickedWord = "";
    guesses = 10;
    if (wordsChosen.length < wordChoice.length) {
        pickedWord = randWord();
    } else {

        console.log("Great posture! Congrats on getting this one right!");
        gameContinue();
    }
    if (pickedWord) {
        word = new Word(pickedWord);
        word.displayWord();
        userGuess();
    }
}

//Randomly selects a word and uses the Word constructor to store it
function randWord() {
    let rand = Math.floor(Math.random() * wordChoice.length);
    let randomWord = wordChoice[rand];
    if (wordsChosen.indexOf(randomWord) === -1) {
        wordsChosen.push(randomWord);
        return randomWord;
    } else {
        return randWord();
    }
}

//Prompts the user for each guess and keeps track of the user's remaining guesses
function userGuess() {
    let checker = [];
    inquirer
        .prompt([
            {
                name: "guessedLetter",
                message:
                    word.displayWord() +
                    "\nGuess a letter!" +
                    "\nuserGuess Left: " +
                    guesses,
            },
        ])
        .then(function (data) {
            word.wordArray.forEach((character) => {
                character.checkLetter(data.guessedLetter);
                checker.push(character.toString());
            });
            if (guesses > 0 && checker.indexOf("_") !== -1) {
                guesses--;
                if (guesses === 0) {
                    console.log("Sorry, no more guesses! GAME OVER.");
                    gameContinue();
                } else {
                    userGuess();
                }
            } else {
                console.log("Congrats!! You picked the correct word!");
                console.log(word.displayWord());
                gamePlay();
            }
        });
}

//when game is complete this prompts the player to choose whether to play again
function gameContinue() {
    inquirer
        .gameIntro([
            {
                name: "continue",
                type: "list",
                message: "Do you want to play the posture guess game again?",
                choices: ["Yes", "No"],
            },
        ])
        .then((data) => {
            if (data.continue === "Yes") {
                gameIntro();
            } else {
                console.log("Thanks for playing, see you next time!");
            }
        });
}

// Starts game again
gameIntro();