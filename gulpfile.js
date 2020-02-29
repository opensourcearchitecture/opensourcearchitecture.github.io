const {src, dest, series, parallel, watch} = require('gulp');
const del = require('del');
const origin = 'src';
const destination = 'build';
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const concatenate = require('gulp-concat');
const sass = require('gulp-sass');
const wait = require('gulp-wait');

sass.compiler = require('node-sass');

function html(cb) {
	src(`${origin}/**/*.html`).pipe(dest(`${destination}`));
	cb();
}


function css(cb) {
	src(`${origin}/sass/style.scss`)
	.pipe(wait(500))
	.pipe(sass({
		outputSyle: 'compressed'
	}))
	.pipe(dest(`${destination}/css`));

	cb();
}

function js(cb) {
	src(`${origin}/js/**/*.js`)
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(concatenate('build.js'))
	.pipe(dest(`${destination}/js`));
	cb();
}

async function clean(cb) {
	await del(destination);
	cb();
}

function watcher (cb) {
	watch(`${origin}/sass/*.scss`).on('change',series(css, browserSync.reload))
	watch(`${origin}/**/*.html`).on('change',series(html, browserSync.reload))
	watch(`${origin}/**/*.js`).on('change',series(js, browserSync.reload))
	cb();
}

function server(cb) {
	browserSync.init({
		notify: false,
		server:{
			baseDir:destination
		}
	})
	cb();
}

exports.default = series(clean, parallel(html, css, js), server, watcher);