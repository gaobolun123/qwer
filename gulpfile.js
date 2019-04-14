const gulp = require('gulp');
const minifyScript = require('gulp-uglify');
const minifyCss = require('gulp-clean-css');
const webserver = require('gulp-webserver');

gulp.task('script', () => {
    return gulp.src('./js/*.js')
        .pipe(minifyScript())
        .pipe(gulp.dest('./lib/js'))
})
gulp.task('css', () => {
    return gulp.src('./css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./lib/css'))
})
gulp.task('webserver', () => {
    return gulp.src('./')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
})
gulp.task('watch', () => {
    gulp.watch('./css/*.css', gulp.series('css'))
})
gulp.task('aaa', gulp.series('css', 'webserver', 'script', 'watch'))