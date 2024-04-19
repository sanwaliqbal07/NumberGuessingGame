#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome To Number Guessing game");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Pease Guess A Number Between 1-6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation You Selected The Right Number.");
}
else {
    console.log("You Guessed The Wrong Number");
    console.log("This Was The Number");
    console.log(randomNumber);
}
