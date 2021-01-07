// ==UserScript==
// @name            Comic Adapter: Tigerknight
// @version         2021.01.07.3
// @description     Extract Info for Comicslate
// @include         http*://*tigerknight.com*
// @icon            https://www.google.com/s2/favicons?domain=tigerknight.com
// @author          Rainbow-Spike
// @grant           none
// ==/UserScript==

var place = document.querySelector ( 'header' ),
	title = '**' + document.querySelector ( '.comic-title' ).innerHTML.replace ( /^[^-]+ - /g, '' ).replace ( / ?<a.+<\/a>/g, '' ) + '**',
	comment =
	document
	.querySelector ( '.comment-contents' )
	.innerHTML
	.split ( '</span>' ) [ 1 ]
	.trim ( )
	.replace ( /<a [^>]*href *= *"([^"]+)"[^>]*>([^<]+)<\/a>/g, "[[$1|$2]]" )
	.replace ( /\[\[https?:\/\/([^.]+).wikipedia.[^\/]+\/wiki\/([^\|\]]+)/g, "[[$1w>$2" )
	.replace ( /<p>Reposted.+<\/p>/, '' )
	.replace ( '</p>\n<p>', '\\\\<br>' )
	.replace ( /(  +|\n|<\/?p>)/g, ' ' )
	.trim ( ),
	rgxp = /w>([^\|\]]+)_([^_\|\]]+)/g;
while ( comment.match ( rgxp ) ) { comment = comment.replace ( rgxp, "w>$1 $2" ) }
if ( comment !== '' ) title += '<br><br>';
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
