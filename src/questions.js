const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?',
        validate: input => {

            if ( !input ) return 'Cannot be blank!';

            return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team manager\'s id?',
        validate: input => {

            if ( !input ) return 'Cannot be blank!';

            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s email?',
        validate: input => {
    
            const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if ( !emailRegEx.test( input ) ) return "You must enter a valid email!";
      
            return true;
      
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team manager\'s office number?',
        validate: input => {

            if ( !input ) return 'Cannot be blank!';
            if ( isNaN( input ) ) return `${ input } is not a number!`;
            if ( parseInt( input ) <= 0 ) return 'Number cannot be negative or zero!';

            return true;
        }
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name?',
        validate: input => {

            if ( !input ) return 'Cannot be blank!';

            return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineer\'s id?',
        validate: input => {

            if ( !input ) return 'Cannot be blank!';

            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineer\'s email?',
        validate: input => {
    
            const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if ( !emailRegEx.test( input ) ) return "You must enter a valid email!";
      
            return true;
      
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is the engineer\'s GitHub user name?',
        validate: input => {

            if ( !input ) return 'Cannot be blank!';

            return true;
        }
    }
];

const internQuestions = [

];

module.exports = { managerQuestions, engineerQuestions, internQuestions };