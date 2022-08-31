const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const people = require('./lib/Maker.js');
const teamArray = [];

// Manager prompt questions
const managerQ = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'managerN',
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
        name: 'managerEmail',
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
        name: 'managerId',
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
        name: 'managerOffice',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid office number.")
            }
            return true;
        },
    },

]

// question wether to add an intern, engineer or finish building them team 
const addOrFinishQ = [
    {
        type: 'list',
        message: 'Would you like to add an engineer, intern or finish building your team?',
        choices: ['Add Engineer', 'Add Intern', 'Finish building my team'],
        name: 'addOrFinish',
    },
]

// engineer prompt questions 
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

// intern prompt questions 
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
        message: 'What is the interns email address?',
        name: 'internEmail',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid email address.")
            }
            return true
        }
    },
    {
        type: 'input',
        message: 'What is the Interns employee ID?',
        name: 'internId',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid ID.")
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

// prompts the add or finish questions, if adding an intern or engineer it will prompt you with the questions to add one or allows you to finish building and writes the file 
function nextEmp() {
    inquirer.prompt(addOrFinishQ).then(function (answer) {
        switch (answer.addOrFinish) {
            case "Add Engineer":
                promptEngineer();
                break;
            case "Add Intern":
                promptIntern();
                break;
            case "Finish building my team":
                writeToFile();
        };
    });
};

// prompts the manager questions than saves the new manager created to the team array 
function promptManager() {
    inquirer.prompt(managerQ).then((answer) => {
        const manager = new Manager(answer.managerN, answer.managerEmail, answer.managerId, answer.managerOffice, "Manager");
        teamArray.push(manager);
        nextEmp();
    })
}

// prompts the engineer questions than saves the new engineer created to the team array 
function promptEngineer() {
    inquirer.prompt(engineerQ).then((answer) => {
        const engineer = new Engineer(answer.engineerN, answer.engineerEmail, answer.engineerId, answer.engineerGithub, "Engineer");
        teamArray.push(engineer);
        nextEmp();
    });
}

// prompts the intern questions than saves the new intern created to the team array 
function promptIntern() {
    inquirer.prompt(internQ).then((answer) => {
        const intern = new Intern(answer.internN, answer.internEmail, answer.internId, answer.schoolName, "Intern");
        teamArray.push(intern);
        nextEmp();
    });
}

// starts the sequence of building the team with the manager prompt
function init() {
    promptManager();
}

// writes the data to a file that i can pull from to create the final webpage 
function writeToFile() {
    fs.writeFile("./dist/group.html", people(teamArray), function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("Your team is being created!")
    });
};


init();