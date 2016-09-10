'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	image = require('gulp-image'),
	gulpif = require('gulp-if'),
	sprity = require('sprity'),
	del = require('del');

gulp.task('concatScripts', function() {
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


//gulp.task('compressImage', function() {
	//return gulp.src('./img/**/*.')
	//.pipe(image())
	//.pipe(gulp.dest('./img'));
//});


gulp.task('sprites', /*['compressImage'],*/ function() {
	return sprity.src({
		out: './dist',
		src: 'img/**/*.{png,jpg}',
		style: './_sprite.scss',
		cssPath: '../img',
		margin: 0,
		processor: 'sass',
		split: true
	})
	.pipe(gulpif('*.png', gulp.dest('./dist/img/'), gulp.dest('./scss/sprites/')))
});

gulp.task('compileSass', ['sprites'], function() {
	return gulp.src('scss/application.scss')
		.pipe(maps.init())
		.pipe(sass())
		.pipe(maps.write('./')) //path relative to output directory
		.pipe(gulp.dest('css'));
});

//added to include foundation stylesheet
gulp.task('concatStyles', ['compileSass'], function() {
	return gulp.src(['css/application.css',
					'css/foundation.min.css'])
				.pipe(maps.init())
				.pipe(concat('application.css'))
				.pipe(maps.write('./'))
				.pipe(gulp.dest('css'));
});

gulp.task('minifyScripts', ['concatScripts'], function() {
	return gulp.src('js/app.js')
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('js'));
});

gulp.task('minifyStyles', ['concatStyles'], function() {
	return gulp.src('css/application.css')
	.pipe(cssnano())
	.pipe(rename('application.min.css'))
	.pipe(gulp.dest('css'));
});

gulp.task('watchFiles', function() {
	gulp.watch('scss/**/*.scss', ['compileSass']);
	gulp.watch('js/main.js', ['concatScripts']);
});

gulp.task('clean', function() {
	del(['dist', 'css/application.css*', 'js/app*.js*']);
})

gulp.task('build', ['minifyScripts', 'minifyStyles'], function() {
	return gulp.src(['css/application.min.css', 'js/app.min.js', 'index.html'], { base: './'})
			.pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

gulp.task('default', ['clean'], function() {
	gulp.start('build');
});