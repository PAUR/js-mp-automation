'use strict';

const
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-minify-css'),
    browserSync = require('browser-sync');

gulp.task('styles', ['icons'], () => buildStyles());

gulp.task('styles:only', () => buildStyles());

function buildStyles() {
    return gulp.src(config.patterns.src.styles.build, {base: config.paths.src.styles._root})
        .pipe(concat('app.scss'))
        .pipe(gulpif(env.isDev, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulpif(env.isRelease, minifyCss()))
        .pipe(gulpif(env.isDev, sourcemaps.write('./maps')))
        .pipe(gulp.dest(config.paths.www._root))
        .pipe(browserSync.reload({stream: true}));
}