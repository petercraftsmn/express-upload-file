/******************************************************************************
 * Written by Peter Craftsmn                                                  *
 * Email: peter.craftsmn@gmail.com                                            *
 * All rights reserved Copyright (c) 2019.                                    *
 ******************************************************************************/

const multer = require( 'multer' );
const path = require( 'path' );


/**
 * Determine photo store location and name
 */
// const storage = multer.diskStorage( {
//     destination: function ( req, file, cb ) {
//         cb( null, path.join( __dirname, '..', '/uploads' ) )
//     },
//     filename: function ( req, file, cb ) {
//         let originalName = file.originalname;
//         let extension = originalName.split( "." );
//         cb( null, file.fieldname + '-' + req.user._id + '.' + extension[ extension.length - 1 ] );
//     }
// } );
const storage = multer.memoryStorage();

/**
 * Determine file types to upload
 * @param req
 * @param file
 * @param cb
 */
const fileFilter = function fileFilter( req, file, cb ) {
    let type = file.mimetype;
    let typeArray = type.split( "/" );
    if ( typeArray[ 0 ] === "image" &&
        ( typeArray[ 1 ] === "png" ||
            typeArray[ 1 ] === "jpg" ||
            typeArray[ 1 ] === "jpeg"
        ) ) {
        cb( null, true );
    } else {
        cb( null, false );
    }
};

/**
 * Maximum file size 2,000,000 bytes
 * @type {{fileSize: number}}
 */
const limits = { fileSize: 6 * 1024 * 1024 };

const upload = multer( {
    storage: storage,
    limits: limits,
    fileFilter: fileFilter,
} );

module.exports.upload = upload;


