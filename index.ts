#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer: { sentence: string } = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.hex("#6420AA")("Enter your sentence:")
    }
]);

const sentence = answer.sentence.trim().split(" ");
let words = sentence.length;

console.log(`${chalk.hex("#97FFF4")("Your sentence word count is:")} ${chalk.hex("#FF7ED4")(words)}`);