const inquirer = require( 'inquirer' );
const Manager = require( './lib/Manager' );
const Engineer = require( './lib/Engineer' );
const Intern = require( './lib/Intern' );
const generateHTML = require( './src/generateHTML' );

const generateQuestionsFor = require( './src/questions' );

// array to hold employee list
const employeeList = [];

const saveHTML = ( HTMLString ) => {
    // TODO: write save code
    console.log( 'saveHTML() was called' );
    console.log( HTMLString );
}

// main query function
const queryUserForTeamMemberType = async () => {
    try {

        const answer = await inquirer.prompt( {
            type: 'list',
            name: 'selection',
            message: 'What type of team member would you like to add?',
            choices: [ 'Engineer', 'Intern', 'I\'m done adding team members'],
            default: 0
        } );

        const { selection } = answer;

        switch ( selection ) {
            case 'Engineer': queryUserForEngineerInfo();
            break;
            case 'Intern': queryUserForInternInfo();
            break;
            case 'I\'m done adding team members': saveHTML( generateHTML( employeeList ) );
            break;
            default: console.error( 'Error with selection' );
        }
    }

    catch ( error ) {
        console.error( error );
    }
}

// query user for manager info
const queryUserForManagerInfo = async () => {
    try {

        const answers = await inquirer.prompt( generateQuestionsFor( 'Manager' ) );
        const { name, id, email, officeNumber } = answers;
        // create new manager and push to employee array
        employeeList.push( new Manager( name, id, email, officeNumber ) );

        // continue on to main query function
        queryUserForTeamMemberType();
    }

    catch ( error ) {
        console.error( error );
    }
}

// query user for engineer info
const queryUserForEngineerInfo = async () => {
    try {

        const answers = await inquirer.prompt( generateQuestionsFor( 'Engineer' ) );
        const { name, id, email, gitHub } = answers;
        // create new engineer and push to employee array
        employeeList.push( new Engineer( name, id, email, gitHub ) );

        // return to main query function
        queryUserForTeamMemberType();
    }

    catch ( error ) {
        console.error( error );
    }
}

// query user for intern info
const queryUserForInternInfo = async () => {
    try {

        const answers = await inquirer.prompt( generateQuestionsFor( 'Intern' ) );
        const { name, id, email, school } = answers;
        // create new intern and push to employee array
        employeeList.push( new Intern( name, id, email, school ) );

        // return to main query function
        queryUserForTeamMemberType();
    }

    catch ( error ) {
        console.error( error );
    }

    // return to main query function
    queryUserForTeamMemberType();
}

// call query for manager info at start of application
queryUserForManagerInfo();
