// ==UserScript==
// @name			Comicslate AutoSuccessor
// @version			2021.01.31
// @description		Обрезка адреса после одобрения
// @match			http*://*comicslate.org/*rev=*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

if ( document.querySelector ( ".success" ) !== null ) window.location = window.location.href.split ( "?" ) [ 0 ]
