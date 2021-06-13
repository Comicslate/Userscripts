// ==UserScript==
// @name			Comicslate CoTANizer
// @version			2021.06.14
// @description		Замена AIMG на CoTAN
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=preview*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/CoTANizer.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/CoTANizer.user.js

// ==/UserScript==

var wiki_text = document . querySelector ( '#wiki__text' ),
	place = document . querySelector ( '.editButtons' );

function action ( ) {
	newbtn . style . display = 'none';
	wiki_text.value = wiki_text . value
		. replace ( /(\{\{\<?)aimg(\>|\}\})/g, '$1cotan$2' )
		. replace ( /@(.+)\n([^~]*)\n~/g, '@$1\n#\n~\n@$1\n$2\n~' );
}

if ( wiki_text . value . match ( 'aimg' ) != null ) {
	var newbtn = document . createElement ( 'button' );
	newbtn . id = 'replace-script';
	newbtn . type = 'button';
	newbtn . style = 'background-image: linear-gradient(to bottom,#FFF,#A9D); display: inline';
	newbtn . textContent = 'CoTANize';
	newbtn . onclick = action;
	place . after ( newbtn );
}
