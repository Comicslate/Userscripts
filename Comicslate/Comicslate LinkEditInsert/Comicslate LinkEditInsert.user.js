// ==UserScript==
// @name			Comicslate LinkEditInsert
// @version			2020.07.23
// @description		Дополнительные ссылки паблиша и редактора мессаджей
// @match			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/lib/exe/mediamanager.php*
// @exclude			http*://*comicslate.org/*do=*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var	mess = document.querySelectorAll ( ".error, .info, .success, .notify" ),
	approved = document.querySelector ( ".approved_no" );

if ( mess[0] != null ) {
	var link1 = document.createElement ( 'a' );
	link1.setAttribute ( 'href', window.location.href.split ( '?' )[0] + "?do=admin&page=message" );
	link1.innerHTML = 'Редактор';
	link1.style = 'float: right;';
	if ( mess [ 0 ].firstChild ) mess [ 0 ].firstChild.appendChild ( link1 );
};

if ( approved != null ) {
	var ap_loc = window.location.pathname.split ( /\/|:/ ),
		ap_sep = ( ap_loc [ 1 ] == 'ru' ) ? ( '/' + ap_loc [ 2 ] ) : ( '' ),
		link2 = document.createElement ( 'a' );
	link2.setAttribute ( 'href', '/' + ap_loc [ 1 ] + ap_sep + '/publish' );
	link2.innerHTML = 'Паблиш';
	link2.style = 'bottom: 20px; float: right; position: relative;';
	approved.appendChild ( link2 );
};
