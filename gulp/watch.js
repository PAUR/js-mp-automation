'use strict';

const watch = require('gulp-watch');

gulp.task('watch', ['scripts:watch'], done => {

    watch(config.paths.src.index, startTask('html'));
    watch(config.patterns.src.templates, startTask('templates'));
    watch(config.patterns.src.styles.all, startTask('styles:only'));
    watch(config.patterns.src.media.images, startTask('images'));
    watch(config.patterns.src.media.icons.all, startTask('icons'));
    watch(config.patterns.src.media.fonts, startTask('fonts'));

    done();
});

function startTask(task) {
    return () => {
        gulp.start(task);
    }
}
