// ==UserScript==
// @name			Comic Adapter: Sandra & Woo
// @version			2021.05.19
// @description		Extract Info for Comicslate
// @include			http*://*sandraandwoo.com*
// @icon			https://www.google.com/s2/favicons?domain=sandraandwoo.com
// @author			Rainbow-Spike
// @grant			GM_setClipboard
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/Sandra%20%26%20Woo.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/Sandra%20%26%20Woo.user.js
// ==/UserScript==

var nav = document . querySelector ( ".nav" ),
	titler = document . querySelector ( ".post-comic h2" ),
	entry_p = document . querySelectorAll ( ".entry > p" ),
	entry_li = document . querySelectorAll ( ".entry > li" ),
	trans = document . querySelector ( ".transcript" ),
		trans_li = trans . querySelectorAll ( "li" ),
	tag_div = document . querySelector ( ".tags" ),
		tag_a = tag_div . querySelectorAll ( "a" ),
	texter = '';

nav . style . cssText += 'position: absolute; top: 200px;';

// ТИТУЛ
texter += titler . innerHTML
	. replace ( /\[?(\d+)\]? (.*)/, "== Sandra and Woo $1 ==\n**$2**\n\n{cnav}\n{{$1.png}}\n" )
	. replace ( /^\[(\d+)\]$/, "== Sandra and Woo $1 ==\n\n{cnav}\n{{$1.png}}\n" );

// ПАРАГРАФЫ ПРИМЕЧАНИЙ
if ( entry_p . length !== undefined ) {
	for ( var i = 0; i < entry_p . length; i++ ) {
		texter += "\n" + entry_p [ i ] . innerHTML
			. replace ( /<a [^>]*href *= *"([^"]+)"[^>]*>([^<]+)<\/a>/g, "[[$1|$2]]" )
			. replace ( /\[\[https?:\/\/([^.]+).wikipedia.[^\/]+\/wiki\/([^\|\]]+)/g, "[[$1w>$2" )
			. replace ( /w>([^_\|\]]+)_([^\|\]]+)/g, "w>$1 $2" )
			. replace ( /<em>([^<]+)<\/em>/g, "//$1//" )
			. replace ( /<strong>([^<]+)<\/strong>/g, "**$1**" ) + "\\\\\n";
	}
}

// СПИСКИ ПРИМЕЧАНИЙ
if ( entry_li . length !== undefined ) {
	for ( var j = 0; j < entry_li . length; j++ ) {
		texter += "  * " + entry_li [ j ] . innerHTML
			. replace ( /<a [^"]+ href="([^"]+)">([^<]+)<\/a>/g, "[[$1|$2]]" )
			. replace ( /<em>([^<]+)<\/em>/g, "//$1//" )
			. replace ( /<strong>([^<]+)<\/strong>/g, "**$1**" ) + "\n";
	}
}

// ТРАНСКРИПТ
if ( trans !== null ) {
	texter += "<!--\n";
	if ( trans_li . length !== undefined ) {
		for ( var k = 0; k < trans_li . length; k++ ) {
			texter += "  * " + trans_li[k].innerHTML
				. replace ( /<strong>([^<]+)<\/strong>/g, "**$1**" ) + "\n";
		}
	}
	texter += "-->";
}

// ТЕГИ
if ( tag_div !== null ) {
	for ( var l = 0; l < tag_a . length; l++ ) {
 		tag_a [ l ] . innerHTML = tag_a [ l ] . innerHTML . replace ( / /g, "_" );
	}
	texter += tag_div . innerHTML
		. replace ( /\t+/, "" )
		. replace ( /, /g, " " )
		. replace ( /└ Tags: (.*) \s+/, "{{tag>$1}}" )
		. replace ( /<a [^>]*href *= *"[^"]+"[^>]*>([^<]+)<\/a>/g, "$1" );
}

texter = texter
	. replace ( "\\\\\n  *", "\n  *" );

GM_setClipboard ( texter, "text" );

document . querySelector ( '#comic a' ) . href = document . querySelector ( '#comic a img' ) . src;

// ХОТКЕИ
var prev = document . querySelector ( '.nav-previous > a' ),
	next = document . querySelector ( '.nav-next > a' );
if ( prev != null ) prev . accessKey = "z";
if ( next != null ) next . accessKey = "x";
