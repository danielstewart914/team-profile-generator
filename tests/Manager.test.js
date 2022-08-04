const Manager = require( '../lib/Manager' );

describe( 'Manager', () => {

    describe( 'Initialization', () => {
        it( 'should create an object with name, id, email, and officeNumber properties', () => {
            const name = 'Bob';
            const id = 43;
            const email = 'bob@email.com';
            const officeNumber = 256;

            const testManager = new Manager( name, id, email, officeNumber );

            expect( testManager.name ).toEqual( name );
            expect( testManager.id ).toEqual( id );
            expect( testManager.email ).toEqual( email );
            expect( testManager.officeNumber ).toEqual( officeNumber );
        } );
    } );

    describe( 'getRole', () => {
        it( 'should return \'Manager\'', () => {
            const testManager = new Manager( 'Anthony', 129, 'tony@email.com', 345 );

            expect( testManager.getRole() ).toEqual( 'Manager' );
        } );
    } );
    
} );