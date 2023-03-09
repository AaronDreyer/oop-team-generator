// Loading in the generateHTML file
const generateHTML = require('../oop-team-generator/src/generateHTML');

// The fs module provides an API for interacting with the file system in Node.js. It allows you to read from and write to files, create or delete files and directories, and more.
// The inquirer module provides a set of common interactive command-line user interfaces for Node.js applications. It allows you to prompt users for input, present them with lists, checkboxes, and more.
const fs = require('fs');
const inquirer = require('inquirer');

// Loading in each employee javascript file
const Manager = require('../oop-team-generator/lib/manager');
const Engineer = require('../oop-team-generator/lib/engineer');
const Intern = require('../oop-team-generator/lib/intern');

// Team array to add each employee role to
const team = [];

// addManager method that uses a function to add questions to the terminal to fill in requirements for manager card
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Manager for this team?',
            // The validate option takes a function that receives the user's input as an argument, and returns either true if the input is valid, or false if the input is invalid.
            validate: nameInput => {
                // (/^[a-zA-Z]+$/.test(nameInput)) determines whether the input is a string or not. If not, then return false
                if (/^[a-zA-Z]+$/.test(nameInput)) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Manager's ID.",
            validate: nameInput => {
                // (Number.isInteger(parseInt(nameInput))) determines if the entry is a number. If not, then return false
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
                // the /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ is something I found through stackoveflow. If determines if the entry is a valid email value
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
            // Office Number Input
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
    // Pushes each entry for manager into the team array
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        team.push(manager);
    })
};

// addEmployees method that uses a function to add questions to the terminal to fill in requirements for rest of employee roles
const addEmployees = () => {
    return inquirer.prompt ([
        {
            // Determines which employee to add
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
                if (/^[a-zA-Z]+$/.test(nameInput)) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
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
            // Github entry for Engineer
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
            // School entry for Intern
            type: 'input',
            name: 'school',
            message: "Please enter the employee's school name.",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (/^[a-zA-Z]+$/.test(nameInput)) {
                    return true;
                } else {
                    console.log("Please enter the Intern's school name!")
                }
            }
        },
        {
            // Choice to add as many employees as you want
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: 'Would you like to add another team member?',
            default: false
        }

        // Pushes the added employees to the team array
    ]).then(employeeData => {

        const {name, id, email, role, github, school, addAnotherEmployee} = employeeData;
        let employee;

        // If statements to determine which employee role to push based on their specific entries
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }

        team.push(employee);

        // If statement to determine whether to add another employee and return to the questions for push to team array
        if (addAnotherEmployee) {
            return addEmployees(team);
        } else{
            return team;
        }
    })
};

// Creates the html file into the "dist" folder and returns an error if fail or success message if created successfully
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile was successfully created!")
        }
    })
};

// addManager is created first
// the employees method is introduced if employee roles are needed
// this will generateHTML based on the team array
// the team array will be used to write an html file
addManager()
  .then(addEmployees)
  .then(team => {
    return generateHTML(team);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
