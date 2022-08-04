const Employee = require( '../lib/Employee' );

describe( 'Employee', () => {

    describe( 'Initialization', () => {
        it( 'should create an object with name, id, and email properties', () => {
            const name = 'Bob';
            const id = 43;
            const email = 'bob@email.com';

            const testEmployee = new Employee( name, id, email );

            expect( testEmployee.name ).toEqual( name );
            expect( testEmployee.id ).toEqual( id );
            expect( testEmployee.email ).toEqual( email );
        } );

        it( 'should throw an error if no arguments are provided', () => {
            const callBack = () => new Employee();

            expect( callBack ).toThrow();
        } );

        it( 'should throw an error if name is not a string', () => {
            const callBack = () => new Employee( 24, 129, 'me@mail.com' );

            const error = new Error( 'Expected parameter \'name\' to be a non-empty string' );

            expect( callBack ).toThrow( error );
        } );

        it( 'should throw an error if email is not a string', () => {
            const callBack = () => new Employee( 'Daniel', 129 );

            const error = new Error( 'Expected parameter \'email\' to be a non-empty string' );

            expect( callBack ).toThrow( error );
        } );
            
    } );

    describe( 'getName', () => {
        it( 'should return employee name', () => {
            const testEmployee = new Employee( 'Jennifer', 28, 'jenny@dev.com' );

            expect( testEmployee.getName() ).toEqual( 'Jennifer' );
        } );
    } );

    describe( 'getId', () => {
        it( 'should return employee id', () => {
            const testEmployee = new Employee( 'Jennifer', 28, 'jenny@dev.com' );

            expect( testEmployee.getId() ).toEqual( 28 );
        } );
    } );

    describe( 'getEmail', () => {
        it( 'should return employee email', () => {
            const testEmployee = new Employee( 'Jennifer', 28, 'jenny@dev.com' );

            expect( testEmployee.getEmail() ).toEqual( 'jenny@dev.com' );
        } );
    } );

    describe( 'getRole', () => {
        it( 'should return \'Employee\'', () => {
            const testEmployee = new Employee( 'Anthony', 129, 'tony@email.com');

            expect( testEmployee.getRole() ).toEqual( 'Employee' );
        } );
    } );
} );