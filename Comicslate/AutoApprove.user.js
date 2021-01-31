// ==UserScript==
// @name			Comicslate AutoApprove
// @version			2021.01.31
// @description		Автоодобрение правок
// @match			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/*do=*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSelfApprove.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSelfApprove.user.js
// ==/UserScript==

var approve_link = document.querySelector ( ".approval_action a" ),
	self = 'robot_spike',
	lever = 1;

if ( lever ) {
	if (
		approve_link != null
		&&
		document.querySelectorAll ( ".pageinfo bdi" ) [ 1 ].innerHTML == self
	) approve_link.click ( )
} else {
	approve_link.click ( )
}
