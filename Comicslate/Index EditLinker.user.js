// ==UserScript==
// @name			Comicslate Index EditLinker
// @version			2022.05.01
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

/*var href = 0, // для translate-раздела, замена локалей на капслоки
			if ( href ) {
				var href_split = e . href . split ( '/' ),
					href_part = href_split [ href_split . length - 1 ] . split ( '-' );
				if ( href_part [ 2 ] == 'local' ) e . innerHTML += ' (' + href_part [ 0 ] . toUpperCase ( ) + ')'
			};*/

function insertAttr ( action ) {
	document . querySelectorAll ( "#index__tree a:not(.idx_dir)" ) . forEach (
		function ( e ) {
			e . href = e . href . split ( '?' ) [ 0 ] + '?do=' + action;
		}
	)
}

function insertLang ( ill1 ) {
	document . querySelectorAll ( "#index__tree a:not(.idx_dir)" ) . forEach (
		function ( e ) {
			e . href = e . href . replace ( /\/s?..\//, '/' + ill1 + '/' );
		}
	)
}

function insertFromLang ( ilf1 ) {
	document . querySelectorAll ( "#index__tree a:not(.idx_dir)" ) . forEach (
		function ( e ) {
			e . href = e . href . split ( '?' ) [ 0 ] + '?do=edit&fromlang=' + ilf1;
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
		h ( 'div', {
			id: 'indexlink-top'
		}, [
			h ( 'input', {
				type: 'button',
				value: 'lang = ',
				style: 'margin: 5px;',
				onclick: ( event ) => insertLang ( indexLinkLang . value )
			} ),
			h ( 'input', {
				type: 'text',
				value: lang,
				id: 'indexLinkLang',
				style: 'margin: 5px; width: 20px; text-align: center;',
			} ),
			h ( 'input', {
				type: 'button',
				value: 'fromlang = ',
				style: 'margin: 5px;',
				onclick: ( event ) => insertFromLang ( indexLinkFLng . value )
			} ),
			h ( 'input', {
				type: 'text',
				value: 'en',
				id: 'indexLinkFLng',
				style: 'margin: 5px; width: 20px; text-align: center;',
			} )
		] ),
		h ( 'div', {
			className: 'indexlink-bottom'
		}, [
			h ( 'input', {
				type: 'button',
				value: 'edit',
				style: 'margin: 5px;',
				onclick: ( event ) => insertAttr ( 'edit' )
			} ),
			h ( 'input', {
				type: 'button',
				value: 'preview',
				style: 'margin: 5px;',
				onclick: ( event ) => insertAttr ( 'preview' )
			} ),
			h ( 'input', {
				type: 'button',
				value: 'revisions',
				style: 'margin: 5px;',
				onclick: ( event ) => insertAttr ( 'revisions' )
			} ),
			h ( 'input', {
				type: 'button',
				value: 'backlink',
				style: 'margin: 5px;',
				onclick: ( event ) => insertAttr ( 'backlink' )
			} )
		] )
	] );
	document . body . appendChild ( indexLinkDiv );
}

insertButtons ( );
