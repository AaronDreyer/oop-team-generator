// Pulls from employee javasctipt file (Main class)
const Employee = require('../lib/employee');

// Intern subclass based from emplyee main class
class Intern extends Employee {
    constructor (name, id, email, school) {

        super (name, id, email);

        // Adds school input specifically for interns
        this.school = school;
    }

    addSchool () {
        return this.school;
    }

    addRole () {
        return "Intern";
    }
}

module.exports = Intern;