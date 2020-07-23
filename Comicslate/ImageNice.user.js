// ==UserScript==
// @name			Comicslate ImageNice
// @version			2020.07.23
// @description		Вставка красоты под картинками
// @match			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/*do=*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			GM_addStyle
// ==/UserScript==

var in_div1 = document.createElement ( 'div' ),
	in_div2 = document.createElement ( 'div' ),
	level = 3,
	scale = level * 0.5 + 0.5,
	bottom = level * -6.5 - 10.5,
	side = level * 41.25 - 59.05;

GM_addStyle ( '.img-repl { position: relative; }' )
GM_addStyle ( '.shadow { position: absolute; width: 165px; height: 26px; background-image: url(https://static.parastorage.com/services/skins/2.1229.80/images/wysiwyg/core/themes/base/liftedshadow_medium.png); transform: scale(' + scale + '); }' )
GM_addStyle ( 'div .shadow { bottom: ' + bottom + 'px; }' )
GM_addStyle ( '.img-repl .shadow { bottom: ' + ( bottom + 3.5 ) + 'px; }' )
GM_addStyle ( '.shadow_l { background-position: 0 0; left: ' + side + 'px; }' )
GM_addStyle ( '.shadow_r { background-position: 100% 0; right: ' + side + 'px; }' )
in_div1.setAttribute ( 'class', 'shadow shadow_l' );
in_div2.setAttribute ( 'class', 'shadow shadow_r' );

function action ( ) {
	document.querySelectorAll ( ".ct-container, .fn-container, .img-repl" ).forEach (
		function ( e ) {
			e.appendChild ( in_div1 );
			e.appendChild ( in_div2 );
		}
	)
}
setTimeout ( action, 100 );
