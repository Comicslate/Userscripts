// ==UserScript==
// @name			Comicslate NoteResizer
// @version			2020.12.25
// @description		Причёсывание наклеек под новый размер картинки
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=draft*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var wiki_text = document.querySelector ( '#wiki__text' ),
	wtext = wiki_text.textContent.replace ( /(\d\d\d\d)\.(jpg|png)/, '$1_1.png' ).replace ( /\{\{([^\>\}\.]+)\.png\}\}/, '{{cotan>$1.png}}\n{{<cotan}}' ),
	k = 1024 / 620;
wiki_text.value = wtext;

if (
	( !wtext.match ( 'StopZoom' ) )
	&&
	( wtext.match ( 'cotan' ) != null )
	&&
	( wtext.match ( '}}\n{{<' ) == null )
) {
	var note = wtext.split ( '\n@' );
	for ( var e = 1; e < note.length; e++ ) {
		var strings = note [ e ].split ( '\n' ),
			parts = strings [ 0 ].split ( ';' ),
			coords = parts [ 0 ].split ( ',' ),
			nontext = parts [ 1 ] || '';
		for ( var i = 0; i < 4; i++ ) {
			coords [ i ] = Math.round ( coords [ i ] * k );
		}
		strings [ 0 ] = coords.join ( ',' );
		if ( nontext !== '' ) strings [ 0 ] += ';' + nontext;
		note [ e ] = strings.join ( '\n' );
	}
	wtext = note.join ( '\n@' );
	wiki_text.value = wtext.replace ( '<cotan}}', '<cotan}}\n{{tag>StopZoom}}' );
}
