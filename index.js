//Include packages needed for this application
const inquirer = require('inquirer');

//Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Input project title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Input project description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Input table of contents:',
        name: 'toc',
    },
    {
        type: 'input',
        message: 'Input installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Input usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Input license:',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Input contributors:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Input tests:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Input questions:',
        name: 'questions',
    },
  ])
  .then((response) =>
    console.log(response)
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
