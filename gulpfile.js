// gulpfile.js based on Google Web Starter Kit:
// https://github.com/google/web-starter-kit/blob/master/gulpfile.js
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');

gulp.task('images', function() {
  return gulp.src(['src/**/*'])
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist'))
    .pipe($.debug());
});

gulp.task('clearCache', function (done) {
  return $.cache.clearAll(done);
});

gulp.task('clean', del.bind(null,
  ['dist/**/*'],
  {dot: true, force: true}));

gulp.task('watch', function () {
  gulp.watch(['src/**/*'],
    ['images']);
});

gulp.task('default', ['clean', 'clearCache', 'images', 'watch']);
