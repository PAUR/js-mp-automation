'use strict';

const runSequence = require('run-sequence');

gulp.task('build:watch-serve', done => {
    runSequence('build:watch', 'server', done);
});
