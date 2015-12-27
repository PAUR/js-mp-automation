'use strict';

const runSequence = require('run-sequence');

gulp.task('target:build-watch-serve', cb => {
    runSequence('target:build-watch', 'server', cb);
});
