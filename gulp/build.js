'use strict';

const runSequence = require('run-sequence');

gulp.task('build', done => {

    let buildTasks = ['html', 'fonts', 'images', 'styles'];

    if (!env.isWatch) {
        buildTasks = buildTasks.concat('scripts')
    }

    runSequence(buildTasks, done);
});
