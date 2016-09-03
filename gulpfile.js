'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	del = require('del');

gulp.task("concatScripts", function() {
	return gulp.src(['js/jquery.js',
					'js/foundation.js',
					'js/foundation.equilizer.js',
					'js/foundation.reveal.js',
					'js/fastclick.js', 
			  		'js/main.js'])
	.pipe(maps.init())
	.pipe(concat('app.js'))
	.pipe(maps.write('./')) //path relative to output directory
	.pipe(gulp.dest('js'));
});

gulp.task('minifyScripts', ['concatScripts'], function() {
	return gulp.src('js/app.js')
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('js'));
});

gulp.task('compileSass', function() {
	return gulp.src('scss/application.scss')
		.pipe(maps.init())
		.pipe(sass())
		.pipe(maps.write('./')) //path relative to output directory
		.pipe(gulp.dest('css'));
});

gulp.task('watchFiles', function() {
	gulp.watch('scss/**/*.scss', ['compileSass']);
	gulp.watch('js/main.js', ['concatScripts']);
});

gulp.task('clean', function() {
	del(['dist', 'css/application.css*', 'js/app*.js*']);
})

gulp.task('build', ['minifyScripts', 'compileSass'], function() {
	return gulp.src(['css/application.css', 'js/app.min.js', 'index.html',
					'img/**', 'fonts/**'], { base: './'})
			.pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

gulp.task('default', ['clean'], function() {
	gulp.start('build');
});