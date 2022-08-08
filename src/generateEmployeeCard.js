// return last line of info based upon employee role
const getOtherInfo = ( employee ) => {

    const role = employee.getRole();

    // if employee is a manager return office number
    if ( role === 'Manager' ) 
        return `Office Number: ${ employee.officeNumber }`;
    // if employee is a engineer return github profile link
    if ( role === 'Engineer' ) 
        return `GitHub: <a href="https://www.github.com/${ employee.gitHub }">${ employee.gitHub }</a>`;
    // if employee is an intern return school
    if ( role === 'Intern' )
        return `School: ${ employee.school }`;
}

// return icons base upon role
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

// generate a card for displaying employee info
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

module.exports = generateEmployeeCard;