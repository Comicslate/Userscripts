// ==UserScript==
// @name			Comicslate AutoSelfApprove
// @version			2020.09.03
// @description		Автоодобрение своих правок
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
	self = 'robot_spike';

if ( approve_link != null && document.querySelectorAll ( ".pageinfo bdi" ) [ 1 ].innerHTML == self ) approve_link.click ( )
