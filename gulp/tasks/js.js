'use strict';

import config           from '../config';
import concatPath       from '../utils/concat-path';
import error            from '../utils/error-handler';

import gulp             from 'gulp';
import gulpIf           from 'gulp-if';
import watchify         from 'watchify';
import sourcemaps       from 'gulp-sourcemaps';
import babelify         from 'babelify';
import browserify       from 'browserify';
import source           from 'vinyl-source-stream';
import uglify           from 'gulp-uglify';
import plumber          from 'gulp-plumber';
import streamify        from 'gulp-streamify';
import buffer           from 'vinyl-buffer';
import browserSync      from 'browser-sync';

/*
 * @task js and js-watch
 * =====================
 * js task compiles javascript and adds sourcemaps, and uses babelify to transform it to es2015
 * js:watch task watches the files and only injects the changes without rebuilding the whole file (watchify)
 * @link: https://github.com/substack/node-browserify
 * @link: https://github.com/babel/babelify
 * @link: https://github.com/substack/watchify
 * Inspired by: https://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
 */
function buildScript(watch) {

    const fileSrc = config.source.js.browserifyEntry;

    let bundler = browserify( {
        entries: concatPath.get(config, 'source', 'js', fileSrc), 
        cache: {}, // required for watchify
        packageCache: {}, // required for watchify
        fullPaths: watch // required to be true only for watchify
    });

    if(watch) bundler = watchify(bundler);

    bundler.transform('babelify', { presets: ['es2015'] });

    function rebundle () {
        
        const stream = bundler.bundle();

        return stream
            .on('error', error)
            .pipe( source( fileSrc ) )
            .pipe( buffer() )
            .pipe( gulpIf( config.sourcemaps, sourcemaps.init() ) )
            .pipe( gulpIf( config.minifyJs , streamify( uglify() ) ) )
            .pipe( gulpIf( config.sourcemaps, sourcemaps.write('./') ) )
            .pipe( gulp.dest( concatPath.get(config, 'dest', 'js') ) )
            .pipe( browserSync.stream( { once: true }) );

    }

    bundler.on('update', rebundle);
    return rebundle();

}

gulp.task('js', () => {

    return buildScript(false);

});

gulp.task('js:watch', () => {

    return buildScript(true);

});