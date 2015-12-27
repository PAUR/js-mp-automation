'use strict';

const runSequence = require('run-sequence');

gulp.task('compile', done => {

    let compileTasks = ['html', 'fonts', 'images', 'styles'];

    if (!env.isWatch) {
        compileTasks = compileTasks.concat('scripts')
    }

    runSequence(compileTasks, done);
});
