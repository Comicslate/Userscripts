// ==UserScript==
// @name			Comicslate AutoClicker
// @version			2021.05.26
// @description		Листание комикса по таймеру
// @match			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/*do=*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoClicker.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoClicker.user.js
// ==/UserScript==

var timer = 30;

function clicker ( ) {
	document . querySelector ( '.wikilink1.nnext' ) . click ( );
}

setTimeout ( clicker, timer * 1000 );
