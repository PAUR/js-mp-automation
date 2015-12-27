'use strict';

const runSequence = require('run-sequence');

gulp.task('default', done => {
    runSequence('target:build', 'target:release', done)
});