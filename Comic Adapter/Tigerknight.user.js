// ==UserScript==
// @name            Comic Adapter: Tigerknight
// @version         2021.01.06.1
// @description     Extract Info for Comicslate
// @include         http*://*tigerknight.com*
// @icon            https://www.google.com/s2/favicons?domain=tigerknight.com
// @author          Rainbow-Spike
// @grant           none
// ==/UserScript==

var place = document.querySelector ( 'header' );
var title = '**' + document.querySelector ( '.comic-title' ).innerHTML.replace ( /^[^-]+ - /g, '' ).replace ( / ?<a.+<\/a>/g, '' ) + '**<br><br>';
var comment = document.querySelector ( '.comment-contents' ).innerHTML.split ( '</span>' ) [ 1 ].replace ( '</p>\n<p>', '\\\\<br>' ).replace ( /(  +|\n|<\/?p>)/g, ' ' );
place.innerHTML = title + comment;

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
if ( prev != null )
	prev.accessKey = "z";
if ( next != null )
	next.accessKey = "x";
