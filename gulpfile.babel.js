'use strict'; 

/*
 * Imports
 * =======
 * Import gulp packages
 */
import config           from './gulp/config.js';
import includeTasks     from './gulp/utils/include-tasks.js';

import gulp             from 'gulp';
import runSequence      from 'run-sequence';
import fs               from 'fs';

/*
 * Tasks
 * =====
 * Require all tasks
 * Overview of all the tasks: gulp/tasks
 */
includeTasks('gulp/tasks');

/*
 * Basic settings
 * ==============
 * Check the config.js for the settings that can be changed
 */
config.sourcemaps       = true;
config.minifyCss        = true;
config.minifyHtml       = false;


/*
 * @task default
 * ============
 * Fires the build task
 */
gulp.task( 'default', [ 'server' ] );


/*
 * @task server
 * ============
 * Describe what it does
 */
gulp.task( 'server', function ( callback ) {

    runSequence(
        'build',
        'browser-sync',
        'watch',
        callback
    );

});

gulp.task( 'server:dist', function ( callback ) {

    runSequence(
        'dist',
        'browser-sync',
        'watch',
        callback
    );

});

gulp.task( 'build', function ( callback ) {

    runSequence(
        'clean',
        ['images', 'svg'],
        ['html', 'js', 'css'],
        'styleguide',
        callback
    );
    
});

gulp.task( 'dist', function ( callback ) {

    config.minifyHtml       = true;
    config.minifyJs         = true;
    config.sourcemaps       = false;
    config.prod             = true;

    runSequence(
        'clean',
        ['images', 'svg'],
        ['html', 'js', 'css'],
        callback
    );

});