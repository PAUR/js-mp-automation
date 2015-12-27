'use strict';

const runSequence = require('run-sequence');

gulp.task('default', done => {
    runSequence('build:debug', 'build:release', done);
});