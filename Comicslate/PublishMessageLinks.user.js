// ==UserScript==
// @name			Comicslate PublishMessageLinks
// @version			2022.05.06
// @description		Дополнительные ссылки паблиша и редактора мессаджей
// @match			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/lib/exe/mediamanager.php*
// @exclude			http*://*comicslate.org/*do=*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			GM_addStyle
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/PublishMessageLinks.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/PublishMessageLinks.user.js
// ==/UserScript==

GM_addStyle ( '.lei { float: right; margin: 2px 3px; }' );

var	mess = document . querySelector ( ".error, .info, .success, .notify, .approved_no" );

if ( mess != null ) {
	var ap_loc = window . location . pathname . split ( /\/|:/ ),
		link = '<a href = "'
			+ window . location . href . split ( '?' ) [ 0 ]
			+ '?do=admin&page=message" class = "lei" title = "Редактор сообщений">Мессадж</a>'
			+ '<a href = "/'
			+ ap_loc [ 1 ]
			+ (
				ap_loc [ 1 ] == 'ru'
				? ( '/' + ap_loc [ 2 ] )
				: ''
			)
			+ '/publish" class = "lei" title = "Список на одобрение" >Паблиш</a>';
	mess . innerHTML += link;
};
