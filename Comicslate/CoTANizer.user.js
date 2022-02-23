// ==UserScript==
// @name			Comicslate CoTANizer
// @version			2022.02.23
// @description		Замена AIMG на CoTAN
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=preview*
// @match			http*://*comicslate.org/*do=draft*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			GM_addStyle
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/CoTANizer.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/CoTANizer.user.js
// ==/UserScript==

if ( window . location . href . match ( /\/(d|h)\d+/i) ) return;
var wiki_text = document . querySelector ( '#wiki__text' );
if ( wiki_text . value . match ( 'aimg' ) == null ) return;

var sortButton;

GM_addStyle ( '#cotanize { background-image: linear-gradient(to bottom,#FFF,#A9D); margin-left: 4px; }' );
GM_addStyle ( '#cotanize:hover { background-image: linear-gradient(to bottom,#FFF,#87B); }' );

function h ( tag, props = {} ) {
	return Object . assign ( document . createElement ( tag ), props );
}

function action ( ) {
	sortButton . style . display = 'none';
	wiki_text . value = wiki_text . value
		. replace ( /(\{\{\<?)aimg(\>|\}\})/g, '$1cotan$2' )
		. replace ( /@(.+)\n([^~]*)\n~/g, '@$1\n#\n~\n@$1\n$2\n~' );
}

function insertButton ( ) {
	sortButton = h ( 'input', {
		type: 'button',
		value: 'CoTANize!',
		id: 'cotanize',
		title: 'CoTANize!',
		onclick: ( event ) => action ( ),
	} );
	document . querySelector ( '#edbtn__cancel' ) . after ( sortButton );
}

insertButton ( );
