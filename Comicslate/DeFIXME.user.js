// ==UserScript==
// @name			Comicslate DeFIXME
// @version			2021.06.01
// @description		Удаление FIXME в немецком разделе и лентах
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=preview*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/DeFIXME.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/DeFIXME.user.js
// ==/UserScript==

var author = document . querySelector ( ".user bdi" ) . innerHTML,
	wiki_text = document . querySelector ( '#wiki__text' ),
	lhref = window . location . href,
	text = /FIXME \*\*[^\n]+\)\/\/\n\n/;

if (
	wiki_text . value . match ( 'FIXME' ) != null
	&&
	(
		lhref . match ( /\/[dh]\d+/ ) != null
		||
		(
			lhref . match ( '/de/' ) != null
			&&
			author != 'Robot Spike'
		)
		||
		lhref . match ( '/en/sci-fi/freefall' ) != null
	)
) wiki_text . value = wiki_text . value . replace ( text, '' );
