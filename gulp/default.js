'use strict';

const runSequence = require('run-sequence');

gulp.task('default', done => {
    runSequence('target:debug', 'target:release', done)
});