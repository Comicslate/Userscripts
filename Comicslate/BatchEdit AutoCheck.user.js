// ==UserScript==
// @name			Comicslate BatchEdit AutoCheck
// @version			2020.06.04
// @description		Автовыбор вариантов
// @include			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/lib/exe/mediamanager.php*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var apply = document.querySelector ( "#be-applyall" );

if ( apply ) apply.click();
