'use strict';

gulp.task('build', ['html', 'fonts', 'images', 'scripts:vendor', 'scripts', 'styles']);