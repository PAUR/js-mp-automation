'use strict';
/* global gulp, config */

const 
    templateCache = require('gulp-angular-templatecache'),
    path = require('path');

gulp.task('templates', () => {
    return gulp.src(config.patterns.src.templates)
        .pipe(templateCache({
            root: path.join('/', config.paths.src._root, '/app'),
            filename: 'templateCache.js',
            templateHeader: 'export default /*@ngInject*/ function templateCache($templateCache) {',
            templateFooter: '};'
        }))
        .pipe(gulp.dest(config.paths.src.templates));
});