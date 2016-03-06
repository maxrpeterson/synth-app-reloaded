var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('js', function() {
  return browserify('./assets/src/js/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./assets/build/'));
});

gulp.task('default', ['js'], function() {
  gulp.watch('./assets/**/*.js', ['js']);
});
