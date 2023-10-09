const fs = require('fs');
const readme = require('./README.json');

function writeReadme () { 
    //Creates README.md file
    fs.writeFile('README.md', '', (err) =>
        err ? console.log(err) : console.log('Success!'));

    //Formats title header
    readme.title = "## " + readme.title + "\r\n" + "\r\n";

    //Appends title
    fs.appendFile('README.md', readme.title, (err) =>
    err ? console.log(err) : console.log('Appended title'));
}
writeReadme();

function appendReadme() {
//Appends readme
fs.appendFile('README.md', 
'# Description' + "\r\n" + "\r\n" +  readme.description + "\r\n" + "\r\n" + 
'# Installation' + "\r\n" + "\r\n" + readme.installation + "\r\n" + "\r\n" +
'# Usage' + "\r\n" + "\r\n" + readme.usage + "\r\n" + "\r\n" +
'# License' + "\r\n" + "\r\n" + readme.license + "\r\n" + "\r\n" +
'# Contributing' + "\r\n" + "\r\n" + readme.contributing + "\r\n" + "\r\n" +
'# Tests' + "\r\n" + "\r\n" + readme.tests + "\r\n" + "\r\n" +
'# Questions' + "\r\n" + "\r\n" + readme.questions + "\r\n" + "\r\n", 
(err) => err ? console.log(err) : console.log('Appended readme'));      
}
appendReadme();

