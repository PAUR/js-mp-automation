'use strict';

const
    gulpif = require('gulp-if'),
    minifyHtml = require('gulp-minify-html');

gulp.task('html', () => {
    return gulp.src(config.paths.src.index)
        .pipe(gulpif(env.isRelease, minifyHtml()))
        .pipe(gulp.dest(config.paths.www._root));
});