// ==UserScript==
// @name            Comic Adapter: Dinosaur Comics
// @version         2020.06.12
// @description     Extract Info for Comicslate
// @include         http*://*qwantz.com*
// @icon            https://www.google.com/s2/favicons?domain=qwantz.com
// @author          Rainbow-Spike
// @grant           none
// ==/UserScript==

let node = document.querySelector ( '#header' ),
	insert = document.createElement ( 'span' ),
	number = window.location.search.split ( '=' ) [ 1 ],
	img = document.querySelector ( 'img.comic' );

// SELECT
function selectblock ( name ) {
	let rng = document.createRange ( );
	rng.selectNode ( name );
	let sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

// HOTKEYS
let prevLink = document.querySelector ( '[rel="prev"]' ),
	nextLink = document.querySelector ( '[rel="next"]' );
    if ( prevLink ) prevLink.accessKey = 'z';
    if ( nextLink ) nextLink.accessKey = 'x';

function title ( ) {
	let comm = img.getAttribute ( 'title' ) || '',
		title =
			comm != ( '' | null )
			? '<br>' + (
				comm.charAt ( 0 ).toLowerCase ( ) != comm.charAt ( 0 ).toUpperCase ( )
					? comm.charAt ( 0 ).toUpperCase ( ) + comm.slice ( 1 )
					: comm.charAt ( 0 ).toLowerCase ( ) + comm.charAt ( 1 ).toUpperCase ( ) + comm.slice ( 2 )
				) + '<br>'
			: '';
	return title;
}

function action ( ) {
	insert.innerHTML = '== Dinosaur Comics ' + number + ' ==<br><br>{cnav}<br>{{' + number + '.png}}<br>' + title ( ) + '{cnav}';
	( node != null )
		? node.insertBefore ( insert, node.firstChild )
		: '';
	selectblock ( insert );
}
action ( );
