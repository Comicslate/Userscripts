// ==UserScript==
// @name			Comic Adapter: FurryGuys
// @version			2021.06.01.1
// @description		Extract Info for Comicslate
// @include			http*://*acomics.ru/~FurryGuys/*
// @icon			https://www.google.com/s2/favicons?domain=acomics.ru
// @author			Rainbow-Spike
// @grant			GM_setClipboard
// @grant			GM_registerMenuCommand
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/FurryGuys.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/FurryGuys.user.js
// ==/UserScript==

function action ( ) {
	var number =
		window . location . toString ( ) . split ( '/' ) . pop ( )
		||
		document . querySelector ( ".issueNumber" ) . innerHTML . split ( '/' ) [ 0 ] * 1
		||
		'',
		pic = document . querySelector ( "#mainImage" ) || '',
			pictitle = pic . getAttribute ( "title" ) || '',
			picsrc = pic . getAttribute ( "src" ) . split ( '.' ) [ 1 ] || 'png',
			title =
				pic . getAttribute ( "alt" )
				||
				document . querySelector ( ".issueName" ) . innerHTML
				||
				'',
		comm = document . querySelector ( ".description" ) || '',
		texter = '';

	texter = '== Furry Guys '
		+ number
		+ ' ==\n**'
		+ (
			( title . charAt ( 2 ) == '-' )
			? 'Выпуск '
			: ''
		)
		+ title
		+ '**\n\n{cnav}\n{{cotan>'
		+ number
		+ '.'
		+ picsrc
		+ '}}\n{{<cotan}}'
		+ (
			( pictitle !== '' )
			? '\n//' + pictitle + '//'
			: ''
		)
		+ (
			( comm !== '' )
			? '\n' + comm . innerHTML
				. replace ( /<p[^>]*>\s*(<br>)*\s*(.+)\s*(<br>)*\s*<\/p>/g, "$2" )
				. replace ( /(<.?span[^>]*>| style="[^"]*")/g, "" )
				. replace ( /&nbsp;/g, " " )
				. replace ( /\*(.)/g, "* $1" )
				. replace ( /\s*(<br>)*\s*$/g, "" )
				. replace ( /\s*(<br>)*\s*(У нас есть.+(Аск|Вики-фур|, а также страничка с эксклюзивными.+Бусти)<\/a>\s*\.?|(<strong[^>]*>)?\s*(<br>)*\s*(Спасибо, что голосуете за комикс!|В голосовалке[^<]+)\s*(<br>)*\s*(<\/strong>)?)\s*(<br>)*\s*/g, "" )
				. replace ( /<br>/g, "\\\\\n<br />" )
				. replace ( /\\\\\n<br \/>\\\\\n<br \/>/g, "\n<br \/>\n<br \/>" )
				. replace ( / [-|—] /, " – " )
				. replace ( /<a[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g, "[[$1|$2]]" )
				. replace ( /<img[^>]*title="([^"]+)"[^>]*src="[^"]+emoticons[^"]+"[^>]*>/g, "$1" )
				. replace ( /<em[^>]*>([^<]+)<\/em>/g, "//$1//" )
				. replace ( /<strong[^>]*>([^<]+)<\/strong>/g, "**$1**" )
			: ''
		);
	texter = texter . replace ( /\n$/, '' );
	GM_setClipboard ( texter, "text" );
}
GM_registerMenuCommand ( "Start!", action );
