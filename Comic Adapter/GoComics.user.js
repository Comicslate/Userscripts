// ==UserScript==
// @name			Comic Adapter: GoComics
// @version			2020.06.03
// @description     Extract Info for Comicslate
// @include			http*://*gocomics.com*
// @icon			https://www.google.com/s2/favicons?domain=gocomics.com
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var prev = document.querySelector ( '.fa-caret-left' ),
	next = document.querySelector ( '.fa-caret-right' );
prev.accessKey = "z";
next.accessKey = "x";

var strip = document.querySelector ( '.js-item-comic-link' ),
	img = strip.querySelector ( "img" ).getAttribute ( 'src' ),
	dlink = document.createElement ( 'a' );

// SELECT
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

dlink.setAttribute ( 'href', img + '.gif' );
dlink.innerHTML = img + '.gif';
dlink.setAttribute ( 'style', 'font-size: 20px; display: block;' );
strip.parentNode.insertBefore ( dlink, strip.parentNode.firstChild );

selectblock ( dlink );
