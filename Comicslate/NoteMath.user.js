// ==UserScript==
// @name			Comicslate NoteMath
// @version			2021.05.26
// @description		Счисление координат
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=preview*
// @match			http*://*comicslate.org/*do=draft*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/NoteMath.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/NoteMath.user.js
// ==/UserScript==

var wiki_text = document . querySelector ( '#wiki__text' ),
	wtext = wiki_text . value;

if ( wtext . match ( 'cotan' ) != null && wtext . match ( 'aimg' ) == null ) {
	var cotan = wtext . split ( '{{cotan' );
	for ( var e = 1; e < cotan . length; e++ ) {
		if ( cotan [ e ] . match ( '}}\n{{<' ) == null ) {
			var parts = cotan [ e ] . split ( '\n{{<' ),
				end = parts . pop ( ),
				notes = parts [ 0 ] . split ( '\n@' ), // разделение и зачистка
				begin = notes . shift ( ),
				num = notes . length - 1;
			for ( var i = 0; i <= num; i++ ) { // создание списков
				var nparts = notes [ i ] . split ( '\n' ),
					nontext = nparts . shift ( ) . split ( ';' ),
					coords = nontext . shift ( ) . split ( ',' ),
					coord = '';
				for ( var j = 0; j <= 3; j++ ) { // сложение-вычитание
					if ( coords [ j ] . match ( /\d\+/g ) != null ) {
						coord = coords [ j ] . split ( '+' );
						coords [ j ] = coord [ 0 ] * 1 + coord [ 1 ] * 1;
					} else if ( coords [ j ] . match ( /\d\-/g ) != null ) {
						coord = coords [ j ] . split ( '-' );
						coords [ j ] = coord [ 0 ] * 1 - coord [ 1 ] * 1;
					};
				};
				notes [ i ] = coords . join ( ',' ) + ( nontext != '' ? ';' + nontext : '' ) + '\n' + nparts . join ( '\n' );
			}
			cotan [ e ] = ( begin + '\n@' + notes . join ( '\n@' ) + '\n{{<' + end ) . replace ( /~\n\n@/g, '~\n@');
		}
	}
	wiki_text . value = cotan . join ( '{{cotan' );
}
