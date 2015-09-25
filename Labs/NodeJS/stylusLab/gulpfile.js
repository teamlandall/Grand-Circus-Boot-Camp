var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var htmlmin = require('gulp-htmlmin');
var jasmine = require('gulp-jasmine');

gulp.task('default', ['styles', 'scripts'], function(){
	console.log("Working");
});

gulp.task('scripts', function(){
	gulp.src('./js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./js'));
});

gulp.task('styles', function(){
	gulp.src('./styles.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./'));
});

gulp.task('minifyHTML', function(){
	gulp.src('./*.html')
	.pipe(htmlmin({collapseWhiteSpace: true}))
	.pipe(gulp.dest('dist'))
});

gulp.task('jasmine', function(){
	gulp.src('spec/test.js')
	.pipe(jasmine());
});



