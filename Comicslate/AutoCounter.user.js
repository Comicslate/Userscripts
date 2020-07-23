// ==UserScript==
// @name			Comicslate AutoCounter
// @version			2020.07.23
// @description		Автозамена номеров в Комикслейте
// @match			http*://*comicslate.org/*do=edit*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var wiki__text = document.querySelector ( "#wiki__text" ),
	hn_num = window.location.pathname.split ( /\// ).pop()%7;

if ( wiki__text !== null ) {
	var text = wiki__text.innerHTML;

	if ( window.location.href.match ( 'western-deep' ) !== null ) {
		var num = text.match ( /Western Deep (\d+)/ )[1] * 1 - 333;
		if ( num !== null ) text = text.replace ( 'Страница *', 'Страница ' + num + '*' );
	}
	if ( window.location.href.match ( 'furry-guys' ) !== null ) {
/*		var num1 = text.match ( /Furry Guys (\d+)/ )[1] * 1 - 992;
		if ( num1 !== null ) text = text.replace ( 'Выпуск 14-*', 'Выпуск 14-' + num1 + '*' );*/
		if ( window.location.href.match ( '\/en\/' ) !== null ) text = text.replace ( 'Выпуск', 'Issue' )
	}
	if ( window.location.href.match ( 'heavenly-nostrils' ) !== null
		&&
		hn_num == 1
	   ) text = text.replace ( 'gif', 'jpg' );

	wiki__text.innerHTML = text;
}
