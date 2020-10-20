// ==UserScript==
// @name			Comicslate Index EditLinker
// @version			2020.10.20
// @description		Добавление "?do=edit" к ссылкам в "карте сайта"
// @match			http*://*comicslate.org/*do=index*
// @match			http*://*comicslate.org/*idx=*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var lang = '', // подменять язык
	fromlang = '', // подменять источник перевода
	href = 0, // для translate-раздела, замена локалей на капслоки
	band = 0; // замена лент, 1 - d на h, 2 - наоборот

function action ( ) {
	document.querySelectorAll ( "#index__tree a:not(.idx_dir)" ).forEach (
		function ( e ) {
			if ( e.href.search ( /\?do=edit/ ) == -1 ) e.href += "?do=edit";
			if ( lang !== '' ) e.href = e.href.replace ( /\/..\//, '/' + lang + '/' );
			if ( fromlang !== '' ) e.href += "&fromlang=" + fromlang;
			if ( href ) {
				var href_split = e.href.split ( '/' ),
					href_part = href_split [ href_split.length - 1 ].split ( '-' );
				if ( href_part [ 2 ] == 'local' ) e.innerHTML += ' (' + href_part [ 0 ].toUpperCase ( ) + ')'
			};
			if ( band == 1 ) e.href = e.href.replace ( /\/d0/, '/h0' );
			if ( band == 2 ) e.href = e.href.replace ( /\/h0/, '/d0' );
		}
	)
}

setInterval ( action, 100 );
