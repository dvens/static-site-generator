'use strict';

import config           from '../config';
import concatPath       from '../utils/concat-path';
import mergeJson        from '../utils/merge-json';
import error            from '../utils/error-handler';
import twigAtomic       from '../utils/twig-atomic';
import twigSvg          from '../utils/twig-svg';
import createHTMLPath   from '../utils/create-html-path';

import gulp             from 'gulp';
import gulpIf           from 'gulp-if';
import plumber          from 'gulp-plumber';
import minifyHtml       from 'gulp-htmlmin';
import twig             from 'gulp-twig';
import data             from 'gulp-data';
import browserSync      from 'browser-sync';
import rename           from 'gulp-rename';

/*
 * @task html
 * ==========
 * Compiles twig templates to html pages
 * @link : https://github.com/zimmen/gulp-twig
 * @link : https://github.com/joshswan/gulp-data
 */
gulp.task('html', () => {
    
    const options = {};
    const json = mergeJson( config.source.data.src , ['*.json', '**/*.json'] );
    const path = createHTMLPath(config);
    
    // @link : https://github.com/kangax/html-minifier
    options.minifyHtml = {
        collapseWhitespace: true,
        removeComments:     true
    };

    options.twig = {
        extend: (Twig) => { 
            twigAtomic( Twig );
            twigSvg( Twig );
        }
    };

    options.rename = {

        setIndex: ( path ) => {
            
            if(path.basename == 'home') path.basename = 'index';
            
        }

    };

    return gulp.src( path )
        .pipe(plumber({
            errorHandler: error
        }))
        .pipe( data( function() {
            return json;
        } ) )
        .pipe( twig(options.twig) )
        .pipe( gulpIf( config.minifyHtml, minifyHtml( options.minifyHtml ) ) )
        .pipe( gulpIf( config.prod , rename( options.rename.setIndex ) ) )
        .pipe( gulp.dest( concatPath.get(config, 'dest', 'html') ) );

});