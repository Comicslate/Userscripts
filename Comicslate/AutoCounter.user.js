// ==UserScript==
// @name			Comicslate AutoCounter
// @version			2021.04.15.2
// @description		Автозамена номеров в Комикслейте
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=draft*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoCounter.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoCounter.user.js
// ==/UserScript==

var wiki__text = document.querySelector ( "#wiki__text" ),
	hn_num = window.location.pathname.split ( /\// ).pop()%7;

if ( wiki__text !== null ) {
	var text = wiki__text.innerHTML;

	if ( window.location.href.match ( 'western-deep' ) !== null ) {
		var num = text.match ( /Western Deep (\d+)/ )[1] * 1 - 382;
		if ( num !== null ) text = text.replace ( 'Страница *', 'Страница ' + num + '*' );
	}
	if ( window.location.href.match ( 'furry-guys' ) !== null ) {
		if ( window.location.href.match ( '\/en\/' ) !== null ) text = text.replace ( 'Выпуск', 'Issue' )
	}
	if ( window.location.href.match ( 'heavenly-nostrils' ) !== null
		&&
		hn_num == 1
	   ) text = text.replace ( 'gif', 'jpg' );

	wiki__text.innerHTML = text;
}
