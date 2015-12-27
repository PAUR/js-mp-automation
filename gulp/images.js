'use strict';

/* global gulp, config */

gulp.task('images', () => {
    return gulp.src(config.patterns.src.media.images)
        .pipe(gulp.dest(config.paths.build.images));
});