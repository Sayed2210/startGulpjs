const gulp = require('gulp'),
concat = require('gulp-concat'),
autoprefixer = require('gulp-autoprefixer'),
sass = require('gulp-sass')(require('sass'));

gulp.task('scss',function(){
    return gulp.src('stage/css/homepage.scss')
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(concat('style.css'))
            .pipe(gulp.dest('dist'))
})