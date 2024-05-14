#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function welcome() {
    let title = chalkAnimation.rainbow(`\n\t--------------------------------- \n\t     Welcome To Word Counter\n\t---------------------------------\n`, 5);
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    title.stop();
}
await welcome();
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.hex("#6420AA")("Enter your sentence:")
    }
]);
const sentence = answer.sentence.trim().split(" ").filter(word => word.trim() !== '');
let words = sentence.length;
const letter = sentence.join('');
let characters = letter.length;
console.log(`\n${chalk.hex("#97FFF4")("Your sentence word count is:")} ${chalk.hex("#FF7ED4")(words)}`);
console.log(`${chalk.hex("#97FFF4")("Your sentence character count is:")} ${chalk.hex("#FF7ED4")(characters)}`);
