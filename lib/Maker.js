const path = require('path');
const fs = require('fs');
const source = path.resolve(__dirname, "../src");

// takes in the teamArray data after the prompts have been submited
// then takes that data and seperates it according to the role of the individual 
// then it takes all the updated html for each new employee and inserts it into the main html template to be written to its own new html file 
const people = employees => {
    const empinfo = [];
    empinfo.push(...employees.filter(employee => employee.getRole() === "Manager").map(manager => newManager(manager)));
    empinfo.push(...employees.filter(employee => employee.getRole() === "Engineer").map(engineer => newEngineer(engineer)));
    empinfo.push(...employees.filter(employee => employee.getRole() === "Intern").map(intern => newIntern(intern)));
    return writeFile(empinfo.join(""));
};


// replaces the specified locations in the html templates with the data passed in from the prompts
const newManager = manager => {
    let page = fs.readFileSync(path.resolve(source, "manager.html"), "utf8");
    page = newItems(page, "name", manager.getName());
    page = newItems(page, "role", manager.getRole());
    page = newItems(page, "id", manager.getId());
    page = newItems(page, "email", manager.getEmail());
    page = newItems(page, "officeNumber", manager.getOfficeNumber());
    return page;
}

// replaces the specified locations in the html templates with the data passed in from the prompts
const newEngineer = engineer => {
    let page = fs.readFileSync(path.resolve(source, "engineer.html"), "utf8");
    page = newItems(page, "name", engineer.getName());
    page = newItems(page, "role", engineer.getRole());
    page = newItems(page, "id", engineer.getId());
    page = newItems(page, "email", engineer.getEmail());
    page = newItems(page, "github", engineer.getGithub());
    page = newItems(page, "github2", engineer.getGithub());
    return page;
}

// replaces the specified locations in the html templates with the data passed in from the prompts
const newIntern = intern => {
    let page = fs.readFileSync(path.resolve(source, "intern.html"), "utf8");
    page = newItems(page, "name", intern.getName());
    page = newItems(page, "role", intern.getRole());
    page = newItems(page, "id", intern.getId());
    page = newItems(page, "email", intern.getEmail());
    page = newItems(page, "school", intern.getSchool());
    return page;
}

//takes the updated templates and inserts them into the main.html template 
const writeFile = empinfo => {
    const page = fs.readFileSync(path.resolve(source, "main.html"), "utf8");
    return newItems(page, "team", empinfo);
}

// function to replace the desinated locations with the info provided in the prompts 
const newItems = (page, replaced, value) => {
    const items = new RegExp("/ " + replaced + " /");
    return page.replace(items, value);
}



module.exports = people;