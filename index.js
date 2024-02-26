const fs = require("fs");
const inquirer = require("inquirer");
const md = require("./utils/generateMarkdown.js");
const questions = [
  {
    type: "input",
    message: "Include your name. What is your full name?",
    name: "user"
  },
  {
    type: "input",
    message: "Include date of Copyright. What is the year you are publishing this project?",
    name: "year"
  },
  {
    type: "input",
    message: "Include a title. What is the title of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Include a description. What can your project do? Add a link to the deployment page as well.",
    name: "description"
  },
  {
    type: "input",
    message: "Include badges. Example (https://img.shields.io/badge/Maury%20Hughes%20IV-8A2BE2). Check out shields.io/badges for help.",
    name: "badges"
  },
  {
    type: "input",
    message: "Include visuals. Do you have screenshot links you can add to your readme? Don't forget the syntax is ![img name](img link).",
    name: "visuals"
  },
  {
    type: "input",
    message: "Include installations. Is there anything that the user would need to instal in order to run this code? What is it?",
    name: "installation"
  },
  {
    type: "input",
    message: "Include a usage. What would this code be used for? Do you have an example?",
    name: "usage"
  },
  {
    type: "input",
    message: "Include test information. How would a user go about testing this project? How did you test this project? Does the user need to run something specific? What are the expected results?",
    name: "tests"
  },
  {
  type: "input",
  message: "Include a github. What is your github, dont forget the https:// please.",
  name: "github"
  },
  {
    type: "input",
    message: "Include an email. What is your email address?",
    name: "email"
  },
  {
    type: "input",
    message: "Include a roadmap. Where do you want to take this project in the future? What do you want to add to it?",
    name: "roadmap"
  },
  {
    type: "input",
    message: "Include contribution status. State if you are open to contributions and what may be required to accept them.",
    name: "contributing"
  },
  {
    type: "input",
    message: "Include authors and acknowledgment. Who all help write the code? Did anyone guide you or contribute to your completion?",
    name: "authors"
  },
  {
    type: "input",
    message: "Include a project status. Is it complete? Do you have more you want to add to it? Is it a work in progress?",
    name: "status"
  },
  {
    type: "list",
    message: "Include a license. Not sure what to go for? Check out this site https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#choosing-the-right-license.",
    name: "license",
    choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 
    'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 
    'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 
    'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense']
  }
];

function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
      err ? console.error(err) : console.log("Now you have a readme, easy as that!")
    );
}

function init() {
  inquirer.prompt(questions)
  .then((data) => {
    console.log(data.license)
  writeToFile("README.md", md.generateMarkdown(data))}
)}

init();
