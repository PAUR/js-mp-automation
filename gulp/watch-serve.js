'use strict';

const runSequence = require('run-sequence');

gulp.task('watch-serve', cb => {
    runSequence('build-watch', 'server', cb);
});
