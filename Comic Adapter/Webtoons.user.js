// ==UserScript==
// @name            Comic Adapter: Webtoons
// @version         2021.01.04
// @description     Extract Info for Comicslate
// @include         http*://*webtoons.com*
// @icon            https://www.google.com/s2/favicons?domain=webtoons.com
// @author          Rainbow-Spike
// @grant           none
// ==/UserScript==

var lever = 2,
	comic = 'ZomKom',
	//comic = 'Bethellium',
	timer = 300,
	nod = document.createElement ( "span" ),
//	num = ( document.querySelector ( '._btnOpenEpisodeList' ).innerHTML.split ( '#' ) [ 1 ] * 1 - 0 ).toString ( ).padStart ( 4, "0" ),
	num = document.querySelector ( '._btnOpenEpisodeList' ).innerHTML.split ( '#' ) [ 1 ].padStart ( 4, "0" ),
	imgs, x, img, a, title, comment;
nod.style = 'font-size: 15px; left: 5px; position: fixed; top: 50px; width: 550px; ';

function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

function links ( lv ) {
	nod.innerHTML = '';
	imgs = document.querySelectorAll ( "img._images" );
	for ( x = 0; x < imgs.length; x++ ) {
		img = imgs [ x ].getAttribute ( 'data-url' );
		if ( lv ) {
			a = document.createElement ( "a" );
			a.href = img;
			a.innerHTML = img;
			a.style.display = 'block';
			nod.appendChild ( a );
		} else {
			img = img.replace ( /.+\//g, "" ).replace ( /\?.+/g, "" );
			nod.innerHTML += 'ren "' + img + '" "' + num + '-' + ( x + 1 ) + ' ' + img + '"<br>\n';
		}
	}
}

switch ( lever ) {
	case 0: // LINK
		setInterval ( links ( 1 ), timer );
		break
	case 1: // SHORT NAMES
		setInterval ( links ( 0 ), timer );
		break
	case 2: // SUPPLY
		nod.innerHTML = "== " + comic + " " + num + " ==<br>";
		title = document.querySelector ( '.subj_episode' ).innerHTML.replace ( /^ ?(Bethellium: )? ?(.*?) ?$/, '$2' );
		if ( title != null )
			nod.innerHTML += "**" + title + "**<br>";
		nod.innerHTML += "<br>{cnav}<br>";
		comment = document.querySelector ( '.creator_note p' );
		if ( comment != null ) nod.innerHTML += "&lt;box unborder unbg center>" + comment.innerHTML.replace ( / ?$/, "" ) + "&lt;/box><br>";
		imgs = document.querySelectorAll ( "img._images" );
		for ( x = 0; x < imgs.length; x++ )
			nod.innerHTML += "{{ " + num + "-" + ( x + 1 ) + ".jpg }}<br>";
//			nod.innerHTML += "{{ " + num + ".png }}<br>";
		if ( imgs.length == 1 )
			nod.innerHTML = nod.innerHTML.replace ( "-1.", "." );
		nod.innerHTML += "{cnav}";
		break
	default:
		break
}
document.querySelector ( "body" ).appendChild ( nod );

selectblock ( nod );

// HOTKEYS
var prev = document.querySelector ( '.pg_prev' ),
	next = document.querySelector ( '.pg_next' );
if ( prev != null )
	prev.accessKey = "z";
if ( next != null )
	next.accessKey = "x";
