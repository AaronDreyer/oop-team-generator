// Pulls from employee javasctipt file (Main class)
const Employee = require('../lib/employee');

// Engineer subclass based from emplyee main class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        
        super (name, id, email);

        // Adds github input specifically for engineer
        this.github = github;
    }

    addGithub () {
        return this.github;
    }

    addRole () {
        return "Engineer";
    }
}

module.exports = Engineer;