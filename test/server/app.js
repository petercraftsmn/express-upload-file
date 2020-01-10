const express = require( 'express' );
const path = require( 'path' );
// const multer = require( 'multer' );

const app = express();

app.use( '/', function ( req, res, next ) {
    res.json( { text: "all is well!" } )
} );

app.use( function ( req, res, next ) {
    res.status( 404 ).send( "Not found" );
} );

app.use( function ( err, req, res, next ) {
    console.log( err.stack );
    res.status( 500 ).send( "Something is wrong" );
} );

module.exports = app;
