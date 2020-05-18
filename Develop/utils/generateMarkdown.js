// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.projectTitle}

  ## Description
    * ${data.description} 
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
   * ${data.installInstructions}
    
  ## Usage 
    * ${data.usage}
  
  
  ## License
    * ${data.license}
  
  ## Contributing
    * ${data.contribution}
  
  ## Tests
    * ${data.testInstructions}

  ## Questions & How to Reach Me
    * https://github.com/${data.github}
    * ${data.email}
  `;

}

module.exports = generateMarkdown;
