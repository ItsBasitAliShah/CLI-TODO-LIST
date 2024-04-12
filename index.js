#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.greenBright.bold("\n \t Welcome to my Todo-List Application\n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your task",
        },
    ]);
    todoList.push(addTask.task);
    console.log(`"${addTask.task}" Task added in todo list Succecfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task?",
            default: "False",
        },
    ]);
    condition = addMoreTask.addmore;
}
console.log("Your updated Todo List is:", todoList);
