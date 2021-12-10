// ==UserScript==
// @name			Comicslate Publish DateSorter
// @version			2021.12.10
// @description		Сортировка по дате
// @description:en	Sort by date
// @match			https://comicslate.org/*/publish
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			GM_addStyle
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Publish%20DateSorter.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Publish%20DateSorter.user.js

// ==/UserScript==

var lever = 0; // lever 1 ascending, lever 0 descending

GM_addStyle ( '#sortdates { margin-left: 4px; background-image: linear-gradient(to bottom,#7EF,#5CC); border-radius: 3px; border: 1px solid #888; }' );
GM_addStyle ( '#sortdates:hover { background-image: linear-gradient(to bottom,#7EF,#3AB); }' );
GM_addStyle ( '#publish { display: inline-block; }' );

function h ( tag, props = {} ) {
	return Object . assign ( document . createElement ( tag ), props );
}

function action ( ) {
	var i,
		trs = document . querySelectorAll ( 'tr.apr_table' ),
		times = [ ],
		trs1 = [ ];
	for ( i = 0; i < trs . length; i++ ) {
		times . push ( [
			i,
			Date . parse ( trs [ i ] . querySelector ( '.apr_upd a' ) . innerHTML . replace ( '&nbsp;', 'T' ) . replaceAll ( '/', '-' ) )
		] );
	}
	times . sort (
		( a, b ) => lever
		? ( a [ 1 ] - b [ 1 ] ) // lever 1 ascending
		: ( b [ 1 ] - a [ 1 ] ) // lever 0 descending
	);
	for ( i = 0; i < trs . length; i++ ) {
		trs1 [ i ] = trs [ times [ i ] [ 0 ] ];
	}
	document . querySelector ( 'table.apr_table' ) . tBodies [ 0 ] . append ( ...trs1 );
	document . querySelectorAll ( '.apr_ns' ) . forEach (
		function ( e ) {
			e . hidden = true
		}
	)
}

function insertButton ( ) {
	const place = document . querySelector ( '#publish' );
	const sortButton = h ( 'input', {
		type: 'button',
		value: 'Sort by date!',
		id: 'sortdates',
		title: 'Sort by date!',
		onclick: ( event ) => action ( ),
	} );
	place . after ( sortButton );
}

insertButton ( );
