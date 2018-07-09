var gulp = require('gulp');
var watch = require('gulp-watch');
gulp.task('watch', ['sass'], function () {
    watch('./src/styles/scss/**/*.scss', function(){
      gulp.start('sass');
    });
});
