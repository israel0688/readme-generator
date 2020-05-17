const inquirer = require('inquirer');
const fs = require('fs');



// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project.'
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'Please enter your installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution guidlines.'
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Please enter test instructions'
        }
    ]);
};

questions().then(answers => console.log(answers));

// function to generate readme file
const generatePage = (projectTitle, description, installInstructions, usage, contribution, testInstructions) => {
  return `
  # ${projectTitle}

  ## Description
    *${description} 
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
   *${installInstructions}
    
  ## Usage 
    *${usage}
  
  
  ## License
  
  
  ## Contributing
    *${contribution}
  
  ## Tests
    *${testInstructions}
  `;
};  

// function to write README file
//function writeToFile(fileName, data) {
//}

/*fs.writeFile('./dist/README.md', generatPage(projectTitle, description, installInstructions, usage, contribution, testInstructions), err =>
{
    if (err) throw new Error(err);

    console.log('README complete! Check out README.md in dist folder to see the output!');
});
*/
// function to initialize program
function init() {

}

// function call to initialize program
init();
