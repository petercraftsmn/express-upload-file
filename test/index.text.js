const request = require( 'supertest' );
const app = require( './server/app' );

describe( 'POST / ', function () {
    it( 'Uploads the jpg photo file', function () {
        return request( app )
            .post( '/' )
            .attach( 'file', __dirname + '/fixture/niagra_falls.jpg' )
            .expect( 200 )
            .expect( 'Content-Type', /json/ )
            .expect( '{"text":"file uploaded"}' )
    } );
} );
