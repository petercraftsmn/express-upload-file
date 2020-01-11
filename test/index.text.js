const request = require( 'supertest' );
const app = require( './server/app' );

describe( 'POST / ', function () {
    it( 'Uploads the jpg photo file', function () {
        const fileName = 'niagra_falls.jpg';
        return request( app )
            .post( '/' )
            .attach( 'avtar', __dirname + '/fixture/' + fileName )
            .expect( 200 )
            .expect( 'Content-Type', /json/ )
            .expect( `{"message":"${ fileName } is uploaded successfully"}` )
    } );
} );

describe( 'GET / ', function () {
    it( 'File not found', function () {
        return request( app )
            .get( '/' )
            .expect( 404 )
            .expect( 'Content-Type', /json/ )
            .expect( '{"text":"file not found"}' )
    } );
} );

