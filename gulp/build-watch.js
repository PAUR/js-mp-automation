'use strict';

const runSequence = require('run-sequence');

gulp.task('build:watch', done => {

    global.env.isWatch = true;

    runSequence('build', 'watch', done);
});
