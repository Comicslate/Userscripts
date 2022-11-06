// ==UserScript==
// @name            Comic Adapter: Tigerknight
// @version         2022.11.06.1
// @description     Extract Info for Comicslate
// @include         http*://*tigerknight.com*
// @icon            https://www.google.com/s2/favicons?domain=tigerknight.com
// @author          Rainbow-Spike
// @grant           none
// @run-at			document-end
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/Tigerknight.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/Tigerknight.user.js
// ==/UserScript==

var chapter = document.querySelector ( '.comic-bookmark-nav option' );
chapter = /*( chapter != null )
	? chapter.innerHTML + ' - '
	:*/ '' ;

var title = document.querySelector ( 'article > h1' );
title = ( title != null )
	? title.innerHTML.replace ( /^[^-]+ - /g, '' ).replace ( / ?<a.+<\/a>/g, '' )
	: '';

var comment = document.querySelector ( '.comment-contents' );
comment = ( comment != null )
	? comment.innerHTML.split ( 'Jan</span>' ) [ 1 ]
	: '' ;

comment = ( comment != undefined )
	? comment.trim ( )
		.replace ( /<a [^>]*href *= *"([^"]+)"[^>]*>([^<]+)<\/a>/g, "[[$1|$2]]" )
		.replace ( /\[\[https?:\/\/([^.]+).wikipedia.[^\/]+\/wiki\/([^\|\]]+)/g, "[[$1w>$2" )
		.replace ( /<p>Reposted.+<\/p>/, '' )
		.replace ( /(<\/p>\n<p>|<br>)/g, '\\\\<br>' )
		.replace ( /(  +|\n|<\/?p>)/g, ' ' )
		.replace ( /<em>([^<]+)<\/em>/g, "//$1//" )
		.replace ( /<strong>([^<]+)<\/strong>/g, "**$1**" )
		.trim ( )
	: '';

while ( comment.match ( /w>([^\|\]]+)_([^_\|\]]+)/g ) ) { // отработка всех подчерков в интервики
	comment = comment.replace ( /w>([^\|\]]+)_([^_\|\]]+)/g, "w>$1 $2" )
};

// в теории можно добавить реакцию на одинаковость страницы и титула
// var iwiki = comment.match ( /w>([^\|\]]+)\|"?([^\|\]]+)"?/i );
// if ( iwiki [ 1 ] === iwiki [ 2 ] ) comment.replace ( /w>([^\|\]]+)\|"?([^\|\]]+)"?/i, 'w>$1' )
// но этот вариант только для одной интервики на страницу... надо for каждый матч отдельно. или while 	regexp.prototype.exec()

var place = document.querySelector ( 'header' );
if ( place != null ) place.innerHTML = '**' + chapter + title + '**' + ( ( comment !== '' ) ? '<br><br>' : '' ) + comment;

// SELECTOR
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}
selectblock ( place );

// HOTKEYS
var prev = document.querySelector ( '.comic-nav :nth-child(2)' ),
	next = document.querySelector ( '.comic-nav :nth-child(3)' );
if ( prev != null )	prev.accessKey = "z";
if ( next != null )	next.accessKey = "x";
