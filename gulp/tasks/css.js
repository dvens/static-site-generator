import config           from '../config';
import concatPath       from '../utils/concat-path';
import error            from '../utils/error-handler';

import gulp             from 'gulp';
import gulpIf           from 'gulp-if';
import plumber          from 'gulp-plumber';
import sass             from 'gulp-sass';
import autoprefixer     from 'gulp-autoprefixer';
import minifyCss        from 'gulp-minify-css';
import sourcemaps       from 'gulp-sourcemaps';
import browserSync      from 'browser-sync';

/*
 * @task css
 * =========
 * Compiles sass to css
 * https://github.com/dlmanning/gulp-sass
 */
gulp.task('css', () => {

    const options = {};

    // @Link: https://github.com/sindresorhus/gulp-autoprefixer
    options.autoprefixer = {
        browser: ['last 3 versions', 'iOS 8'],
        cascade: false
    }

    // @Link: https://github.com/scniro/gulp-clean-css
    options.minifyCss = {
        advanced: false,
        aggresiveMerging: false,
        keepSpecialComments: 0
    }

    return gulp.src( concatPath.get(config, 'source', 'css') )
        .pipe( gulpIf( config.sourcemaps, sourcemaps.init() ) )
        .pipe(plumber({
            errorHandler: error
        }))
        .pipe( sass() )
        .pipe( autoprefixer( options.autoprefixer ) )
        .pipe( gulpIf( config.minifyCss, minifyCss( options.minifyCss ) ) )
        .pipe( gulpIf( config.sourcemaps, sourcemaps.write('./') ) )
        .pipe( gulp.dest( concatPath.get(config, 'dest', 'css') ) )
        .pipe( browserSync.stream({ match: '**/*.css' }) );

});