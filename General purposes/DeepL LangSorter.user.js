// ==UserScript==
// @name			DeepL LangSorter
// @version			2021.04.09
// @description		Сортировщик языков
// @include			http*://*deepl.com/*
// @icon			https://www.google.com/s2/favicons?domain=deepl.com
// @author			Rainbow-Spike
// @grant			none
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/General%20purposes/DeepL%20LangSorter.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/General%20purposes/DeepL%20LangSorter.user.js
// ==/UserScript==

function action ( ) {
	var langs = document.querySelectorAll ( 'button.SelectItem_module_defaultItemTemplate__7423e687' ),
		label = document.querySelector ( '.HeaderItem_module_item__c0031b5b' ),
		block = [ '-auto', '-en-GB', '-lv', '-lt', '-nl', '-pt-BR', '-ro', '-sk', '-sl', '-cs', '-sv', '-et' ],
		show = [ '-en', '-ru', '-de', '-fr', '-bg', '-da', '-el', '-es', '-fi', '-hu', '-it', '-ja', '-pl', '-pt', '-zh' ];
	if ( label != null ) {
		label.parentNode.style.display = 'none';
	}
	if ( langs != undefined ) {
		for ( var i = 0; i < langs.length; i++ ) {
			var dl = langs[i].getAttribute ( 'dl-test' );
			for ( var j = 0; j < block.length; j++ ) {
				if ( dl.match ( block [ j ] ) != null ) langs[i].parentNode.style.display = 'none';
			}
			for ( var k = 0; k < show.length; k++ ) {
				if ( dl.match ( show [ k ] ) != null ) langs[i].parentNode.style.order = k;
			}
		}
	}
}
setInterval ( action, 200 );
