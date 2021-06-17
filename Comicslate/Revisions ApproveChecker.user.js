// ==UserScript==
// @name			Comicslate Revisions ApproveChecker
// @version			2021.06.17
// @description		Проверка ревизий на наличие неодобрений
// @include			http*://comicslate.org/*do=revisions*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

/* предварительно нужно разрешение на загрузку вкладок в фоне
about:config
browser.tabs.loadDivertedInBackground
true*/

var check = document . querySelectorAll ( ".unapproved_revision" ),
	num = window . location . href . split ( '/' ) . slice ( -1 ) [ 0 ] . split ( '?' ) [ 0 ],
	nump = ( num * 1 + 1 ) . toString ( ) . padStart ( 4, "0" ),
	parts = window . location . href . split ( num );
function fOpen ( i ) { window . open ( check [ i ] . querySelector ( ".wikilink1" ) . href ) };
function fGo ( ) { window. location = parts [ 0 ] + nump + parts [ 1 ] };

if ( num == 3606 ) return;
if ( check && check . length > 0 ) {
	for ( var i = 0; i < check . length; i++ ) {
		setTimeout ( fOpen, i * 2000, i );
		if ( i == check . length - 1 ) setTimeout ( fGo, ( i + 1 ) * 2000 )
	}
} else {
	setTimeout ( fGo, 200 )
}
