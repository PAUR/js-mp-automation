'use strict';

const watchOptions = {debounceDelay: 1000};

gulp.task('watch', ['scripts:watch'], () => {

    gulp.watch(config.paths.src.index, watchOptions, ['html']);
    gulp.watch(config.patterns.src.templates, watchOptions, ['templates']);
    gulp.watch(config.patterns.src.styles.all, watchOptions, ['styles:only']);

});
