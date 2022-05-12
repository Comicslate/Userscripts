// ==UserScript==
// @name			Comicslate AutoSuccessor
// @version			2021.05.26
// @description		Обрезка адреса после одобрения
// @match			http*://*comicslate.org/*rev=*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSuccessor.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSuccessor.user.js
// ==/UserScript==

if ( document . querySelector ( ".success" ) !== null ) window . location = window . location . href . split ( "?" ) [ 0 ]
