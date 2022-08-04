const Intern = require( '../lib/Intern' );

describe( 'Intern', () => {

    describe( 'Intern', () => {

        describe( 'Initialization', () => {
            it( 'should create an object with name, id, email, and school properties', () => {
                const name = 'John';
                const id = 43;
                const email = 'john@email.com';
                const school = 'University of Washington';
    
                const testIntern = new Intern( name, id, email, school );
    
                expect( testIntern.name ).toEqual( name );
                expect( testIntern.id ).toEqual( id );
                expect( testIntern.email ).toEqual( email );
                expect( testIntern.school ).toEqual( school );
            } );
    
            it( 'should throw an error if school is not a string', () => {
                const errorTest = () => new Intern( 'Max', 129, 'me@mail.com', 42 );
                const errorTest2 = () => new Intern( 'Max', 129, 'me@mail.com' );
    
                const error = new Error( 'Expected parameter \'school\' to be a non-empty string' );
    
                expect( errorTest ).toThrow( error );
                expect( errorTest2 ).toThrow( error );
            } );
    
        } );
    
        describe( 'getRole', () => {
            it( 'should return \'Intern\'', () => {
                const testIntern = new Intern( 'Samuel', 129, 'samuel@email.com', 'UW' );
    
                expect( testIntern.getRole() ).toEqual( 'Intern' );
            } );
        } );

        describe( 'getSchool', () => {
            it( 'should return \'school\'', () => {
                const testIntern = new Intern( 'Samuel', 129, 'samuel@email.com', 'UW' );
    
                expect( testIntern.getSchool() ).toEqual( 'UW' );
            } );
        } );
        
    } );
    
} );