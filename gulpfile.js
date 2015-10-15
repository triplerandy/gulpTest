var gulp = require('gulp'),
    uglify = require('gulp-uglify')
;

/*  scripts task
    - Uglifies
*/
gulp.task('scripts', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

/*  styles task
    - Uglifies
*/
gulp.task('styles', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

/*  watch task
    - Watches JS
*/
gulp.task('watch', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});


//Run task when gulp command is run
gulp.task('default', ['scripts']);
