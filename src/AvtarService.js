/******************************************************************************
 * Written by Peter Craftsmn                                                  *
 * Email: peter.craftsmn@gmail.com                                            *
 * All rights reserved Copyright (c) 2019.                                    *
 ******************************************************************************/

const sharp = require( 'sharp' );
const util = require( 'util' );
const path = require( 'path' );
const fs = require( 'fs' );

const fsUnlink = util.promisify( fs.unlink );

class AvtarService {
    constructor( directory ) {
        this.directory = directory;
    }

    async store( buffer ) {

        const fileName = AvtarService.fileName();
        const filepath = this.filepath( fileName );

        if ( fs.existsSync( filepath ) ) {
            this.delete( fileName )
        }

        await sharp( buffer ).resize( 300, 300, {
            fit: sharp.fit.inside,
            withoutEnlargement: true
        } )
            .toFile( filepath );

        return fileName;
    }

    static fileName( userId ) {
        return `avtar-${ userId }.png`;
    }

    filepath( fileName ) {
        return path.resolve( `${ this.directory }/${ fileName }` )
    }

    async delete( fileName ) {
        return fsUnlink( this.filepath( fileName ) );
    }

    async createAvtarFilename( req ) {
        req.avtarFilename = req.file.originalname;
        req.avtarFilepath = this.filepath( req.avtarFilename );
    }

    async thumbnail( filename ) {
        return sharp( this.filepath( filename ) )
            .resize( 50, 50 )
            .toBuffer();
    }

}

module.exports = AvtarService;



