// ==UserScript==
// @name			Comicslate Publish EditLinker
// @version			2021.04.15
// @description		Добавление do к ссылкам в "паблише"
// @match			https://comicslate.org/de/publish
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Publish%20EditLinker.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Publish%20EditLinker.user.js

// ==/UserScript==

var lv = 3,
	insert = [ 'edit', 'preview', 'revisions', 'backlink' ];

function action ( ) {
	document.querySelectorAll ( ".apr_table .apr_page a" ).forEach (
		function ( e ) {
			e.href += ( e.href.search ( 'do=' + insert [ lv - 1 ] ) == -1 ) ? '?do=' + insert [ lv - 1 ] : '';
		}
	)
}

setInterval ( action, 100 );
