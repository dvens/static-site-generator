'use strict';

import config           from '../config';
import concatPath       from '../utils/concat-path';

import gulp             from 'gulp';
import browserSync      from 'browser-sync';
import watch            from 'gulp-watch';


/*
 * @task watch
 * ===========
 * Watching the files
 * Used gulp-watch instead of gulp.watch because of (link below):
 * @link https://codedump.io/share/p9wdwgliZ7xk/1/gulps-gulpwatch-not-triggered-for-new-or-deleted-files
 * @link https://github.com/floatdrop/gulp-watch
 */
gulp.task('watch', ['js:watch'], () => {

    watch( concatPath.getMultiple(config, 'source', 'images') , () => {
        runTask('images');
    });

    watch( concatPath.getMultiple(config, 'source', 'svg') , () => {
        runTask('svg');
    });

    watch( concatPath.get(config, 'source', 'css', '**/*.scss') , () => {
        runTask('css');
        runTask('styleguide');
    });

    watch( concatPath.get(config, 'source', 'html', '**') , () => {
        runTask('html');
    });

    watch( concatPath.getMultiple(config, 'source', 'data') , () => {
        runTask('html');
    });

    watch( concatPath.get(config, 'dest', 'html', '**/*.html') , () => {
        browserSync.reload();
    });

});

function runTask(task) {
    gulp.start(`${task}`);
}