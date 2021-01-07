// ==UserScript==
// @name			Comic Adapter: Sandra & Woo
// @version			2021.01.07
// @description		Extract Info for Comicslate
// @include			http*://*sandraandwoo.com*
// @icon			https://www.google.com/s2/favicons?domain=sandraandwoo.com
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var nav = document.querySelector ( ".nav" ),
	titler = document.querySelector ( ".post-comic h2" ),
	entry = document.querySelector ( ".entry" ),
	entry_p = document.querySelectorAll ( ".entry > p" ),
	entry_li = document.querySelectorAll ( ".entry > li" ),
	trans = document.querySelector ( ".transcript" ),
	trans_li = document.querySelectorAll ( ".transcript li" ),
	tag_div = document.querySelector ( ".tags" ),
		tag_a = tag_div.querySelectorAll ( "a" ),
	texter = '';

nav.style.cssText += 'position: absolute; top: 200px;';

// ВЫДЕЛЕНИЕ
function selectblock ( name ) {
	var rng = document.createRange ();
	rng.selectNode ( name );
	var sel = window.getSelection ();
	sel.removeAllRanges ();
	sel.addRange ( rng );
}

// ТИТУЛ
texter += titler.innerHTML
	.replace ( /\[?(\d+)\]? (.*)/, "== Sandra and Woo $1 ==<br>**$2**<br><br>{cnav}<br>{{$1.png}}<br>" )
	.replace ( /^\[(\d+)\]$/, "== Sandra and Woo $1 ==<br><br>{cnav}<br>{{$1.png}}<br>" );
titler.innerHTML = titler.innerHTML.replace ( /\[(\d+)\].*/, "$1" );

// ПАРАГРАФЫ ПРИМЕЧАНИЙ
if ( entry_p.length !== undefined ) {
	for ( var i = 0; i < entry_p.length; i++ ) {
		texter += "<br>" + entry_p[i].innerHTML
			.replace ( /<a [^>]*href *= *"([^"]+)"[^>]*>([^<]+)<\/a>/g, "[[$1|$2]]" )
			.replace ( /\[\[https?:\/\/([^.]+).wikipedia.[^\/]+\/wiki\/([^\|\]]+)/g, "[[$1w>$2" )
			.replace ( /w>([^_\|\]]+)_([^\|\]]+)/g, "w>$1 $2" )
			.replace ( /<em>([^<]+)<\/em>/g, "//$1//" )
			.replace ( /<strong>([^<]+)<\/strong>/g, "**$1**" ) + "\\\\<br>";
	}
}

// СПИСКИ ПРИМЕЧАНИЙ
if ( entry_li.length !== undefined ) {
	for ( var j = 0; j < entry_li.length; j++ ) {
		texter += "&nbsp;&nbsp;* "+entry_li[j].innerHTML
			.replace ( /<a [^"]+ href="([^"]+)">([^<]+)<\/a>/g, "[[$1|$2]]" )
			.replace ( /<em>([^<]+)<\/em>/g, "//$1//" )
			.replace ( /<strong>([^<]+)<\/strong>/g, "**$1**" ) + "<br>";
	}
}

// ТРАНСКРИПТ
if ( trans !== null ) {
	texter += "&lt;!--<br>";
	if ( trans_li.length !== undefined ) {
		for ( var k = 0; k < trans_li.length; k++ ) {
			texter += "&nbsp;&nbsp;* " + trans_li[k].innerHTML
				.replace ( /<strong>([^<]+)<\/strong>/g, "**$1**" ) + "<br>";
		}
	}
	texter += "--&gt;<br>";
}

// ТЕГИ
if ( tag_div !== null ) {
	for ( var l = 0; l < tag_a.length; l++ ) {
 		tag_a[l].innerHTML = tag_a[l].innerHTML.replace ( / /g, "_" );
	}
	texter += tag_div.innerHTML
	.replace ( /, /g, " " )
	.replace ( /└ Tags: (.*) \s+/, "{{tag>$1}}<br>" );
	tag_div.parentNode.removeChild ( tag_div );
}

texter += "{cnav}";
texter = texter.replace ( "\\\\<br>&nbsp;&nbsp;*", "<br>&nbsp;&nbsp;*" );
entry.innerHTML = texter;

selectblock ( entry );

document.querySelector('#comic a').href = document.querySelector('#comic a img').src;

// ХОТКЕИ
var prev = document.querySelector ( '.nav-previous > a' ),
	next = document.querySelector ( '.nav-next > a' );
if ( prev != null ) prev.accessKey = "z";
if ( next != null ) next.accessKey = "x";
