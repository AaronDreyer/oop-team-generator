const createManagerCard = function (manager) {
    return `
    <div class="col-4">
        <div class="card shadow-lg border border-dark m-4">
            <div class="card-header text-center">
                <h2>Employee Name</h2>
                <h3>Manager</h3><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p>ID: </p>
                <p>Email: </p>
                <p>Office Number: </p>
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
                <h2>Employee Name</h2>
                <h3>Engineer</h3><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p>ID: </p>
                <p>Email: </p>
                <p>Github Username: </p>
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
                <h2>Employee Name</h2>
                <h3>Intern</h3><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p>ID: </p>
                <p>Email: </p>
                <p>School: </p>
            </div>
        </div>
    </div>
    `;
}