const generateHTML = require('../oop-team-generator/src/generateHTML');

const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('../oop-team-generator/lib/manager');
const Engineer = require('../oop-team-generator/lib/engineer');
const Intern = require('../oop-team-generator/lib/intern');

const team = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Manager for this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: "Please enter the Manager's ID.",
            validate: nameInput => {
                if (Number.isInteger(parseInt(nameInput))) {
                    return true;
                  } else {
                    console.log("Please enter the Manager's ID!");
                    return false;
                  }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's email.",
            validate: nameInput => {
                const emailFormat= /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                if (nameInput.match(emailFormat)) {
                  return true;
                } else {
                  console.log("Please enter an email address for the Manager!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the Manager's office number.",
            validate: nameInput => {
                if (Number.isInteger(parseInt(nameInput))) {
                    return true;
                  } else {
                    console.log("Please enter the Manager's office number!");
                    return false;
                  }
            }
        },
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        team.push(manager);
    })
};

const addEmployees = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern'] 
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if (Number.isInteger(parseInt(nameInput))) {
                    return true;
                  } else {
                    console.log("Please enter the employee's ID!");
                    return false;
                  }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: nameInput => {
                const emailFormat= /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                if (nameInput.match(emailFormat)) {
                  return true;
                } else {
                  console.log("Please enter an email address for the employee!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's Github Username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's Github Username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the employee's school name.",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's school name!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: 'Would you like to add another team member?',
            default: false
        }
    ]).then(employeeData => {

        const {name, id, email, role, github, school, addAnotherEmployee} = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }

        team.push(employee);

        if (addAnotherEmployee) {
            return addEmployees(team);
        } else{
            return team;
        }
    })
};
