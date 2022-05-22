// ==UserScript==
// @name            Comic Adapter: Dinosaur Comics
// @version         2022.05.22.1
// @description     Extract Info for Comicslate
// @match           http*://qwantz.com/*
// @icon            https://www.google.com/s2/favicons?domain=qwantz.com
// @author          Rainbow-Spike
// @grant           GM_setClipboard
// @supportURL      https://github.com/Comicslate/Userscripts/issues
// @updateURL       https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/Dinosaur%20Comics.user.js
// @downloadURL     https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/Dinosaur%20Comics.user.js
// @noframes
// ==/UserScript==

const prevLink = document . querySelector ( '[rel="prev"]' ),
	nextLink = document . querySelector ( '[rel="next"]' );
let num = '';
if ( prevLink ) { prevLink . accessKey = 'z'; num = prevLink . href . split ( '=' ) [ 1 ] * 1 + 1 };
if ( nextLink ) { nextLink . accessKey = 'x'; num = nextLink . href . split ( '=' ) [ 1 ] * 1 - 1 };

function h ( tag, props = { } ) {
	return Object . assign ( document . createElement ( tag ), props );
}

function action ( ) {
	const num0 = num . toString ( ) . padStart ( 4, '0' ),
		text = document . querySelector ( 'img.comic' ) . getAttribute ( 'title' ) || '',
		text1 = text . charAt ( 0 ) . toLowerCase ( ) || '',
		comm = (
			text != ''
			? '\n' + (
					text1 != text1 . toUpperCase ( )
					? text1 . toUpperCase ( ) + text . slice ( 1 )
					: text1 + text . charAt ( 1 ) . toUpperCase ( ) + text . slice ( 2 )
				)
			: ''
			),
		texter = '== Dinosaur Comics ' + num0 + ' ==\n\n{cnav}\n{{' + num0 + '.png}}\n' + comm;
	GM_setClipboard ( texter, 'text' );
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
