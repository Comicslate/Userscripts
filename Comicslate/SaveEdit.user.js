// ==UserScript==
// @name			Comicslate SaveEdit
// @version			2020.06.28
// @description		Закреп в макросах автовхода редактора после сохранения
// @include			http*://*comicslate.org/ru/macro*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var save = document.querySelector ( "#saveedit" ),
	timer = 0.3;

function action ( ) {
	if ( !save.checked ) save.click ( );
}

setInterval ( action, timer * 1000 );
