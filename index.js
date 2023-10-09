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
        type: 'checkbox',
        message: 'Select a license:',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unilicense']
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
        message: 'Input GitHub username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Input email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Input contact instructions:',
        name: 'contact',
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
