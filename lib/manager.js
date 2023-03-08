const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        super (name, id, email);

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