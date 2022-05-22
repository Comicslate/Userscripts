// ==UserScript==
// @name            Comic Adapter: DMFA
// @version         2022.05.22
// @description     Extract Info for Comicslate
// @match           http*://missmab.com/*
// @icon            https://www.google.com/s2/favicons?domain=missmab.com
// @author          Rainbow-Spike
// @grant           GM_setClipboard
// @supportURL      https://github.com/Comicslate/Userscripts/issues
// @updateURL       https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/DMFA.user.js
// @downloadURL     https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/DMFA.user.js
// ==/UserScript==

function h ( tag, props = { } ) {
	return Object . assign ( document . createElement ( tag ), props );
}

function action ( ) {
	const num = document . querySelector ( "img[src*='comicprev']" ) . parentNode . href . match ( /.+_(\d+)\..+/ ) [ 1 ] * 1 + 1,
		title = document . querySelector ( "i" ) . innerHTML . replace ( /\.\.\./g, "…" ) . match ( /(#\d+: )?(.*)\.+?$/ ) [ 2 ];
	GM_setClipboard ( "== Dan and Mab's Furry Adventures " + num + " ==\n**" + title + "**\n\n{cnav}\n{{" + num + ".png}}", 'text' );
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
