// ==UserScript==
// @name			Comicslate Publish DateSorter
// @version			2021.05.18
// @description		Сортировка по дате
// @match			https://comicslate.org/*/publish
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			GM_registerMenuCommand
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Publish%20DateSorter.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Publish%20DateSorter.user.js

// ==/UserScript==

function action ( ) {
	var i, trs = document . querySelectorAll ( 'tr.apr_table' ), times = [], trs1 = [], lever = 0;
	for ( i = 0; i < trs . length; i++ ) {
		times.push ( [
			i,
			Date.parse ( trs [ i ] . querySelector ( '.apr_upd a' ) . innerHTML . replace ( '&nbsp;', 'T' ) . replaceAll ( '/', '-' ) )
		] );
	}
	times.sort (
		( a, b ) => lever
		? ( a [ 1 ] - b [ 1 ] ) // lever 1 ascending
		: ( b [ 1 ] - a [ 1 ] ) // lever 0 descending
	);
	for ( i = 0; i < trs . length; i++ ) {
		trs1 [ i ] = trs [ times [ i ] [ 0 ] ];
	}
	document . querySelector ( 'table.apr_table' ) . tBodies [ 0 ] . append ( ...trs1 );
}

GM_registerMenuCommand ( "Sort!", action );
