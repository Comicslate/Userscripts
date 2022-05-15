// ==UserScript==
// @name			Comicslate Index EditLinker
// @version			2022.05.15
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
				case 4:
					if ( e . getAttribute ( 'wikititle' ) == null ) {
						e . setAttribute ( 'wikititle', e . innerHTML );
						e . innerHTML = e . href . split ( '/' ) [ e . href . split ( '/' ) . length - 1 ] . split ( '?' ) [ 0 ];
					} else {
						e . innerHTML = e . getAttribute ( 'wikititle' );
						e . removeAttribute ( 'wikititle' );
					};
					break;
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
	document . body . appendChild (
		h ( 'div', {
			className: 'indexlink',
			style: 'background-color: white; position: fixed; bottom: 5px; right: 5px;'
		}, [
			h ( 'div', {	id: 'indexlink-top'	}, [
				h ( 'input', { type: 'button',	value: 'lang = ',		style: 'margin:4px;',	onclick: ( event ) => insertAttr ( 2, indexLinkLang . value )	} ),
				h ( 'input', { type: 'text',	value: lang,			id: 'indexLinkLang',	style: 'margin: 4px; width: 20px; text-align: center;'			} ),
				h ( 'input', { type: 'button',	value: 'fromlang = ',	style: 'margin: 4px;',	onclick: ( event ) => insertAttr ( 3, indexLinkFLng . value )	} ),
				h ( 'input', { type: 'text',	value: 'en',			id: 'indexLinkFLng',	style: 'margin: 4px; width: 20px; text-align: center;'			} ),
				h ( 'input', { type: 'button',	value: 'iH',			style: 'margin: 4px;',	onclick: ( event ) => insertAttr ( 4, '' )						} )
			] ),
			h ( 'div', {	id: 'indexlink-bottom'	}, [
				h ( 'input', { type: 'button',	value: 'edit',		style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 1, 'edit' )		} ),
				h ( 'input', { type: 'button',	value: 'preview',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 1, 'preview' )	} ),
				h ( 'input', { type: 'button',	value: 'revisions',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 1, 'revisions' )	} ),
				h ( 'input', { type: 'button',	value: 'backlink',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 1, 'backlink' )	} )
			] )
		] )
	);
}

insertButtons ( );
