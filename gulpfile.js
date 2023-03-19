const gulp = require('gulp'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass')(require('sass')),
    livereload = require('gulp-livereload'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch');

gulp.task('pug',function(){
        return gulp.src('stage/index.pug')
                .pipe(pug({pretty: true}))
                .pipe(gulp.dest('dist'))
                .pipe(livereload())
    })
gulp.task('scss',function(){
    return gulp.src('stage/css/**/*.*')
            .pipe(sass())
            .pipe(concat('style.css'))
            .pipe(autoprefixer())
            .pipe(gulp.dest('dist'))
            .pipe(livereload())
})
gulp.task('stream', function () {
    // Endless stream mode
    livereload.listen();
    gulp.watch('stage/css/homepage.scss', gulp.series('scss'));
    gulp.watch('stage/index.pug', gulp.series('pug'))
});
