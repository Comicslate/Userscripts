// ==UserScript==
// @name            Comic Adapter: Spinnerette
// @version         2020.06.06
// @description     Extract Info for Comicslate
// @include         http*://*spinnyverse.com*
// @icon            https://www.google.com/s2/favicons?domain=spinnyverse.com
// @author          Rainbow-Spike
// @grant           none
// ==/UserScript==

var insert = document.createElement ( 'div' ),
	node = document.querySelector ( '#cc-comicbody' ),
	img = document.querySelector ( '#cc-comic' );

// SELECT
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

function action ( ) {
	insert.innerHTML = ( img != null ) ? '**' + img.getAttribute ( 'title' ) + '**' : '' ;
	( node != null ) ? node.appendChild ( insert ) : '';
	selectblock ( insert );
}
setTimeout ( action, 300 );

// HOTKEYS
var prev = document.querySelector ( '.cc-prev' ),
	next = document.querySelector ( '.cc_next' );
if ( prev != null ) prev.accessKey = "z";
if ( next != null ) next.accessKey = "x";
