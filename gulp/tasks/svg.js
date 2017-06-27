'use strict';

import config           from '../config';
import concatPath       from '../utils/concat-path';
import error            from '../utils/error-handler';

import gulp             from 'gulp';
import gulpIf           from 'gulp-if';
import plumber          from 'gulp-plumber';
import svgmin           from 'gulp-svgmin';
import newer            from 'gulp-newer';


/*
 * @task svg
 * =========
 * Optimizes svgs
 */
gulp.task('svg', () => {

    const options = {};

    // @link : https://github.com/ben-eb/gulp-svgmin
    options.svgmin = {
        js2svg: {
            pretty: false 
        },
        plugins: [
            { cleanupIDs: true }, 
            { removeDoctype: true }, 
            { removeComments: true },
            { removeTitle: true } 
        ]
    };

    return gulp.src( concatPath.getMultiple(config, 'source', 'svg') )
        .pipe(plumber({
            errorHandler: error
        }))
        .pipe( newer( concatPath.get(config, 'dest', 'svg') ) )
        .pipe( gulpIf( config.optimizeSvg, svgmin( options.svgmin ) ) )
        .pipe( gulp.dest( concatPath.get(config, 'dest', 'svg') ) );

});