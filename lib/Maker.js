const path = require('path');
const fs = require('fs');
const source = path.resolve(__dirname, "../src");

const people = employees => {
    const empInfo = [];
    empInfo.push(...employees.filter(employee => employee.getRole() === "Manager").map(manager => newManager(manager)));
    empInfo.push(...employees.filter(employee => employee.getRole() === "Engineer").map(engineer => newEngineer(engineer)));
    empInfo.push(...employees.filter(employee => employee.getRole() === "Intern").map(intern => newIntern(intern)));
    return writeFile(empInfo.join(""));
};

const newManager = manager => {
    let pages = fs.readFileSync(path.resolve(source, "manager.html"), "utf8");
    pages = newItems(pages, "name", manager.getName());
    pages = newItems(pages, "role", manager.getRole());
    pages = newItems(pages, "id", manager.getName());
    pages = newItems(pages, "email", manager.getName());
    pages = newItems(pages, "officeNumber", manager.getName());
    return pages;
}

const newEngineer = engineer => {
    let pages = fs.readFileSync(path.resolve(source, "engineer.html"), "utf8");
    pages = newItems(pages, "name", engineer.getName());
    pages = newItems(pages, "role", engineer.getName());
    pages = newItems(pages, "id", engineer.getName());
    pages = newItems(pages, "email", engineer.getName());
    pages = newItems(pages, "github", engineer.getName());
    return pages;
}

const newIntern = intern => {
    let pages = fs.readFileSync(path.resolve(source, "intern.html"), "utf8");
    pages = newItems(pages, "name", intern.getName());
    pages = newItems(pages, "role", intern.getName());
    pages = newItems(pages, "id", intern.getName());
    pages = newItems(pages, "email", intern.getName());
    pages = newItems(pages, "school", intern.getName());
    return pages;
}

const writeFile = empInfo => {
    const pages = fs.readFileSync(path.resolve(source, "main.html"), "utf8");
    return newItems(pages, "team", empInfo);
}

const newItems = (pages, replaced, value) => {
    const items = new RegExp("|| " + replaced + " ||");
    return pages.replace(items, value);
}



module.exports = people;