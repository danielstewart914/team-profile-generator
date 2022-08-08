const inquirer = require( 'inquirer' );
const Manager = require( './lib/Manager' );
const Engineer = require( './lib/Engineer' );
const Intern = require( './lib/Intern' );
const generateHTML = require( './src/generateHTML' );

const { managerQuestions, engineerQuestions, internQuestions } = require( './src/questions' );

// array to hold employee list
const employeeList = [];

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
    
}

const queryUserForEngineerInfo = async () => {
    
}

const queryUserForInternInfo = async () => {
    
}

queryUserForManagerInfo();
