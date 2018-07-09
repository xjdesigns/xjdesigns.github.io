var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

gulp.task('prod', function() {
  return gulp.src('./src/scss/style.{sass,scss}')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({ browsers: ['> 1%', 'last 4 versions', 'Firefox ESR', 'Opera 12.1'] }))
    .pipe(gulp.dest('./SIXPIXELS'))
});
