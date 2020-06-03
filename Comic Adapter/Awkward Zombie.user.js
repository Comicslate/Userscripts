// ==UserScript==
// @name			Comic Adapter: Awkward Zombie
// @version			2020.06.03
// @description		Extract Info for Comicslate
// @include			http*://*awkwardzombie.com*
// @icon			https://www.google.com/s2/favicons?domain=awkwardzombie.com
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

// ВЫДЕЛЕНИЕ
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

function gap ( ) {
	var titler = document.querySelector ( ".cc-newsheader" ),
		numb = document.querySelector ( "#cc-comic" ).getAttribute ( 'src' ).replace ( /.*comic(\d+).*/, "$1" ) * 1 + 0,
		num = numb.toString().padStart ( 4, "0" ),
		index = "{" + ( numb == 1 ? "index&lt;": "" ) + "cnav}",
		blarg = document.querySelector ( "#bottom-left" ),
		tagline = document.querySelector ( ".news-storyline" ),
		comm = document.querySelector ( ".cc-newsbody" ),
		texter = '';

	texter += "== AWKWARD ZOMBIE " + num + " ==<br>";
	// ТИТУЛ
	if ( titler !== null ) {
		var title = titler.innerHTML.charAt ( 0 ).toUpperCase ( ) + titler.innerHTML.slice ( 1 ).replace ( /\.$/, "" ).replace ( /Part(\d)/, "Часть $1" );
		texter += "**" + title + "**<br>";
	}

	texter += "<br>" + index + "<br>{{" + num + ".png}}<br>";

	if ( numb <= 12 ) texter += "<br>== Фотошоп ==<br><br>{{" + num + "-r.jpg}}<br>";

	// ТЕГ
	if ( tagline !== null ) {
		var tag = tagline.querySelector ( 'a' );
		texter += ( tag !== null && tag.innerHTML !== "None" ) ? '{{tag>"' + tag.innerHTML + '"}}' : "";
	}
	texter += "<br>";

	// КОММЕНТАРИИ
	if ( comm !== null ) {
		texter += comm.innerHTML // докувикификация
		.replace ( /\\\"/g, '"' )
		.replace ( /<a href="(\\&quot;)?([^"]+?)(\\&quot;)?"> *([^<]+?)<\/a>/g, "[[$2|$4]]" )
		.replace ( /<img src="(\\&quot;)?([^"]+?)(\\&quot;)?"> *([^>]+?)>/g, "{{$2}}" )
		.replace ( / ?<br>(<br>)+/g, "<br /><br />" )
		.replace ( / <br>/g, " " )
		.replace ( /<br>/g, "\\\\<br>" )
		.replace ( /<\/?(p)>/g, "" )
		.replace ( /<\/?(i|em)[^>m]*>/g, "//" )
		.replace ( /<\/?(b|strong)[^>r]*>/g, "**" )
		.replace ( /<\/?u[^>]*>/g, "__" )
		.replace ( /<center>/g, "&lt;box center unborder unbg>" )
		.replace ( /<\/center>/g, "&lt;/box>" )
		.replace ( /--/g, "–" )
		.replace ( /\.\.\./g, "…" )
		+ '<br>';
	}

	blarg.innerHTML = texter + index;

	selectblock ( blarg );
}

setTimeout ( gap, 0 );
