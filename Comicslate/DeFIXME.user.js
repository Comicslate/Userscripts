// ==UserScript==
// @name			Comicslate DeFIXME
// @version			2023.11.22
// @description		Удаление FIXME
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=preview*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/DeFIXME.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/DeFIXME.user.js
// ==/UserScript==

var wiki_text = document . querySelector ( '#wiki__text' ),
	path = document . querySelector ( '.dokuwiki.lang-en.freefall' ) || document . querySelector ( '.dokuwiki.band' ),
	text = /FIXME \*\*[^\n]+[\)）]\/\/\n\n/,
	text2 = RegExp ( text . source, "g");

if ( wiki_text && /FIXME/ . test ( wiki_text . value ) ) {
	if ( path ) wiki_text . value = wiki_text . value . replace ( text, '' ); /* в лентах и англ. фрифоле */
	var trys = wiki_text . value . match ( text2 );
	if ( trys . length > 1 ) wiki_text . value = wiki_text . value . replace ( trys [ 1 ], '' ); /* повторный FIXME */
}
