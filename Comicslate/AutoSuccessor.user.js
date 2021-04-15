// ==UserScript==
// @name			Comicslate AutoSuccessor
// @version			2021.04.15
// @description		Обрезка адреса после одобрения
// @match			http*://*comicslate.org/*rev=*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSuccessor.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSuccessor.user.js
// ==/UserScript==

if ( document.querySelector ( ".success" ) !== null ) window.location = window.location.href.split ( "?" ) [ 0 ]
