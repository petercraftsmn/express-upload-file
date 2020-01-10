const express = require( 'express' );
const app = express();


app.post( '/', function ( req, res, next ) {
    res.json( { text: "all is well!" } )
} );

app.use( function ( req, res, next ) {
    res.status( 404 );
    res.json( { text: "file not found" } );
} );

app.use( function ( err, req, res, next ) {
    console.log( err.stack );
    res.status( 500 );
    res.json( { text: "Something is wrong" } );
} );

module.exports = app;
