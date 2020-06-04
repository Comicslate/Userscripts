// ==UserScript==
// @name			Comicslate AutoClicker
// @version			2020.06.04
// @description		Comic timer clicker
// @description:ru	Листание комикса по таймеру
// @include			http*://*comicslate.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var timer = 4;

function clicker ( ) {
	document.querySelector ( '#navnext' ).click ( );
}

setTimeout ( clicker, timer * 1000 );
