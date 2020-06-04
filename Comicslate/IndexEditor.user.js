// ==UserScript==
// @name			Comicslate IndexEditor
// @version			2020.06.04
// @description		Add "?do=edit" to links in the "sitemap"
// @description:ru	Добавление "?do=edit" к ссылкам в "карте сайта"
// @include			http*://*comicslate.org/*do=index
// @include			http*://*comicslate.org/*idx=*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var lang = 'en',
	fromlang = '',
	href = 0, // для translate-раздела, замена локалей на капслоки
	band = 0; // замена лент, 1 - d на h, 2 - наоборот

document.querySelectorAll ( "#index__tree a:not(.idx_dir)" ).forEach (
	function ( e ) {

		e.href += "?do=edit" // основной функционал - ссылка на редактор

		if ( lang !== '' ) e.href = e.href.replace ( /\/..\//, '/' + lang + '/' ) // если заполнен lang - подменить язык

		if ( fromlang !== '' ) e.href += "&fromlang=" + fromlang // если заполнен fromlang - добавить источник разметки

		if ( href ) { // для translate-раздела, замена локалей на капслоки
			var href_split = e.href.split ( '/' ),
				href_part = href_split[href_split.length - 1].split ( '-' );
			if ( href_part[2] == 'local' ) e.innerHTML += ' (' + href_part[0].toUpperCase ( ) + ')'
		}

		// замена лент
		if ( band == 1 ) e.href = e.href.replace ( /\/d0/, '/h0' )
		if ( band == 2 ) e.href = e.href.replace ( /\/h0/, '/d0' )
	}
)
