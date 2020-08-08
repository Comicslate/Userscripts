// ==UserScript==
// @name			Comicslate BatchEdit AutoCheck
// @version			2020.08.08
// @description		Автовыбор вариантов
// @match			http*://*comicslate.org/*page=batchedit*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var apply = document.querySelector ( "#be-applyall" );

function action ( ) {
	if ( apply ) apply.click ( );
}

setTimeout ( action, 300 );
