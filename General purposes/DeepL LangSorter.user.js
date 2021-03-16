// ==UserScript==
// @name			DeepL LangSorter
// @version			2021.03.17
// @description		Сортировщик языков
// @include			http*://*deepl.com/*
// @icon			https://www.google.com/s2/favicons?domain=deepl.com
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

function action ( ) {
	var langs = document.querySelectorAll ( 'div.container--baxID[dl-test*="target"] button.item--36Bw2' );
	if ( langs != undefined ) {
		for ( var i = 0; i < langs.length; i++ ) {
			if ( langs[i].querySelector ( 'div[dl-test*="-en-GB"], div[dl-test*="-lv"], div[dl-test*="-lt"], div[dl-test*="-nl"], div[dl-test*="-pt-BR"], div[dl-test*="-ro"], div[dl-test*="-sk"], div[dl-test*="-sl"], div[dl-test*="-cs"], div[dl-test*="-sv"], div[dl-test*="-et"]' ) != null ) langs[i].style.display = 'none';
			if ( langs[i].querySelector ( 'div[dl-test*="-bg"]' ) != null ) langs[i].style.order = 1;
			if ( langs[i].querySelector ( 'div[dl-test*="-da"]' ) != null ) langs[i].style.order = 2;
			if ( langs[i].querySelector ( 'div[dl-test*="-de"]' ) != null ) langs[i].style.order = 3;
			if ( langs[i].querySelector ( 'div[dl-test*="-el"]' ) != null ) langs[i].style.order = 4;
			if ( langs[i].querySelector ( 'div[dl-test*="-en"]' ) != null ) langs[i].style.order = 5;
			if ( langs[i].querySelector ( 'div[dl-test*="-es"]' ) != null ) langs[i].style.order = 6;
			if ( langs[i].querySelector ( 'div[dl-test*="-fi"]' ) != null ) langs[i].style.order = 7;
			if ( langs[i].querySelector ( 'div[dl-test*="-fr"]' ) != null ) langs[i].style.order = 8;
			if ( langs[i].querySelector ( 'div[dl-test*="-hu"]' ) != null ) langs[i].style.order = 9;
			if ( langs[i].querySelector ( 'div[dl-test*="-it"]' ) != null ) langs[i].style.order = 10;
			if ( langs[i].querySelector ( 'div[dl-test*="-ja"]' ) != null ) langs[i].style.order = 11;
			if ( langs[i].querySelector ( 'div[dl-test*="-pl"]' ) != null ) langs[i].style.order = 12;
			if ( langs[i].querySelector ( 'div[dl-test*="-pt"]' ) != null ) langs[i].style.order = 13;
			if ( langs[i].querySelector ( 'div[dl-test*="-ru"]' ) != null ) langs[i].style.order = 14;
			if ( langs[i].querySelector ( 'div[dl-test*="-zh"]' ) != null ) langs[i].style.order = 15;
		}
	}
}
setInterval ( action, 200 );
