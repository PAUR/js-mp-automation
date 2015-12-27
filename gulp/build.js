'use strict';

const
    runSequence = require('run-sequence'),
    envLog = require('../env/log');

gulp.task('build', done => {

    let buildTasks = ['html', 'fonts', 'images', 'styles'];

    if (!env.isWatch) {
        buildTasks = buildTasks.concat('scripts')
    }

    envLog(env);

    runSequence(buildTasks, done);
});
