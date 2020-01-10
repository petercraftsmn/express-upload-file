#!/usr/bin/env node

const app = require( './app' );

const port = parseInt( process.env.PORT || '5000', 10 );

app.set( 'port', port );
app.listen( app.get( 'port' ), function () {
    console.log( `Test server listening on port ${ app.get( 'port' ) }` )
} );
