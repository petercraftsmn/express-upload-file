const multer = require( 'multer' );

class UploadService {
    constructor( uploadDir, uploadFieldName, multipleFiles = false ) {

        this.uploadDir = __dirname + uploadDir || '/uploads';
        this.uploadFieldName = uploadFieldName || 'file';

        this.upload = multer( { dest: this.uploadDir } );
        if ( multipleFiles ) {
            this.upload.array( this.uploadFieldName );
        } else {
            this.upload.single( this.uploadFieldName );
        }
    }

}

module.exports = UploadService;
