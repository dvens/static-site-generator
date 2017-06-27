'use strict';

import concatPath   from '../utils/concat-path';
import config       from '../config';

import gulp         from 'gulp';
import del          from 'del';

/*
 * @task clean
 * ============
 * Cleans the destination folder
 * https://github.com/sindresorhus/del
 */
gulp.task('clean', () => {

    del.sync( concatPath.get(config, 'dest', 'root', '**') );

});

