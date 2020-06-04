// ==UserScript==
// @name            Comic Adapter: Nerf Now
// @version         2020.06.04
// @description     Extract Info for Comicslate
// @include         http*://*nerfnow.com*
// @icon            https://www.google.com/s2/favicons?domain=nerfnow.com
// @author          Rainbow-Spike
// @grant           none
// ==/UserScript==

// HOTKEYS
var prev = document.querySelector ( '#nav_previous a' ),
	next = document.querySelector ( '#nav_next a' );
if ( prev != null ) prev.accessKey = "z";
if ( next != null ) next.accessKey = "x";

// ISSUE NUMBER
	var num = parseInt ( prev.href.match ( /[^\/]+$/ ) ) + 1;
prev.parentNode.innerHTML += ( "<li><b>" + num + "</b></li>" );

// IMAGELINK
var com_div = document.querySelector ( '#comic' ),
		com_a = com_div.querySelector ( 'a' ),
		com_img = com_div.querySelector ( 'img' ),
			com_title = com_img.title;
if ( com_a == null ) {
	com_a = document.createElement ( 'a' );
	com_a.append ( com_img );
	com_div.append ( com_a );
};
com_a.href = com_img.src;

// ASSEMBLY
var texter = "== Nerf Now!! " + num + " ==<br>**" + com_title + "**<br><br>{cnav}<br>{{" + num + ".png}}<br>",
	comcon = document.querySelector ( ".comment-container" ),
	comm = document.querySelector ( ".comment" );
if ( comm != null ) {
	var ps = comm.querySelectorAll ( "p" ),
		lastp = ps.length - 1;
	if ( ps [ lastp ].innerHTML == "&nbsp;" ) comm.removeChild ( ps [ lastp ] );
	texter += comm.innerHTML
		.replace ( /\<a href="([^"]+)"\>([^\<]+)\<\/a>/g,"[[$1|$2]]" )
		.replace ( /\<(i|em)>([^\<]+)\<\/(i|em)>/g,"//$2//" )
		.replace ( /\<(b|strong)>([^\<]+)\<\/(b|strong)>/g,"**$2**" );
}
texter += "{cnav}";
comcon.innerHTML = texter;

// SELECT
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}
selectblock ( comcon );
