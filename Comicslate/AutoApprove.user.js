// ==UserScript==
// @name			Comicslate AutoApprove
// @version			2025.02.19
// @description		Автоодобрение правок
// @match			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/*do=*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoApprove.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoApprove.user.js
// ==/UserScript==

var approve_link = document . querySelector ( ".approval_action a" ),
	self = "Rainbow Spike",
	fr = "Arkane",
	lever = 1; // 0 - одобрять всё, 1 - только себя и Аркейна

if ( approve_link != null ) {
	( lever )
	? (
		(
			document . querySelectorAll ( ".pageinfo bdi" ) [ 1 ] . innerHTML == self
			||
			document . querySelectorAll ( ".lang-fr .pageinfo bdi" ) [ 1 ] . innerHTML == fr
		)
		? approve_link . click ( )
		: ''
	)
	: approve_link . click ( )
}
