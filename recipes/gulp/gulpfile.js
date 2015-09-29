'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var obt = require('origami-build-tools');

gulp.task('build', function() {
	obt.build(gulp, {
		env: 'production',
		js: './main.js',
		sass: './main.scss',
		buildJs: 'main.js',
		buildCss: 'main.css',
		buildFolder: 'build'
	});

	gulp.src('./src/app.js')
		.pipe(gulp.dest('./build'));
});

gulp.task('verify', function() {
	obt.verify(gulp, {
		// Note that the verify task will automatically ignore all matching
		// files and directories specified in .gitignore
		excludeFiles: [
			'!bower_components/**',
			'!node_modules/**',
			'!build/**',
			'!src/**'
		]
	});
});

gulp.task('watch', function() {
	gulp.watch('./src/**/*', ['verify', 'build']);
});

gulp.task('serve', ['verify', 'build'], function() {
	connect.server({
		port: 9000
	});
});

gulp.task('default', ['verify', 'build']);
