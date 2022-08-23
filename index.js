const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify();
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Inter = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');