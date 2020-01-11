/******************************************************************************
 * Written by Peter Craftsmn                                                  *
 * Email: peter.craftsmn@gmail.com                                            *
 * All rights reserved Copyright (c) 2019.                                    *
 ******************************************************************************/


exports.sendCreateResponse = function ( req, res ) {
    res.statusCode = 200;
    res.setHeader( 'Content-Type', 'application/json' );
    res.json( { message: req.file.originalname + ' is uploaded successfully' } );
};

exports.sendReadResponseAvtar = function ( req, res ) {
    res.statusCode = 200;
    res.type( 'png' );
    return res.sendFile( req.avtarFilepath );
};

exports.sendReadResponseThumbnail = avtar => async function ( req, res ) {
    res.statusCode = 200;
    res.type( 'png' );
    const tn = await avtar.thumbnail( req.avtarFilename );
    return res.end( tn, 'binary' );
};


