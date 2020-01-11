/******************************************************************************
 * Written by Peter Craftsmn                                                  *
 * Email: peter.craftsmn@gmail.com                                            *
 * All rights reserved Copyright (c) 2020.                                    *
 ******************************************************************************/

const multer = require( 'multer' );

class ParseService {
    constructor() {
        this.storage = multer.memoryStorage();
        this.fileSize = { fileSize: 6 * 1024 * 1024 };
        this.fileFilter = function fileFilter( req, file, cb ) {
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
        this.parseFromField = multer( {
            storage: this.storage,
            limits: this.fileSize,
            fileFilter: this.fileFilter,
        } );
    }

    parseSingleFileFrom( fieldName ) {
        return this.parseFromField.single( fieldName );
    }

    /**
     * Create upload directory if not present already
     */


}

module.exports = new ParseService();


