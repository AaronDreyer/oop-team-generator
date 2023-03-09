// Pulls from employee javasctipt file (Main class)
const Employee = require('../lib/employee');

// Manager subclass based from emplyee main class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        super (name, id, email);

        // Adds office number input for managers
        this.officeNumber = officeNumber;
    }

    addOffice () {
        return this.officeNumber;
    }

    addRole () {
        return "Manager";
    }
}

module.exports = Manager;