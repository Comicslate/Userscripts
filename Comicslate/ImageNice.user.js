// ==UserScript==
// @name			Comicslate ImageNice
// @version			2021.05.26
// @description		Вставка красоты под картинками
// @match			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/*do=*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			GM_addStyle
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/ImageNice.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/ImageNice.user.js
// ==/UserScript==

var in_div1 = document . createElement ( 'div' ),
	in_div2 = document . createElement ( 'div' ),
	level = 3,
	scale = ( level + 1 ) * 0.5, // 2
	bottom = level * -6.5 - 10.5, // -30
	side = level * 41.25 - 59.05; // 64.7

in_div1 . setAttribute ( 'class', 'shadow shadow_l' );
in_div2 . setAttribute ( 'class', 'shadow shadow_r' );

GM_addStyle ( '.img-repl { position: relative; }' )
GM_addStyle ( '.shadow { position: absolute; width: 165px; height: 26px; background-image: url(https://static.parastorage.com/services/skins/2.1229.80/images/wysiwyg/core/themes/base/liftedshadow_medium.png) no-repeat; transform: scale(' + scale + '); }' ) // 2
GM_addStyle ( 'div .shadow { bottom: ' + bottom + 'px; }' ) // -30
GM_addStyle ( '.img-repl .shadow { bottom: ' + ( bottom + 3.5 ) + 'px; }' ) // -26.5
GM_addStyle ( '.shadow_l { background-position: 0 0; left: ' + side + 'px; }' ) // 64.7
GM_addStyle ( '.shadow_r { background-position: 100% 0; right: ' + side + 'px; }' ) // 64.7

function action ( ) {
	document . querySelectorAll ( ".ct-container, .fn-container, .img-repl" ) . forEach (
		function ( e ) {
			e . appendChild ( in_div1 );
			e . appendChild ( in_div2 );
		}
	)
}
setTimeout ( action, 100 );
