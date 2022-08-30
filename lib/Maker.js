const path = require('path');
const fs = require('fs');
const source = path.resolve(__dirname, "../src");

const people = employees => {
    const empInfo = [];
    empInfo.push(...employees.filter(teamArray => teamArray.getRole() === "Manager").map(manager => newManager(manager)));
    empInfo.push(...employees.filter(teamArray => teamArray.getRole() === "Engineer").map(engineer => newEngineer(engineer)));
    empInfo.push(...employees.filter(teamArray => teamArray.getRole() === "Intern").map(intern => newIntern(intern)));
};

const newManager = manager =>{

}

const newEngineer = engineer =>{
    
}

const newIntern = intern =>{
    
}

module.exports = people;