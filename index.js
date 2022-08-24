const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Inter = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const teamArray = [];

const managerQ = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'teamMangerN',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid name.")
            }
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the team managers email address?',
        name: 'teamMangerEmail',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid email address.")
            }
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the team managers employee ID?',
        name: 'teamMangerId',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid ID.")
            }
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the team managers office number?',
        name: 'teamMangerOffice',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid office number.")
            }
            return true;
        },
    },

]

const addOrFinishQ = [
    {
        type: 'list',
        message: 'Would you like to add an engineer, intern or finish building your team?',
        choices: ['Add Engineer', 'Add Intern', 'Finish building my team'],
        name: 'addOrFinish',
    },
]

const engineerQ = [
    {
        type: 'input',
        message: 'What is your engineers name?',
        name: 'engineerN',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid name.")
            }
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the engineers employee ID?',
        name: 'engineerId',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid ID.")
            }
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the engineers email address?',
        name: 'engineerEmail',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid email address.")
            }
            return true;
        },
    },
    {
        type: 'input',
        message: "What is the engineers Github username",
        name: 'engineerGithub',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid username.")
            }
            return true;
        },
    }
]

const internQ = [
    {
        type: 'input',
        message: 'What is your Interns name?',
        name: 'internN',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid name.")
            }
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the Interns employee ID?',
        name: 'internsId',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid ID.")
            }
            return true;
        },
    },
    {
        type: 'input',
        message: 'What is the engineers email address?',
        name: 'internsEmail',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid email address.")
            }
            return true;
        },
    },
    {
        type: 'input',
        message: "What is the name of the interns school",
        name: 'schoolName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid school.") 
            }
            return true;
        },
    }
]

function nextEmp() {
    inquirer.prompt(addOrFinishQ).then(function(answer) {
        switch(answer.addOrFinish) {
            case "Add Engineer":
            promptEngineer();
            break;
            case "Add Intern":
            promptIntern();
            break;
            case "Finish building my team":
            init();
        };
    });
};

function promptManager() {
    inquirer.prompt(managerQ).then((answer) => {
        const manager = new Manager(answer.teamMangerN)
        teamArray.push(manager);
        nextEmp();
    })
}

function promptEngineer() {

}

function promptIntern() {
    
}

function init () {

}


