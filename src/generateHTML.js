const createManagerCard = function (manager) {
    return `
    <div class="col-4">
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

const createEngineerCard = function (engineer) {
    return `
    <div class="col-4">
        <div class="card shadow-lg border border-dark m-4">
            <div class="card-header text-center">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github Username: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `;
}

const createInternCard = function (intern) {
    return `
    <div class="col-4">
        <div class="card shadow-lg border border-dark m-4">
            <div class="card-header text-center">
                <h2>${intern.name}</h2>
                <h3>Intern</h3><i class="material-icons">content_paste</i>
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
            <link rel="stylesheet" href="./dist/style.css">
            <title>oop team generator</title>
        </head>

        <body>
            <header class="row">
                <div class="col-12" id="header">
                    <h1 id="title" class="p-4 align-middle text-center">Team</h1>
                </div>
            </header>
        <main>
            <div class="container">
                <div class="row justify-body-center mt-4">
                ${employeeCards}
                </div>
            </div>

        </main>
        </body>
    `;
}