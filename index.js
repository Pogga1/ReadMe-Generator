// *// TODO: Include packages needed for this application//*
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
   type: 'input',
   name: 'Title',
   message: "What is the name of the project?"
},
{
    type: 'input',
    name: 'Description',
   message: "Please provide a short description of the project."
},
{
    type: 'input',
    name: 'TableOfContents',
   message: "please list the information your would like to provide in your table of contents."
},
{
    type: 'input',
    name: 'Installation',
   message: "What do you need to run the project?"
},
{
    type: 'input',
    name: 'Usage',
   message: "How would the user properly navigate the project?"
},
{
    type: 'input',
    name: 'Contributions',
   message: "To whom would you like to credit for assistantce with the project?"
},
{   type: 'confirm',
    name: 'License',
   message: "Did you use any license(s) for the project"
},
{
    type: 'input',
    name: 'LicenseType',
    message: 'which license(s) is needed for this project'
},
{
    type: 'input',
    name: 'Tests',
    message: 'How did you test your app?'
},
{
    type: 'input',
    name: 'Github',
    message: 'What is your GitHub username?'
},
{
    type: 'input',
    name: 'Email',
    message: 'What is your email address?'
}
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(filename, data,
}


// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
    }
// Function call to initialize app
init();