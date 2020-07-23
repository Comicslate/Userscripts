// ==UserScript==
// @name			Comicslate Macros SaveEdit
// @version			2020.07.23
// @description		Закреп в макросах автовхода редактора после сохранения
// @match			http*://*comicslate.org/ru/macro*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var save = document.querySelector ( ".saveedit input" ),
	timer = 0.3;

function action ( ) {
	if ( !save.checked ) save.click ( );
}

setInterval ( action, timer * 1000 );
