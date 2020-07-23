// ==UserScript==
// @name			Comicslate AutoClicker
// @version			2020.07.23
// @description		Листание комикса по таймеру
// @match			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/*do=*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var timer = 30;

function clicker ( ) {
	document.querySelector ( '#navnext' ).click ( );
}

setTimeout ( clicker, timer * 1000 );
