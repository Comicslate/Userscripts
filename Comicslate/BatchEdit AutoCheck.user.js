// ==UserScript==
// @name			Comicslate BatchEdit AutoCheck
// @version			2021.01.08
// @description		Автовыбор вариантов
// @match			http*://*comicslate.org/*page=batchedit*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var apply = document.querySelector ( "#be-applyall" ),
	minor = document.querySelector ( "#be-minor" );

function action ( cl ) {
	if ( cl ) cl.click ( );
}

setTimeout ( action ( minor ), 300 );
setTimeout ( action ( apply ), 300 );
