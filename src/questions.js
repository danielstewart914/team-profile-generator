const generateQuestionsFor = ( role ) => {

    let title;
    let finalQuestion;
    
    switch( role ) {
        case 'Manager': 
            title = 'team manager\'s';
            finalQuestion = {
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
        break;
        case 'Engineer': 
            title = 'engineer\'s';
            finalQuestion = {
                type: 'input',
                name: 'gitHub',
                message: 'What is the engineer\'s GitHub user name?',
                validate: input => {
        
                    if ( !input ) return 'Cannot be blank!';
        
                    return true;
                }
            }
        break;
        case 'Intern': 
            title = 'intern\'s';
            finalQuestion = {
                type: 'input',
                name: 'school',
                message: 'What is the intern\'s school?',
                validate: input => {
        
                    if ( !input ) return 'Cannot be blank!';
        
                    return true;
                }
            }
    }

    const baseQuestions = [
        {
            type: 'input',
            name: 'name',
            message: `What is the ${ title } name?`,
            validate: input => {
    
                if ( !input ) return 'Cannot be blank!';
    
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the ${ title } id?`,
            validate: input => {
    
                if ( !input ) return 'Cannot be blank!';
    
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the ${ title } email?`,
            validate: input => {
        
                const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if ( !emailRegEx.test( input ) ) return "You must enter a valid email!";
          
                return true;
          
            }
        }
    ];

    baseQuestions.push( finalQuestion );

    return baseQuestions;

}

module.exports = generateQuestionsFor;