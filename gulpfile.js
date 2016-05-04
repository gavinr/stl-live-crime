var gulp = require('gulp');
var stylus = require('gulp-stylus');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();
var ghPages = require('gulp-gh-pages');

var distFolder = 'src/build';
var jsFiles = 'src/js/**/*.js';
var stylusFiles = 'src/styl/**/*.styl';

gulp.task('stylus', function(){
  return gulp.src(stylusFiles)
    .pipe(stylus()) // Using gulp-sass
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('babel', function () {
  return gulp.src(jsFiles)
    .pipe(babel())
    .pipe(gulp.dest(distFolder));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
});

gulp.task('watch', ['browserSync', 'stylus', 'babel'], function(){
  gulp.watch(stylusFiles, ['stylus']);
  gulp.watch(jsFiles, ['babel']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch(jsFiles, browserSync.reload);
});

gulp.task('deploy', function() {
  return gulp.src('./src/**/*')
    .pipe(ghPages());
});

// TODO: https://css-tricks.com/gulp-for-beginners/#article-header-id-10
