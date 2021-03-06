const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');



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
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username.'
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email address."
        },
        {
            type: 'input',
            name: 'license',
            message: 'Include License'
        }
    ]);
};


const writeFile = fileContent => 
{
    return new Promise((resolve, reject) => 
    {
        fs.writeFile('./dist/README.md', fileContent, err =>
        {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err)
            {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve(
                {
                    ok: true,
                    message: 'File created! '
                });
        });
    });
}; 



// function to initialize program
function init() {

questions()
    .then(generateMarkdown)

    .then(pageREADME =>{
        return writeFile(pageREADME);
    })
    .catch(err =>
        {
            console.log(err);
        });

}; 

// function call to initialize program
init();

