// ==UserScript==
// @name			Comic Adapter: GoComics
// @version			2022.05.22
// @description     Extract Info for Comicslate
// @match			http*://www.gocomics.com/*
// @icon			https://www.google.com/s2/favicons?domain=gocomics.com
// @author			Rainbow-Spike
// @grant           GM_setClipboard
// @supportURL      https://github.com/Comicslate/Userscripts/issues
// @updateURL       https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/GoComics.user.js
// @downloadURL     https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/GoComics.user.js
// ==/UserScript==

const prev = document . querySelector ( '.fa-caret-left' ),
	next = document . querySelector ( '.fa-caret-right' ),
	img = document . querySelector ( ".js-item-comic-link img" ) . getAttribute ( 'src' ) + '.gif';
if ( prev ) prev . accessKey = "z";
if ( next ) next . accessKey = "x";

function h ( tag, props = { } ) {
	return Object . assign ( document . createElement ( tag ), props );
}

/* Button click link copy */
function action ( ) {
	GM_setClipboard ( img );
}

function insertButton ( ) {
	const Button = h ( 'input', {
		type: 'button',
		value: '[[ ]]',
		title: '[[ ]]',
		style: 'position: fixed; bottom: 20px; left: 50px;',
		onclick: ( event ) => action ( ),
	} );
	document . body . appendChild ( Button );
}

insertButton ( );

/* Automated link copy */
/* function insertLink ( ) {
	const Link = h ( 'span', {
		innerHTML: 'Link',
		style: 'position: fixed; bottom: 20px; left: 50px;',
		onclick: GM_setClipboard ( img ),
	} );
	document . body . appendChild ( Link );
}

insertLink ( ); */
