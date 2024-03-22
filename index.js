#! /usr/bin/env node
import inquirer from "inquirer";
// 1. Computer will generate Number
// 2. User Input for gussing number
// 3. computer user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuess",
        type: "number",
        message: "Please guess a number 1-6: ",
    },
]);
if (answer.UserGuess === randomNumber) {
    console.log("Congratulation!  Your Result is Correct.");
}
else {
    console.log("You Guess Wrong Number.");
}
