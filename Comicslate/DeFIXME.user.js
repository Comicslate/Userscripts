// ==UserScript==
// @name			Comicslate DeFIXME
// @version			2022.07.04
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
	lhref = window . location . href,
	text = /FIXME \*\*[^\n]+[\)）]\/\/\n\n/;

if (
	/FIXME/ . test ( wiki_text . value )
	&&
	/(\/[dh]\d+|\/en\/sci\-fi\/freefall)/ . test ( lhref ) /* в лентах и англ. фрифоле */
) wiki_text . value = wiki_text . value . replace ( text, '' );
