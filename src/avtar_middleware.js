/******************************************************************************
 * Written by Peter Craftsmn                                                  *
 * Email: peter.craftsmn@gmail.com                                            *
 * All rights reserved Copyright (c) 2019.                                    *
 ******************************************************************************/


module.exports.handleAvtarSave = avtar => async ( req, res, next ) => {
    if ( !req.file ) return next();
    if ( req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpeg' ) {
        return next( new Error( 'File format is not supported' ) );
    }
    req.file.storedFilename = await avtar.store( req.file.buffer );
    return next()
};


module.exports.createAvtarNameAndPath = avtar => async ( req, res, next ) => {
    await avtar.createAvtarFilename( req );
    return next();
};


