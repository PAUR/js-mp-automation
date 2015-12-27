'use strict';

const
    spritesmith = require('gulp.spritesmith'),
    path = require('path');

const imagesRoot = config.paths.target._root;

const imgPath = path.relative(imagesRoot, config.paths.target.icons)
    .replace(/\\/g, '/');

gulp.task('icons', cb => {

    const subTaskDone = {
        'img': false,
        'css': false
    };

    const spriteData = gulp.src(config.patterns.src.media.icons.all)
        .pipe(spritesmith({
            imgPath: imgPath,
            imgName: config.paths.target.__layout.icons,
            cssName: 'icons.scss',
            cssVarMap: sprite => {
                sprite.name = 'icon_' + sprite.name.replace('@', '-');
            }
        }));

    spriteData
        .img
        .pipe(gulp.dest(config.paths.target._root))
        .on('end', () => onSubTaskDone('img'));

    spriteData
        .css
        .pipe(gulp.dest(config.paths.src.styles.icons))
        .on('end', () => onSubTaskDone('css'));

    function onSubTaskDone(name) {
        subTaskDone[name] = true;
        if (subTaskDone.img && subTaskDone.css) {
            cb();
        }
    }

});
