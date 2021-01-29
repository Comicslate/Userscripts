// ==UserScript==
// @name			Comicslate Preview EditLinker
// @version			2021.01.29
// @description		Добавление "?do=preview" к ссылкам в "паблише"
// @match			http*://*comicslate.org/*publish*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

function action ( ) {
	document.querySelectorAll ( ".apr_table .apr_page a" ).forEach (
		function ( e ) {
			if ( e.href.search ( /\?do=preview/ ) == -1 ) e.href += "?do=preview";
		}
	)
}

setInterval ( action, 100 );
