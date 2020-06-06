// ==UserScript==
// @name            Comic Adapter: Dinosaur Comics
// @version         2020.06.06
// @description     Extract Info for Comicslate
// @include         http*://*qwantz.com*
// @icon            https://www.google.com/s2/favicons?domain=qwantz.com
// @author          Rainbow-Spike
// @grant           none
// ==/UserScript==

var node = document.querySelector ( 'body' ),
	insert = document.createElement ( 'span' ),
	number = window.location.search.split ( '=' ) [ 1 ],
	img = document.querySelector ( 'img.comic' ),
	texter,
	comm;

// SELECT
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

// HOTKEYS
var prev = document.querySelector ( '.nohover:nth-of-type(1) a' ),
	next = document.querySelector ( '.nohover:nth-of-type(2) a' );
if ( prev != null ) prev.accessKey = "z";
if ( next != null ) next.accessKey = "x";

function action ( ) {
	comm = ( img != null ) ? img.getAttribute ( 'title' ) : '';
	texter = '== Dinosaur Comics ' + number + ' ==<br><br>{cnav}<br>{{' + number + '.png}}<br><br>';
	texter += ( comm != ( '' | null ) ) ? comm.charAt ( 0 ).toUpperCase ( ) + comm.slice ( 1 ) + '<br>' : '';
	texter += '{cnav}';
	insert.innerHTML = texter;
	( node != null ) ? node.insertBefore ( insert, node.firstChild ) : '';

	console.log ( 'insert' );
	selectblock ( insert );
}
setTimeout ( action, 100 );
