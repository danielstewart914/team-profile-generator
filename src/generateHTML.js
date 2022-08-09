const generateEmployeeCard = require( './generateEmployeeCard' );

// generate string of HTML cards from array of Employees
const generateEmployeeList = ( employees ) => {

    let htmlString = '';

    for ( const employee of employees ) {
        htmlString += generateEmployeeCard( employee );
    }

    return htmlString;
}

// generate full HTML page for displaying team info
const generateHTML = ( employees, teamName ) => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>${ teamName }</title>
</head>
<body>
    <header class="bg-danger text-light p-4 text-center">
        <h1>${ teamName }</h1>
    </header>
    <main class="container pt-5">
        <div class="row justify-content-center p-4">${ generateEmployeeList( employees ) }
        </div>
    </main>
</body>
</html>`;

}

module.exports = generateHTML;