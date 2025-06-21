// ==UserScript==
// @name			Comicslate Index EditLinker
// @version			2025.06.22.2
// @description		Расширение функционала "Индекса"
// @match			http*://*comicslate.org/*do=index*
// @match			http*://*comicslate.org/*idx=*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Index%20EditLinker.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Index%20EditLinker.user.js
// ==/UserScript==

function h ( tag, props = { }, children = [ ] ) {
	const element = Object . assign ( document . createElement ( tag ), props );
	element . append ( ...children );
	return element;
}

function InsertButtons ( ) {
	document . body . appendChild (
		h ( 'div', { id: 'iel' }, [
			h ( 'style', {
				innerHTML:	'#iel { background-color: white; border: 3px solid #1ad4df; border-radius: 13px; bottom: 5px; opacity: 0.6; padding: 5px; position: fixed; right: 25px } ' +
							'#iel div * { font-size: 18px; margin: 2px } ' +
							'#iel:hover { border-color: #eaf1f1 } ' +
							'span { text-align: right } ' +
							'#iel1 { padding-bottom: 3px } ' +
							'#iel [type="text"] { width: 30px } '
			} ),
			h ( 'div', { id: 'iel1' }, [
				h ( 'span', { innerHTML: 'do=' } ),
				h ( 'input', { type: 'button',	value: 'edit',		title: "В редактор",		onclick: ( event ) => Atr ( 1, 'edit' )			} ),
				h ( 'input', { type: 'button',	value: 'preview',	title: "В просмотр",		onclick: ( event ) => Atr ( 1, 'preview' )		} ),
				h ( 'input', { type: 'button',	value: 'revs',		title: "В список версий",	onclick: ( event ) => Atr ( 1, 'revisions' )	} ),
				h ( 'input', { type: 'button',	value: 'backlink',	title: "В список отсылок",	onclick: ( event ) => Atr ( 1, 'backlink' )		} ),
				h ( 'input', { type: 'button',	value: '-',			title: "Страница",			onclick: ( event ) => Atr ( 1, '' )				} )
			] ),
			h ( 'div', { id: 'iel2' }, [
				h ( 'input', { type: 'button',	value: 'lang=',		title: "Заменить на...",	onclick: ( event ) => Atr ( 2, iel21 . value )	} ),
				h ( 'input', { type: 'text',	value: lang,		title: "…этот язык",		id: 'iel21'										} ),
				h ( 'input', { type: 'button',	value: 'fromlang=',	title: "Перетащить на...",	onclick: ( event ) => Atr ( 3, iel22 . value )	} ),
				h ( 'input', { type: 'text',	value: 'en',		title: "…этот язык",		id: 'iel22'										} ),
				h ( 'input', { type: 'button',	value: 'indexer',	title: "Индексатор",		onclick: ( event ) => Atr ( 4, '' )				} )
			] )
		] )
	)
}

function Atr ( num, action ) {
	document . querySelectorAll ( "#index__tree a:not(.idx_dir)" ) . forEach (
		function ( e ) {
			switch ( num ) {
				case 1:
					e . href = e . href . split ( '?' ) [ 0 ] + ( action == '' ? '' : '?do=' ) + action;
					break;
				case 2:
					e . href = e . href . replace ( /\/s?..\//, '/' + action + '/' );
					e . title = e . title . replace ( /^s?..:/, action + ':' );
					break;
				case 3:
					e . href = e . href . split ( '?' ) [ 0 ] + '?do=edit&fromlang=' + action;
					break;
				case 4:
					if ( e . getAttribute ( 'wpn' ) == null ) {
						e . setAttribute ( 'wpn', e . innerHTML );
						e . innerHTML = e . href . split ( '/' ) [ e . href . split ( '/' ) . length - 1 ] . split ( '?' ) [ 0 ];
					} else {
						e . innerHTML = e . getAttribute ( 'wpn' );
						e . removeAttribute ( 'wpn' );
					};
					break;
				default: break;
			}
		}
	)
}

InsertButtons ( );
