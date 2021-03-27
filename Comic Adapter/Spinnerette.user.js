// ==UserScript==
// @name            Comic Adapter: Spinnerette
// @version         2021.03.27
// @description     Extract Info for Comicslate
// @include         http*://*spinnyverse.com*
// @icon            https://www.google.com/s2/favicons?domain=spinnyverse.com
// @author          Rainbow-Spike
// @grant           none
// ==/UserScript==

var insert = document.createElement ( 'div' ),
	node = document.querySelector ( '#logo' ),
	tit = document.querySelector ( 'title' ),
	title;

// SELECT
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

function action ( ) {
	title = ( tit != null ) ? '**' + tit.innerHTML.replace ( 'Spinnerette - ', '' ).replace ( 'Issue', 'Выпуск' ) + '**<br>' : '';
	insert.innerHTML = title;
	( node != null ) ? node.appendChild ( insert ) : '';
	selectblock ( insert );
}
setTimeout ( action, 300 );

// HOTKEYS
var prev = document.querySelector ( '.cc-nav .cc-prev' ),
	next = document.querySelector ( '.cc-nav .cc-next' );
if ( prev != null ) prev.accessKey = "z";
if ( next != null ) next.accessKey = "x";
