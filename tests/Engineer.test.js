const Engineer = require( '../lib/Engineer' );

describe( 'Engineer', () => {

    describe( 'Initialization', () => {
        it( 'should create an object with name, id, email, and gitHub properties', () => {
            const name = 'John';
            const id = 43;
            const email = 'john@email.com';
            const gitHub = 'johnDev123';

            const testEngineer = new Engineer( name, id, email, gitHub );

            expect( testEngineer.name ).toEqual( name );
            expect( testEngineer.id ).toEqual( id );
            expect( testEngineer.email ).toEqual( email );
            expect( testEngineer.gitHub).toEqual( gitHub );
        } );

        it( 'should throw an error if gitHub is not a string', () => {
            const errorTest = () => new Engineer( 'Megan', 129, 'me@mail.com', 16 );
            const errorTest2 = () => new Engineer( 'Megan', 129, 'me@mail.com' );

            const error = new Error( 'Expected parameter \'gitHub\' to be a non-empty string' );

            expect( errorTest ).toThrow( error );
            expect( errorTest2 ).toThrow( error );
        } );

    } );

    describe( 'getRole', () => {
        it( 'should return \'Engineer\'', () => {
            const testEngineer = new Engineer( 'Anthony', 129, 'tony@email.com', 345 );

            expect( testEngineer.getRole() ).toEqual( 'Engineer' );
        } );
    } );
    
} );