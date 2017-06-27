'use strict';

import concatPath   from '../utils/concat-path';
import config       from '../config';

import gulp         from 'gulp';
import browserSync  from 'browser-sync';

/*
 * @task browser-sync
 * ==================
 * Sets up a server on: localhost:8000
 */
gulp.task('browser-sync', () => {

    const options = {};

    options.browserSync = {
        notify: true,
        port: 8000,
        tunnel: false, //Set tunnel true if you want to share the project with other people 
        server: {
            baseDir: config.dest.root.src,
            middleware: [

                function(request, response, next) {
                    response.setHeader('Access-Control-Allow-Origin', '*');
                    next();
                }
                
            ]
        }
    }

    return browserSync(options.browserSync);

});