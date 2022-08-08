const inquirer = require( 'inquirer' );
const Manager = require( './lib/Manager' );
const Engineer = require( './lib/Engineer' );
const Intern = require( './lib/Intern' );
const generateHTML = require( './src/generateHTML' );

const { managerQuestions, engineerQuestions, internQuestions } = require( './src/questions' );

// array to hold employee list
const employeeList = [];

const saveHTML = ( HTMLString ) => {
    // TODO: write save code
    console.log( 'saveHTML() was called' )
}

const queryUserForManagerInfo = async () => {
    try {

        const answers = await inquirer.prompt( managerQuestions );
        const { name, id, email, officeNumber } = answers;
        employeeList.push( new Manager( name, id, email, officeNumber ) );

        queryUserForTeamMemberType();
    }

    catch ( error ) {
        console.error( error );
    }
}

const queryUserForTeamMemberType = async () => {
    try {

        const answer = await inquirer.prompt( {
            type: 'list',
            name: 'selection',
            message: 'What type of employee would you like to add?',
            choices: [ 'Engineer', 'Intern', 'Done adding employees'],
            default: 0
        } );

        const { selection } = answer;

        switch ( selection ) {
            case 'Engineer': queryUserForEngineerInfo();
            break;
            case 'Intern': queryUserForInternInfo();
            break;
            case 'Done adding employees': saveHTML( generateHTML( employeeList ) );
            break;
            default: console.error( 'Error with selection' );
        }
    }

    catch ( error ) {
        console.error( error );
    }
}

const queryUserForEngineerInfo = async () => {
    try {

        const answers = await inquirer.prompt( engineerQuestions );
        const { name, id, email, gitHub } = answers;
        employeeList.push( new Engineer( name, id, email, gitHub ) );

        queryUserForTeamMemberType();
    }

    catch ( error ) {
        console.error( error );
    }
}

const queryUserForInternInfo = async () => {
    // TODO: write inquirer code for intern info
    console.log( 'queryUserForInternInfo() was called' );
    queryUserForTeamMemberType();
}

queryUserForManagerInfo();
