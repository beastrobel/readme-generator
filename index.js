//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Create an array of questions for user input
const questions = [];
const license = [];

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
        choices: ['MIT License', 'Unilicense', 'Mozilla Public License']
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
        type: 'checkbox',
        message: 'Select contact instructions:',
        name: 'questions',
        choices: ['Email', 'Phone']
    },
  ])
  .then((data) => {

    //Adds values to questions array
    data.questions[1] = ('username:', 'https://github.com/' + data.username);
    data.questions[2] = ('email:', data.email);

    //Adds values to license array
        if (data.license == 'MIT License'){
            data.license[1] = ('badge:', '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]');
            data.license[2] = ('link:', 'https://api.github.com/licenses/mit');
        } else if (data.license == 'Unilicense') {
            data.license[1] = ('badge:', '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)');
            data.license[2] = ('link:', 'https://api.github.com/licenses/unlicense');
        } else if (data.license == 'Mozilla Public License') {
            data.license[1] = ('badge:', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
            data.license[2] = ('link:', 'https://api.github.com/licenses/mpl-2.0');
        } else {
        console.log ('no license selected');
        }
        console.log (data);

// TODO: Create a function to write README file
    fs.writeFile('README.json', JSON.stringify(data, null, ' '), (err) =>
    err ? console.log(err) : console.log('Success!'))
});