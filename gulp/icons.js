'use strict';

const
    spritesmith = require('gulp.spritesmith'),
    path = require('path');

const imagesRoot = config.paths.www._root;

const imgPath = path.relative(imagesRoot, config.paths.www.icons)
    .replace(/\\/g, '/');

const retinaImgPath = path.relative(imagesRoot, config.paths.www.retinaIcons)
    .replace(/\\/g, '/');

gulp.task('icons', cb => {

    const subTaskDone = {
        'img': false,
        'css': false
    };

    const spriteData = gulp.src(config.patterns.src.media.icons.all)
        .pipe(spritesmith({
            retinaSrcFilter: config.patterns.src.media.icons.retina,
            imgPath: imgPath,
            retinaImgPath: retinaImgPath,
            imgName: config.paths.www.__layout.icons,
            retinaImgName: config.paths.www.__layout.retinaIcons,
            cssName: '_icons.scss',
            cssVarMap: sprite => {
                sprite.name = 'icon_' + sprite.name.replace('@', '-')
            }
        }));

    spriteData
        .img
        .pipe(gulp.dest(config.paths.www._root))
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

//endregion