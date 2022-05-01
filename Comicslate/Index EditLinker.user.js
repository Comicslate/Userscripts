// ==UserScript==
// @name			Comicslate Index EditLinker
// @version			2022.05.01.1
// @description		Добавление do к ссылкам в "карте сайта"
// @match			http*://*comicslate.org/*do=index*
// @match			http*://*comicslate.org/*idx=*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Index%20EditLinker.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Index%20EditLinker.user.js
// ==/UserScript==

function insertAttr ( num, action ) {
	document . querySelectorAll ( "#index__tree a:not(.idx_dir)" ) . forEach (
		function ( e ) {
			switch ( num ) {
				case 1: e . href = e . href . split ( '?' ) [ 0 ] + '?do=' + action; break;
				case 2: e . href = e . href . replace ( /\/s?..\//, '/' + action + '/' ); break;
				case 3: e . href = e . href . split ( '?' ) [ 0 ] + '?do=edit&fromlang=' + action; break;
			}
		}
	)
}

function h ( tag, props = { }, children = [ ] ) {
	const element = Object . assign ( document . createElement ( tag ), props );
	element . append ( ...children );
	return element;
}

function insertButtons ( ) {
	var indexLinkDiv = h ( 'div', {
		className: 'indexlink',
		style: 'position: fixed; bottom: 5px; right: 5px;'
	}, [
		h ( 'div', {	id: 'indexlink-top'	}, [
			h ( 'input', {	type: 'button',	value: 'lang = ',		style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 2, indexLinkLang . value )	} ),
			h ( 'input', {	type: 'text',	value: lang,			id: 'indexLinkLang',	style: 'margin: 5px; width: 20px; text-align: center;'			} ),
			h ( 'input', {	type: 'button',	value: 'fromlang = ',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 3, indexLinkFLng . value )	} ),
			h ( 'input', {	type: 'text',	value: 'en',			id: 'indexLinkFLng',	style: 'margin: 5px; width: 20px; text-align: center;'			} )
		] ),
		h ( 'div', {	id: 'indexlink-bottom'	}, [
			h ( 'input', {	type: 'button',	value: 'edit',		style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 1, 'edit' )		} ),
			h ( 'input', {	type: 'button',	value: 'preview',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 1, 'preview' )	} ),
			h ( 'input', {	type: 'button',	value: 'revisions',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 1, 'revisions' )	} ),
			h ( 'input', {	type: 'button',	value: 'backlink',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 1, 'backlink' )	} )
		] )
	] );
	document . body . appendChild ( indexLinkDiv );
}

insertButtons ( );
