const fs = require('fs');
const readme = require('./README.json');
var formattedText = '';

function writeReadme () { 
    //Creates README.md file
    fs.writeFile('README.md', '', (err) =>
        err ? console.log(err) : console.log('Success!'));

    //Formats title header
    readme.title = "##" + readme.title + "\r\n" + "\r\n";
    //Appends title
    fs.appendFile('README.md', readme.title, (err) =>
    err ? console.log(err) : console.log('Appended title'));

    //Appends description header
    fs.appendFile('README.md', '# Description' + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended description header'));
    //Appends description
    fs.appendFile('README.md', readme.description + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended description'));

    //Appends toc
    //Appends installation header
    fs.appendFile('README.md', '# Installation' + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended installation header'));
    //Appends installation
    fs.appendFile('README.md', readme.installation + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended installation'));

    //Appends usage header
    fs.appendFile('README.md', '# Usage' + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended usage header'));
    //Appends usage
    fs.appendFile('README.md', readme.usage + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended usage'));

    //Appends license header
    fs.appendFile('README.md', '# License' + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended license header'));
    //Appends license
    fs.appendFile('README.md', readme.license + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended license'));

    //Appends contributing header
    fs.appendFile('README.md', '# Contributing' + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended contributing header'));
    //Appends contributing
    fs.appendFile('README.md', readme.contributing + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended contributing'));

    //Appends tests header
    fs.appendFile('README.md', '# Tests' + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended tests header'));
    //Appends tests
    fs.appendFile('README.md', readme.tests + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended tests'));  

    //Appends questions header
    fs.appendFile('README.md', '# Questions' + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended questions header'));
    //Appends questions
    fs.appendFile('README.md', readme.questions + "\r\n" + "\r\n", (err) =>
    err ? console.log(err) : console.log('Appended questions'));      
}
writeReadme();

readme.title = "##" + readme.title;
console.log (readme.title);

