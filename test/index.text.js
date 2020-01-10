const request = require( 'supertest' );
const app = require( './server/app' );

describe( 'GET / ', function () {
    it( 'Returns response', function () {
        return request( app )
            .get( '/' )
            .expect( 200 )
            .expect('Content-Type',/json/)
            .expect( '{"text":"all is well!"}' )

    } );
} );
