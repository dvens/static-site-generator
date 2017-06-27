'use strict';

import config           from '../config';
import concatPath       from '../utils/concat-path';
import error            from '../utils/error-handler';

import gulp             from 'gulp';
import gulpIf           from 'gulp-if';
import plumber          from 'gulp-plumber';
import imagemin         from 'gulp-imagemin';
import newer            from 'gulp-newer';


/*
 * @task images
 * ============
 * Optimizes images
 */
gulp.task('images', () => {

    const options = {};

    // @link : https://github.com/sindresorhus/gulp-imagemin
    options.imagemin = {
        optimizationLevel: 3,   
        progressive: false,     
        interlaces: false      
    };

    return gulp.src( concatPath.getMultiple(config, 'source', 'images') )
        .pipe(plumber({
            errorHandler: error
        }))
        .pipe( newer( concatPath.get(config, 'dest', 'images') ) )
        .pipe( gulpIf( config.optimizeImages, imagemin( options.imagemin ) ) )
        .pipe( gulp.dest( concatPath.get(config, 'dest', 'images') ) );

});