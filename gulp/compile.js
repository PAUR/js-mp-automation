'use strict';

const runSequence = require('run-sequence');

gulp.task('compile', done => {
    let compileTasks = ['html', 'fonts', 'images', 'scripts', 'styles'];

    if (!env.isWatch) {
        compileTasks = compileTasks.concat('scripts')
    }

    runSequence(compileTasks, done);
});
