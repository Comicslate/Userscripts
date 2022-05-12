// ==UserScript==
// @name			Comicslate AutoCounter
// @version			2021.05.26
// @description		Автозамена номеров в Комикслейте
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=preview*
// @match			http*://*comicslate.org/*do=draft*
// @exclude			http*://browsershots.org/*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoCounter.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoCounter.user.js
// ==/UserScript==

var wiki__text = document . querySelector ( "#wiki__text" ),
	lhref = window . location . href;

if ( wiki__text !== null ) {
	var text = wiki__text . innerHTML;

	if ( lhref . match ( 'western-deep' ) !== null ) {
		var num = text . match ( /Western Deep (\d+)/ ) [ 1 ] * 1 - 382;
		if ( num !== null ) text = text . replace ( 'Страница *', 'Страница ' + num + '*' );
	}
	if ( lhref . match ( /\/en\/.+\/furry-guys/ ) !== null ) text = text . replace ( 'Выпуск', 'Issue' );
	if (
		lhref . match ( 'heavenly-nostrils' ) !== null
		&&
		window . location . pathname . split ( /\// ) . pop ( ) % 7 == 1
	   ) text = text . replace ( 'gif', 'jpg' );

	wiki__text . innerHTML = text;
}
