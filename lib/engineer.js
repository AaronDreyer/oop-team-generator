const Employee = require('../lib/employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        
        super (name, id, email);

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