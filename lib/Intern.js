const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, email, id, school, role) {
        super(name, email, id)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;