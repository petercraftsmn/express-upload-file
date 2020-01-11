const multer = require( 'multer' );

class UploadService {
    constructor() {
        this.upload = multer( {
            storage: multer.memoryStorage(),
            limits: { fileSize: 6 * 1024 * 1024 },
            fileFilter: function fileFilter( req, file, cb ) {
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
            },
        } );
    }
}

module.exports = UploadService;


