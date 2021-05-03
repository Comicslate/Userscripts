// ==UserScript==
// @name			Comicslate Publish DateSorter
// @version			2021.05.04.1
// @description		Сортировка по дате
// @match			https://comicslate.org/*/publish
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Publish%20DateSorter.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Publish%20DateSorter.user.js

// ==/UserScript==

var i, times = [], trs1 = [];

function action ( ) {
	var trs = document . querySelectorAll ( 'tr.apr_table' );
	for ( i = 0; i < trs . length; i++ ) {
		times.push ( [ i, i, Date.parse ( trs [ i ] . querySelector ( '.apr_upd a' ).innerHTML . replace ( '&nbsp;', 'T' ) . replaceAll ( '/', '-' ) ) ] );
	}

	times.sort ( ( a, b ) => a [ 2 ] - b [ 2 ] );

	for ( i = 0; i < trs . length; i++ ) {
		times [ i ] [ 0 ] = i;
	}

	for ( i = 0; i < trs . length; i++ ) {
		trs1 [ i ] = trs [ times [ i ] [ 1 ] ];
	}

	document . querySelector ( 'table.apr_table' ) . tBodies[0] . append ( ...trs1 );
}

setTimeout ( action, 3000 );
