// ==UserScript==
// @name			Comicslate AutoSuccessor
// @version			2020.06.04
// @description		Cutting URI after autoapproving
// @description:ru	Обрезка адреса после одобрения
// @include			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/*do=*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

if ( document.querySelector ( ".success" ) !== null && window.location.href.search ( "rev=" ) != -1 ) window.location = window.location.href.split ( "?" )[0]
