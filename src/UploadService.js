const multer = require( 'multer' );

class UploadService {
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

}

module.exports = UploadService;


