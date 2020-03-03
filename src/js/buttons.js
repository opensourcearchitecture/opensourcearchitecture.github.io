(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $, fill;

$ = require('jquery');

//description button listener

var $description_text = $('.description_text');
var $description_holder = $('.description_holder');

//switch displays on click
$description_text.click(function(){
	$description_text.css("display", "none");
	$description_holder.css("display", "block");
});

$description_holder.click(function(){
	$description_text.css("display", "block");
	$description_holder.css("display", "none");
});