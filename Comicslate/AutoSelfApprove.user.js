// ==UserScript==
// @name			Comicslate AutoSelfApprove
// @version			2020.06.04
// @description		Autoapprove self edits
// @description:ru	Автоодобрение своих правок
// @include			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/*do=*
// @exclude			http*://*comicslate.org/en/sci-fi/freefall/*
// @exclude			http*://*comicslate.org/ru/sci-fi/freefall/*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

// en freefall для вычитки

var approve_link = document.querySelector ( ".approval_action a" ),
	self = 'robot_spike';

if ( approve_link != null && document.querySelectorAll ( ".pageinfo bdi" ) [ 1 ].innerHTML == self ) approve_link.click ( )
