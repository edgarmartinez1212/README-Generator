// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a short description explainging the what, why, and how of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project? Provide  a step-by-step description of how to get the development environment running.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "input",
    message: "Select your license",
    name: "license",
  },
  {
    type: "input",
    message: "Contributing guidelines",
    name: "contributing",
  },
  {
    type: "input",
    message: "Tests",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  return fs.writeFile(fileName, markdown, (err) => (err ? console.error(err) : ""));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
