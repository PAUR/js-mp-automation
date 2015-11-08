'use strict';

gulp.task('fonts', () => {

    return gulp.src(config.patterns.src.media.fonts)
        .pipe(gulp.dest(config.paths.www.fonts));

});