// ==UserScript==
// @name            Comic Adapter: Freefall
// @version			2020.01.03
// @description     Add number of stripe
// @include         http*://freefall.purrsia.com/*
// @author			Rainbow-Spike
// @namespace		https://greasyfork.org/users/7568
// @homepage		https://greasyfork.org/ru/users/7568-dr-yukon
// @icon            https://www.google.com/s2/favicons?domain=freefall.purrsia.com
// @grant           none
// @run-at			document-end
// ==/UserScript==

var	number = document.querySelector ( "img" ).src.match ( /f[cv]0(\d+)/ )[1], // search number of stripe in path of image
	title = '';

// search location of title of comic
if ( window.location.href.search ( "ff" ) != -1 ) { // if non-last page
	title = document.querySelector ( "font" );
} else { // if main page
	title = document.querySelector ( "table + b" );
}

title.innerHTML += ' ' + number; // insert number of stripe after title of comic
