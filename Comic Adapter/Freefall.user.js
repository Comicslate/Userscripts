// ==UserScript==
// @name            Comic Adapter: Freefall
// @version			2020.09.25
// @description     Extract Info for Comicslate
// @include         http*://freefall.purrsia.com/*
// @icon            https://www.google.com/s2/favicons?domain=freefall.purrsia.com
// @author			Rainbow-Spike
// @grant           none
// ==/UserScript==

var	number = document.querySelector ( "img" ).src.match ( /f[cv]0(\d+)/ ) [ 1 ],
	title = '';

title = document.querySelector (
	window.location.href.search ( "ff" ) != -1
	? "font"
	: "table + b"
);
title.innerHTML += ' ' + number;
