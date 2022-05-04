// ==UserScript==
// @name			Comicslate Publish EditLinker
// @version			2022.05.04
// @description		Добавление do к ссылкам в "паблише"
// @match			https://comicslate.org/*/publish
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Publish%20EditLinker.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Publish%20EditLinker.user.js
// ==/UserScript==

function insertAttr ( action ) {
	/*document . querySelectorAll ( "#publish + .level1 .apr_table .apr_page a" ) . forEach (*/
	document . querySelectorAll ( ".apr_table .apr_page a" ) . forEach (
		function ( e ) {
			e . href = e . href . split ( '?' ) [ 0 ] + '?do=' + action;
		}
	)
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
		h ( 'input', {	type: 'button',	value: 'edit',		style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 'edit' )			} ),
		h ( 'input', {	type: 'button',	value: 'preview',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 'preview' )		} ),
		h ( 'input', {	type: 'button',	value: 'revisions',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 'revisions' )	} ),
		h ( 'input', {	type: 'button',	value: 'backlink',	style: 'margin: 5px;',	onclick: ( event ) => insertAttr ( 'backlink' )		} )
	] );
	document . body . appendChild ( publishLinkDiv );
}

insertButtons ( );
