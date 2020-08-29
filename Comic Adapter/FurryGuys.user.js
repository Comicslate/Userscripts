// ==UserScript==
// @name			Comic Adapter: FurryGuys
// @version			2020.08.30
// @description		Extract Info for Comicslate
// @include			http*://*acomics.ru/~FurryGuys/*
// @icon			https://www.google.com/s2/favicons?domain=acomics.ru
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/FurryGuys.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/FurryGuys.user.js
// ==/UserScript==

var number = window.location.toString ( ).split ( '/' ).pop ( ) || ( document.querySelector ( ".issueNumber" ).innerHTML.split ( '/' )[ 0 ] * 1 || '' ),
	pic = document.querySelector ( "#mainImage" ) || '',
		pictitle = pic.getAttribute ( "title" ) || '',
		picsrc = pic.getAttribute ( "src" ).split ( '.' ) [ 1 ] || 'png',
		title = pic.getAttribute ( "alt" ) || ( document.querySelector ( ".issueName" ).innerHTML || '' ),
	comm = document.querySelector ( ".description" ) || '',
	entry = document.createElement ( 'div' ),
	place = document.querySelector ( "#content" ) || '';

// ВЫДЕЛЕНИЕ
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

comm = ( comm !== '' )
	? comm.innerHTML
		.replace ( /<p[^>]*>\s*(<br>)*\s*(.+)\s*(<br>)*\s*<\/p>/g, "$2" )
		.replace ( /<.?span[^>]*>/g, "" )
		.replace ( / style="[^"]*"/g, "" )
		.replace ( /&nbsp;/g, " " )
		.replace ( /\*(.)/g, "* $1" )
		.replace ( /\s*(<br>)*\s*$/g, "" )
		.replace ( /\s*(<br>)*\s*У нас есть.+Аск<\/a>\s*\.?\s*(<br>)*\s*/g, "" )
		.replace ( /\s*(<br>)*\s*У нас есть.+Вики-фур<\/a>\s*\.?\s*(<br>)*\s*/g, "" )
		.replace ( /\s*(<br>)*\s*(<strong[^>]*>)?\s*(<br>)*\s*Спасибо, что голосуете за комикс!\s*(<br>)*\s*(<\/strong>)?\s*(<br>)*\s*/g, "" )
		.replace ( /\s*(<br>)*\s*(<strong[^>]*>)?\s*(<br>)*\s*В голосовалке[^<]+\s*(<br>)*\s*(<\/strong>)?\s*(<br>)*\s*/g, "" )
		.replace ( /<br>/g, "\\\\\n<br />" )
		.replace ( /\\\\\n<br \/>\\\\\n<br \/>/g, "\n<br \/>\n<br \/>" )
		.replace ( / [-|—] /, " – " )
		.replace ( /<a[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g, "[[$1|$2]]" )
		.replace ( /<img[^>]*title="([^"]+)"[^>]*src="[^"]+emoticons[^"]+"[^>]*>/g, "$1" )
		.replace ( /<em[^>]*>([^<]+)<\/em>/g, "//$1//" )
		.replace ( /<strong[^>]*>([^<]+)<\/strong>/g, "**$1**" )
	: '';

entry.style = "background: #e7f3ee; border: #c7d3ce outset 3px; border-radius: 10px; margin: 2px; padding: 2px;";

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
		+ '<br>'
		: ''
	)
	+ '{cnav}';

place.parentNode.insertBefore ( entry, place );

selectblock ( entry );
