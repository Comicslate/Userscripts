// ==UserScript==
// @name			Comic Adapter: FurryGuys
// @version			2020.08.12
// @description		Extract Info for Comicslate
// @include			http*://*acomics.ru/~FurryGuys/*
// @icon			https://www.google.com/s2/favicons?domain=acomics.ru
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var number = document.querySelector ( ".issueNumber" ).innerHTML.split ( '/' )[ 0 ] * 1 || ( window.location.toString ( ).split ( '/' ).pop ( ) || '' ),
	pic = document.querySelector ( "#mainImage" ) || '',
		pictitle = pic.getAttribute ( "title" ) || '',
		picsrc = pic.getAttribute ( "src" ).split ( '.' ) [ 1 ] || 'png',
	title = document.querySelector ( ".issueName" ).innerHTML || ( pic.getAttribute ( "alt" ) || '' ),
	comm = document.querySelector ( ".description" ).innerHTML || '',
	entry = document.querySelector ( "nav.serial" ) || ( document.querySelector ( "nav" ) || '' );

// ВЫДЕЛЕНИЕ
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

entry.style.cssText += "height: auto !important;";

entry.innerHTML = '== Furry Guys '
	+ number
	+ ' ==<br>**'
	+ (
		( title.charAt ( 2 ) == '-' )
		? 'Выпуск '
		: ''
	)
	+ title
	+ '**<br><br>{cnav}<br>{{cotan>'
	+ number
	+ '.'
	+ picsrc
	+ '}}<br>{{&lt;cotan}}<br>'
	+ (
		( pictitle !== '' )
		? '//'
			+ pictitle
			+ '//<br>'
			+ (
				( comm !== '' )
				? '<br>'
				: ''
			)
		: ''
	)
	+ (
		( comm !== '' )
		? comm
			.replace ( /<p>\s*(.+)\s*<\/p>/g, "$1" )
			.replace ( /<.?span[^>]*>/g, "" )
			.replace ( / style="[^"]*"/g, "" )
			.replace ( /&nbsp;/g, " ")
//			.trim
			.replace ( /<br> ?У нас есть.+Вики-фур<\/a> ?(<br>)*/g, "" )
			.replace ( /<a[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g, "[[$1|$2]]" )
			.replace ( /<img[^>]*title="([^"]+)"[^>]*src="[^"]+emoticons[^"]+"[^>]*>/g, "$1" )
			.replace ( /<em[^>]*>([^<]+)<\/em>/g, "//$1//" )
			.replace ( /<strong[^>]*>([^<]+)<\/strong>/g, "**$1**" )
			+ "<br>"
		: ''
	)
	+ '{cnav}';

selectblock ( entry );
