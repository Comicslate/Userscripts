// ==UserScript==
// @name			Comicslate DeFIXME
// @version			2021.05.09.1
// @description		Удаление FIXME в немецком разделе
// @match			http*://*comicslate.org/de/*do=edit*
// @match			http*://*comicslate.org/de/*do=preview*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/DeFIXME.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/DeFIXME.user.js
// ==/UserScript==

var author = document . querySelector ( ".pageinfo bdi:last-child" ) . innerHTML,
	wiki_text = document . querySelector ( '#wiki__text' ),
	text = /FIXME \*\*Diese [^\n]+ wurde\)\/\/\n\n/;

if (
	(
		author == 'G'
		||
		author == '91.44.249.125'
		||
		author == '2a01:c23:c419:5100:6eee:f62a:5551:41ad'
	)
	&&
	wiki_text . value . match ( 'FIXME' ) != null
) {
	wiki_text . value = wiki_text . value . replace ( text, '' );
}
