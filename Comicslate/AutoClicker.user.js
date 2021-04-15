// ==UserScript==
// @name			Comicslate AutoClicker
// @version			2021.04.15
// @description		Листание комикса по таймеру
// @match			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/*do=*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoClicker.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoClicker.user.js
// ==/UserScript==

var timer = 30;

function clicker ( ) {
	document.querySelector ( '#navnext.wikilink1' ).click ( );
}

setTimeout ( clicker, timer * 1000 );
