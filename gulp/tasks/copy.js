'use strict';

import concatPath   from '../utils/concat-path';
import config       from '../config';

import gulp         from 'gulp';
import stream       from 'merge-stream';

/*
 * @task copy
 * ==========
 * Copies directories and files given in the config.js
 */
gulp.task('copy', () => {

    const files = config.copy || [];
    const streamFiles = []; 

    if( !files ) return;

    files.map( (file) => {

        streamFiles.push(

            gulp.src( file.src )
                .pipe( gulp.dest( file.dest ) )

        );

    });

    return stream(streamFiles);

});

