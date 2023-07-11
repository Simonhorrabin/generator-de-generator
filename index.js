// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require("path");
// const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "what's the title of your project",
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}},

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project:',
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}},
    },   
    {
        type: 'input',
        name: 'installation',
        message: 'what are the steps required to install your project?',
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'usage',
        message: 'provide instructions and examples for use.',
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'list',
        name: 'license',
        message:'What license did you use?',
        choices: ["MIT", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
    type: 'input',
    name: 'contact',
    message: "what email is best to contact you?",
    validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}},
    },
]

inquirer.prompt(questions).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    email,
    usage,
    contribution,

}) => {

    const template = `# ${title}
    
* [Installation] (#installation)
* [Usage] (#usage)
* [contribution] (#contribution)
* [Credits] (credits)
* [License] (#license)
    
${installation}
## Usage
${usage}
## Contribution
${contribution}
## Instructions 
${instructions}
## Credits
${credit}
## License
${license}
    
# Contact
* Github 
* E-mail :${email}`
    
    fs.writeFile("./dist/README.md", template, (err) => {
        if (err) throw err;
    })
});

















// const inquirer = require('inquirer');
// const fs = require('fs');
// const { message } = require('statuses');


// inquirer.prompt(
//     [
//         {
//             type: 'input',
//             message="What is yourGitHub username?",
//             name:'github'
//             // validate 
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Enter Github username!');
//                     return false;
//                 }
//             },
//             (value)=>{if(value){return true} else {return 'ineed a value to continue'}},
//         },
//         {
//             type: 'input',
//             message="What's the project title?",
//             name:'title'
//             // validate 
//             validate: (value)=>{if(value){return true} else {return 'ineed a value to continue'}},
//         },
//         {
//             type: 'input',
//             message="What's the project title?",
//             name:'title'
//             // validate 
//             validate: (value)=>{if(value){return true} else {return 'ineed a value to continue'}},
//         },
        
        
//     ]
// )