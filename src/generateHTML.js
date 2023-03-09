// Manager Card HTML
// Function inputs fields with terminal responses
const createManagerCard = function (manager) {
    return `
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card shadow-lg border border-dark m-4">
            <div class="card-header text-center">
                <h2>${manager.name}</h2>
                <h3>Manager</h3><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// Engineer Card HTML
const createEngineerCard = function (engineer) {
    return `
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card shadow-lg border border-dark m-4">
            <div class="card-header text-center">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github Username: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

// Intern Card HTML
const createInternCard = function (intern) {
    return `
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card shadow-lg border border-dark m-4">
            <div class="card-header text-center">
                <h2>${intern.name}</h2>
                <h3>Intern</h3><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

// Function to add individual cards with inputs to cards array and add to main HTML structure
generateHTML = (data) => {

    // Cards Array
   const cards = [];

    //Evaluating length of data (based on amount of roles added)
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.addRole();

        // If statements evaluating which roles are created and adding to respective card
        if (role === 'Manager') {
            const managerCard = createManagerCard(employee);

            cards.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = createEngineerCard(employee);

            cards.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = createInternCard(employee);

            cards.push(internCard);
        }

    }

    const employeeCards = cards.join('')

    // Creates HTML page based on cards
    const createTeam = createHTMLPage(employeeCards);
    return createTeam;
}

// Main HTML Structure that cards are added to
const createHTMLPage = function (employeeCards) {
    return`
    <!DOCTYPE html>
    <html lang="en-us">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"-body="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="../dist/style.css">
            <title>oop team generator</title>
        </head>

        <body>
            <header class="container-fluid">
                <div class="row">
                    <div class="col-12" id="header">
                        <h1 id="title" class="p-4 align-middle text-center">Team</h1>
                    </div>
                </div>
            </header>
        <main class="container">
                <div class="row justify-content-center mt-4">
                ${employeeCards}
                </div>
        </main>
        </body>
    `;
}

module.exports = generateHTML;