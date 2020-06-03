// ==UserScript==
// @name			Comic Adapter: Little Bobby
// @version			2020.06.03
// @description		Extract Info for Comicslate
// @include			http*://*littlebobbycomic.com*
// @icon			https://www.google.com/s2/favicons?domain=littlebobbycomic.com
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var strip = document.querySelector ( '.slides img, .wp-post-image'),
	img = strip.getAttribute ( 'src' ),
	dlink = document.createElement ( 'a' );

// SELECT
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

dlink.setAttribute ( 'href', img );
dlink.innerHTML = img;
strip.parentNode.parentNode.appendChild ( dlink );

selectblock ( dlink );
