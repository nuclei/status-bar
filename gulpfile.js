'use strict';
/* ---------- */
/* setup */
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

gulp.task('default', () => {
    return gulp.src('src/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['latest']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});
