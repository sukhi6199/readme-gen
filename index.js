//running the generator

const fs = require('fs')
const inquirer = require('inquirer')

// license list
const apache = "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).";
const gnu    = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
const mit    = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
const isc    = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";


inquirer.prompt  ([
    {
        type: "input",
        name: "title",
        message: "What's your program title?",
    }, 
    {
        type: "input",
        name: "motivation",
        message: "What's your motivaton to create this application?"
    }, 
    {
        type: "input",
        name: "rationale",
        message: "Why did you build this project?"
    }, 
    {
        type: "input",
        name: "solution",
        message: "What problem does it solve?"
    }, 
    {
        type: "input",
        name: "learn",
        message: "What did you learn?"
    }, 
    {
        type: "input",
        name: "installStep1",
        message: "What is your first step required to install your project?"
    },
    {
        type: "input",
        name: "installStep2",
        message: "What is your second step required to install your project?"
    },     
    {
        type: "input",
        name: "installStep3",
        message: "What is your third step required to install your project?"
    },         {
        type: "input",
        name: "installStep4",
        message: "What is your fourth step required to install your project?"
    },     
    {
        type: "input",
        name: "usage",
        message: "Provide instrutions and examples for use:"
    },   
    {
        type: "input",
        name: "collaborators",
        message: "Do you have collaborators or links to other's Github profile?",
    }, 
 
    {
        type: "list",
        name: "License",
        message: "What type of license would you like?",
        choices: [
            "Apache License 2.0",
            "GNU GPLv3",
            "MIT",
            "ISC",
            "None"
        ]
    },
    {
        type: "input",
        name: "userName",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
])
 .then((answers) => {
    console.log(answers)
    const filename = `README.md`;

    const {title, motivation, rationale, solution, learn, installStep1, installStep2, installStep3, installStep4, usage, collaborators, License, userName, email} = answers;

    fs.writeFile(filename, generateHTML(title, motivation, rationale, solution, learn, installStep1, installStep2, installStep3, installStep4, usage, collaborators, License, userName, email), (err) => {
        err ? console.log("ERROR!") : console.log("SUCCESS!")
        }
    );
})

const generateHTML = (title, motivation, rationale, solution, learn, installStep1, installStep2, installStep3, installStep4, usage, collaborators, License, userName, email) => {
let content = 
`# ${title}

<a href="https://img.shields.io/badge/License-${License}-brightgreen"><img src="https://img.shields.io/badge/License-${License}-brightgreen"></a>

## Description
${motivation}
${rationale}
${solution}
${learn}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)

## Installation
${installStep1}
${installStep2}
${installStep3}
${installStep4}

## Usage
${usage}

## Credits
${collaborators}

## License
${License}

## Questions
If you want to checkout my work, visit my Github account: https://github.com/${userName} or <br>
email me with any questions you might have: ${email}.
`;
return content;
}