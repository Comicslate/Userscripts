// ==UserScript==
// @name			Comicslate Publish Links and Dates
// @version			2022.05.06
// @description		Добавление do к ссылкам в "паблише"
// @match			https://comicslate.org/*/publish
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			GM_addStyle
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Publish%20Publish%20Links%20and%20Dates.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Publish%20Publish%20Links%20and%20Dates.user.js
// ==/UserScript==

GM_addStyle ( '.publishlink div * { margin: 5px; background-image: linear-gradient(to bottom,#7EF,#5CC); border-radius: 3px; border: 1px solid #888; }' );
GM_addStyle ( '.publishlink div *:hover { background-image: linear-gradient(to bottom,#7EF,#3AB); }' );

function insertAttr ( num, action ) {
	switch ( num ) {
		case 1:
			var trs = document . querySelectorAll ( 'tr.apr_table' ), times = [ ], trs_new = [ ];
			for ( var i = 0; i < trs . length; i++ ) {
				times . push ( [ i, Date . parse ( trs [ i ] . querySelector ( '.apr_upd a' ) . innerHTML . replace ( '&nbsp;', 'T' ) . replaceAll ( '/', '-' ) ) ] );
			}
			times . sort (
				( a, b ) => action
				? ( a [ 1 ] - b [ 1 ] ) // lever 1 ascending
				: ( b [ 1 ] - a [ 1 ] ) // lever 0 descending
			);
			for ( i = 0; i < trs . length; i++ ) {
				trs_new [ i ] = trs [ times [ i ] [ 0 ] ];
			}
			document . querySelector ( 'table.apr_table' ) . tBodies [ 0 ] . append ( ...trs_new );
			document . querySelectorAll ( '.apr_ns' ) . forEach (
				function ( e ) {
					e . hidden = true
				}
			)
			break;
		case 2:
			document . querySelectorAll ( ".apr_table .apr_page a" ) . forEach ( /* #publish + .level1 */
				function ( e ) {
					e . href = e . href . split ( '?' ) [ 0 ] + '?do=' + action;
				}
			)
			break;
	}
}

function h ( tag, props = { }, children = [ ] ) {
	const element = Object . assign ( document . createElement ( tag ), props );
	element . append ( ...children );
	return element;
}

function insertButtons ( ) {
	var publishLinkDiv = h ( 'div', {
		className: 'publishlink',
		style: 'position: fixed; bottom: 5px; right: 5px;'
	}, [
		h ( 'div', {	id: 'publishlink-top'	}, [
			h ( 'input', {	type: 'button',	value: 'sort dates ▽',		style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 1, 0 ) } ),
			h ( 'input', {	type: 'button',	value: 'sort dates △',		style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 1, 1 ) } )
		] ),
		h ( 'div', {	id: 'publishlink-bottom'	}, [
			h ( 'input', {	type: 'button',	value: 'edit',		style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 2, 'edit' )		} ),
			h ( 'input', {	type: 'button',	value: 'preview',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 2, 'preview' )	} ),
			h ( 'input', {	type: 'button',	value: 'revisions',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 2, 'revisions' )	} ),
			h ( 'input', {	type: 'button',	value: 'backlink',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 2, 'backlink' )	} )
		] )
	] );
	document . body . appendChild ( publishLinkDiv );
}

insertButtons ( );
