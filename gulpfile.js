var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect');


var coffeeSources = ['components/coffee/*.coffee'];
var jsSources = ['components/scripts/descriptions.js',
				'components/scripts/buttons.js'];
var sassSources = ['components/sass/style.scss'];
var htmlSources = ['*.html',
					'pages/*.html'];


gulp.task('coffee',function() {
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true})
			.on('error',gutil.log))
		.pipe(gulp.dest('components/scripts'))
});

gulp.task('js',function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('js'))
		.pipe(connect.reload())
});

gulp.task('compass',function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			image: 'builds/images',
			style: 'expanded'
		}))
		.on('error',gutil.log)
		.pipe(gulp.dest('css'))
		.pipe(connect.reload())
});

gulp.task('html',function(){
	gulp.src(htmlSources)
	.pipe(connect.reload())
})

gulp.task('connect', function(){
	connect.server({
		root:'',
		livereload: true
	});
});

gulp.task('default',['coffee','js','compass','html','connect','watch'])

gulp.task('watch',function (){
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss',['compass']);
	gulp.watch(htmlSources,['html']);

})
