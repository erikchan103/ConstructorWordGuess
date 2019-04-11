var word = require("./Word");
var inquirer = require('inquirer');

function startGame() {
    var count=5;
    console.log("Guess my word!")
    var wordBank = ["elephant", "giraffe", "llama","aardvark"];
    var chosen = wordBank[Math.floor(Math.random() * wordBank.length)];
    var x = new word(chosen);
    console.log(x.puzzle());
    guessingTime(x,count);
}

function checkGame(x){
    var solved = true;
    for (var i = 0; i < x.objectArray.length; i++) {
        if (!x.objectArray[i].guess) {
            solved = false;
        }
    };
    return solved;
};

function guessingTime(x,count) {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "letter"
            }
        ]).then(function (response) {
            var previous= x.puzzle();
            x.attempt(response.letter);
            console.log(x.puzzle());
            if(x.puzzle()===previous){
                count--;
                console.log("Incorrect!")
                console.log("You have "+count+" attempts left.");
            }
            else{
                console.log("Correct!")
            }
            if(count>0){
                if(!checkGame(x)){
                    guessingTime(x,count);
                }
                else{
                    console.log("You win!")
                }
            }
            else{
                console.log("You ran out of guesses. You lose.")
            }
        })
}

startGame();