// ==UserScript==
// @name			Comicslate NoteResizer
// @version			2022.02.02
// @description		Причёсывание наклеек под новый размер картинки
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=preview*
// @match			http*://*comicslate.org/*do=draft*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/NoteResizer.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/NoteResizer.user.js
// ==/UserScript==

var wiki_text = document . querySelector ( '#wiki__text' ),
	ren = '',
	wtext = wiki_text . value . replace ( /(\d\d\d\d)\.png/, '$1' + ren + '.png' ) . replace ( /\{\{([^\>\}\.]+)\.png\}\}/, '{{cotan>$1.png}}\n{{<cotan}}' ),
	k = 1024 / 715;
wiki_text . value = wtext;

if (
	!wtext.match ( 'StopZoom' )
	&&
	wtext.match ( 'cotan' ) != null
	&&
	wtext.match ( '}}\n{{<' ) == null
) {
	var note = wtext . split ( '\n@' );
	for ( var e = 1; e < note . length; e++ ) {
		var strings = note [ e ] . split ( '\n' ),
			parts = strings [ 0 ] . split ( ';' ),
			coords = parts [ 0 ] . split ( ',' ),
			nontext = parts [ 1 ] || '';
		for ( var i = 0; i < 4; i++ ) {
			coords [ i ] = Math . round ( coords [ i ] * k );
		}
		strings [ 0 ] = coords . join ( ',' );
		if ( nontext !== '' ) strings [ 0 ] += ';' + nontext;
		note [ e ] = strings . join ( '\n' );
	}
	wtext = note . join ( '\n@' );
	wiki_text . value = wtext + '\n{{tag>StopZoom}}';
}
