//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        choices: ['MIT License', 'IBM Public License', 'Mozilla Public License']
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
  .then((data) => {

    //Adds values to questions array
    questions.push('https://github.com/' + data.username, data.email, data.contact);

    //Replaces username, email, and contact with questions array
    const dataArray = [data];
    dataArray['questions'] = questions;
    delete dataArray[0].username
    delete dataArray[0].email
    delete dataArray[0].contact
    console.log(dataArray);

// TODO: Create a function to write README file
    fs.writeFile('README.md', JSON.stringify(dataArray, null, '/t'), (err) =>
    err ? console.log(err) : console.log('Success!'))
  }
);