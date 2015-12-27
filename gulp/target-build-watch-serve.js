'use strict';

const runSequence = require('run-sequence');

gulp.task('target:build-watch-serve', done => {
    runSequence('target:build-watch', 'server', done);
});
