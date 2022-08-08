const Manager = require( '../lib/Manager' );
const Engineer = require( '../lib/Engineer' );
const Intern = require( '../lib/Intern' );

const getOtherInfo = ( employee ) => {

    const role = employee.getRole();

    if ( role === 'Manager' ) 
        return `Office Number: ${ employee.officeNumber }`;
    if ( role === 'Engineer' ) 
        return `GitHub: <a href="https://www.github.com/${ employee.gitHub }">${ employee.gitHub }</a>`;
    if ( role === 'Intern' )
        return `School: ${ employee.school }`;
}

const getIcon = ( role ) => {

    if ( role  === 'Manager' ) 
        return {
            path: './assets/icons/cup-hot.svg',
            alt: 'Coffee Cup Icon'
        };
    if ( role === 'Engineer' ) 
        return {
            path: './assets/icons/calculator-fill.svg',
            alt: 'Calculator Icon'
        };
    if ( role === 'Intern' ) 
        return {
            path: './assets/icons/mortarboard-fill.svg',
            alt: 'Graduation Cap Icon'
        };
}

const generateEmployeeCard = ( employee ) =>{

    const { id, email, name } = employee;
    
    const icon = getIcon( employee.getRole() );

    const cardTemplate = `
<div class="card col-12 col-md-6 col-lg-4 col-xl-3 p-0 m-2 shadow">
    <div class="card-header bg-primary text-white text-center">
        <h2>${ name }</h2>
        <p class="role"><img class="invert icon" src="${ icon.path }" alt="${ icon.alt }"> ${ employee.getRole() }</p>
    </div>
    <div class="card-body d-flex justify-content-center align-items-center">
        <ul class="list-group col-12">
            <li class="list-group-item">ID: ${ id }</li>
            <li class="list-group-item">Email: <a href="mailto:${ email }">${email }</a></li>
            <li class="list-group-item">${ getOtherInfo( employee ) }</li>
        </ul>
    </div>
</div>`;

return cardTemplate;

}

console.log( generateEmployeeCard( new Manager( 'Daniel', 1, 'danielstewart914@outlook.com', 1 ) ) );
console.log( generateEmployeeCard( new Engineer( 'Daniel', 4, 'danielstewart914@outlook.com', 'danielstewart914' ) ) );
console.log( generateEmployeeCard( new Intern( 'Daniel', 42, 'danielstewart914@outlook.com', 'University of Washington' ) ) );


module.exports = generateEmployeeCard;