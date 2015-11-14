'use strict';

const runSequence = require('run-sequence');

gulp.task('build-serve', cb => {
    runSequence('build', 'server', cb);
});