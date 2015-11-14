'use strict';

const watch = require('gulp-watch'),
    watchOptions = {debounceDelay: 1000};

gulp.task('watch', ['scripts:watch'], () => {

    watch(config.paths.src.index, startTask('html'));
    watch(config.patterns.src.templates, startTask('templates'));
    watch(config.patterns.src.styles.all, startTask('styles:only'));
    watch(config.patterns.src.media.images, startTask('images'));
    watch(config.patterns.src.media.icons.all, startTask('icons'));
    watch(config.patterns.src.media.fonts, startTask('fonts'));
});

function startTask(task) {
    return () => {
        gulp.start(task);
    }
}
