// ==UserScript==
// @name			Comicslate NoteResizer
// @version			2022.05.06.beta
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

function calculate ( k ) {
	var wiki_text = document . querySelector ( '#wiki__text' ),
		ren = '',
		wtext = wiki_text . value . replace ( /(\d\d\d\d)\.png/, '$1' + ren + '.png' ) . replace ( /\{\{([^\>\}\.]+)\.png\}\}/, '{{cotan>$1.png}}\n{{<cotan}}' );
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
}

function h ( tag, props = { }, children = [ ] ) {
	const element = Object . assign ( document . createElement ( tag ), props );
	element . append ( ...children );
	return element;
}

function insertButtons ( ) {
	var resizeDiv = h ( 'div', {
		className: 'resize_link',
		style: 'position: fixed; bottom: 5px; right: 5px;'
	}, [
		h ( 'div', {	id: 'publishlink-bottom'	}, [
			h ( 'span', {					innerHTML: 'Start width, px:',	style: 'margin: 5px;' } ),
			h ( 'input', {	type: 'text',	value: 768,						style: 'margin: 5px; width: 20px; text-align: center;',	id: 'resize_width_0' } ),
			h ( 'span', {					innerHTML: 'Final width, px:',	style: 'margin: 5px;' } ),
			h ( 'input', {	type: 'text',	value: 982,						style: 'margin: 5px; width: 20px; text-align: center;',	id: 'resize_width_1' } ),
			h ( 'input', {	type: 'button',	value: 'Submit',				style: 'margin: 5px;',	onclick: ( event ) => calculate ( ( resize_width_1 . value * 1 ) / ( resize_width_0 . value * 1 ) ) } ),
		] )
	] );
	document . body . appendChild ( resizeDiv );
}

insertButtons ( );
