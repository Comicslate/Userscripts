// ==UserScript==
// @name			Comicslate AutoSaveClicker
// @version			2021.01.31
// @description		Автоклик сохранения
// @match			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/*do=index*
// @exclude			http*://*comicslate.org/*do=revisions*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSaveClicker.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSaveClicker.user.js
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

// спрятать нормальные десятники в индексах, сначала d, потом h (удалить файлы физически в тотале, генерить этим скриптом)
// document.querySelectorAll ( '.idx .li a' ).forEach ( function ( e ) { if ( e.innerHTML.match ( 'Freefall d' ) == null ) e.style.display = 'none' } )
