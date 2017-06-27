'use strict';

import config           from '../config';
import concatPath       from '../utils/concat-path';
import error            from '../utils/error-handler';

import gulp             from 'gulp';
import gulpIf           from 'gulp-if';
import plumber          from 'gulp-plumber';
import sass             from 'gulp-sass';
import styleguide       from 'sc5-styleguide';


/*
 * @task Styleguide generator
 * ==========================
 * Generates the styleguide based on KSS comments inside the .scss files
 * http://warpspire.com/kss/syntax/
 */
gulp.task('styleguide:generate', () => {

    const options = {};

    // Extra build options
    // https://github.com/SC5/sc5-styleguide#build-options
    options.styleguide = {
        title: 'My Styleguide', 
        server: true,
        rootPath: concatPath.get(config, 'dest', 'styleguide'),
        overviewPath: 'README.md',
        port: 8001,
        disableHtml5Mode: true,
        sideNav: true,
        extraHead: [
            '<script>function loadjscssfile(filename, filetype){if (filetype=="js"){var fileref=document.createElement("script");fileref.setAttribute("type","text/javascript");fileref.setAttribute("src", filename);}else if (filetype=="css"){var fileref=document.createElement("link");fileref.setAttribute("rel", "stylesheet");fileref.setAttribute("type", "text/css");fileref.setAttribute("href", filename);}if (typeof fileref!="undefined"){document.getElementsByTagName("head")[0].appendChild(fileref);}};</script>',
            '<script>document.addEventListener("DOMContentLoaded", function() {loadjscssfile("./styleguide.css", "css");});</script>'
        ]
    };

    return gulp.src( concatPath.get(config, 'source', 'css', '**/*.scss') )
        .pipe(plumber({
            errorHandler: error
        }))
        .pipe( styleguide.generate( options.styleguide ) )
        .pipe( gulp.dest( concatPath.get(config, 'dest', 'styleguide') ) );

});

gulp.task('styleguide:applystyles', () => {
    
    return gulp.src( concatPath.get(config, 'source', 'css')  )
        .pipe(plumber({
            errorHandler: error
        }))
        .pipe( sass() )
        .pipe( styleguide.applyStyles() )
        .pipe( gulp.dest( concatPath.get(config, 'dest', 'styleguide') ) );

});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles'] );