// ==UserScript==
// @name			Comicslate CoTANizer
// @version			2021.06.14.1
// @description		Замена AIMG на CoTAN
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=preview*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			GM_addStyle
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/CoTANizer.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/CoTANizer.user.js
// ==/UserScript==

GM_addStyle ( '.ctn_stop{background-image:linear-gradient(to bottom,#FFF,#A9D);border-radius:3px;border:1px solid #888;padding:1px 6px;}' );

var wiki_text, place, newbtn;

function ctn_repl ( ) {
	newbtn . style . display = 'none';
	wiki_text.value = wiki_text.value
		. replace ( /(\{\{\<?)aimg(\>|\}\})/g, '$1cotan$2' )
		. replace ( /@(.+)\n([^~]*)\n~/g, '@$1\n#\n~\n@$1\n$2\n~' );
}

function ctn_start ( ) {
	if ( !document . querySelector ( '.ctn_stop' ) ) {
		wiki_text = document . querySelector ( '#wiki__text' );
		place = document . querySelector ( '.editButtons' );
		if ( wiki_text && place ) {
			if ( wiki_text.value . match ( 'aimg' ) != null ) {
				newbtn = document . createElement ( 'button' );
				newbtn . type = 'button';
				newbtn . className = 'ctn_stop';
				newbtn . title = 'CoTANize';
				newbtn . textContent = 'CoTANize';
				newbtn . onclick = ctn_repl;
				place . after ( newbtn );
			}
		}
	}
}

setInterval ( ctn_start, 100 );
