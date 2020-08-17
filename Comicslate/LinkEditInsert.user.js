// ==UserScript==
// @name			Comicslate LinkEditInsert
// @version			2020.08.18
// @description		Дополнительные ссылки паблиша и редактора мессаджей
// @match			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/lib/exe/mediamanager.php*
// @exclude			http*://*comicslate.org/*do=*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var	mess = document.querySelector ( ".error, .info, .success, .notify, .approved_no" );

if ( mess != null ) {
	var ap_loc = window.location.pathname.split ( /\/|:/ ),
		link1 = document.createElement ( 'a' ),
		link2 = document.createElement ( 'a' );
	link1.setAttribute ( 'href', window.location.href.split ( '?' ) [ 0 ] + "?do=admin&page=message" );
	link2.setAttribute ( 'href', '/' + ap_loc [ 1 ] + ( ( ap_loc [ 1 ] == 'ru' ) ? ( '/' + ap_loc [ 2 ] ) : ( '' ) ) + '/publish' );
	link1.innerHTML = 'М';
	link2.innerHTML = 'П';
	link1.title = 'Редактор сообщений';
	link2.title = 'Список на одобрение';
	link1.style = link2.style = 'float: right; font-size: 130%; margin-left: 3px; position: relative;';
	mess.appendChild ( link1 );
	mess.appendChild ( link2 );
};
