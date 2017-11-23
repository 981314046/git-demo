'use strict';

/*
 *
 	less编译 压缩 合并
 	js合并 压缩 混淆
 	img复制
 	html压缩
 *
 */ 

var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');

// less编译   压缩  合并
gulp.task('style',function(){
	gulp.src(['style/*.less','!style/_*.less'])
		.pipe(less())
		.pipe(cssnano())
		.pipe(gulp.dest('dist/style'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('script',function(){
	gulp.src('script/*.js')
		.pipe(concat('all.js'))	//js合并
		.pipe(uglify())
		.pipe(gulp.dest('dist/script'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

var uglify = require('gulp-uglify');
 

gulp.task('image',function(){
	gulp.src('image/*.*')
		.pipe(gulp.dest('dist/image'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

var htmlmin = require('gulp-htmlmin');

gulp.task('html',function(){
	gulp.src('src/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments:true
		}))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
    gulp.watch('style/*.less',['style']);
    gulp.watch('!style/_*.less',['style']);
	gulp.watch('script/*.js',['script']);
	gulp.watch('src/*.html',['html']);
	gulp.watch('image/*.*',['image']);

});