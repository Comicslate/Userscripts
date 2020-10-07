// ==UserScript==
// @name			Comicslate AutoSaveClicker
// @version			2020.10.08
// @description		Автоклик сохранения
// @match			http*://*comicslate.org/*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var lever = 1, // генератор страниц
	sv = document.querySelector ( "#edbtn__save" ),
	timer = 2;

sv
	? sv.click ( )
	: (
		lever
		? setTimeout ( function ( ) { window.close ( ) }, timer * 1000 ) // 1 + Comicslate IndexEditor
		: '' // 0 + Comicslate NaviClicker
	)

// при отсутствии реакции закрытия в фоксе - about:config -> dom.allow_scripts_to_close_windows -> true
