'use_strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minify = require('gulp-minify-css'),
	autoprefix = require('gulp-autoprefixer'),
	source = require('vinyl-source-stream'),
	browserify = require('browserify'),
	browserSync = require('browser-sync').create();

gulp.task('compileSass', function() {
return gulp.src('./src/scss/**')
		.pipe(sass())
		.pipe(autoprefix())
		.pipe(minify())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('browserify-web', function() {
return	browserify('./src/index.js')
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('views', function() {
return gulp.src('./src/views/**')
	.pipe(gulp.dest('./dist/views'));
});

gulp.task('index', function() {
return gulp.src('./src/index.html')
	.pipe(gulp.dest('./dist/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch(['./dist/**']).on("change", browserSync.reload);
});

gulp.task('watch', function() {
	gulp.watch('src/**/**', ['compileSass', 'browserify-web', 'views', 'index']);
});