// ==UserScript==
// @name			Comicslate AutoSaveClicker
// @version			2025.06.22.2
// @description		Автоклик сохранения + удалялка
// @match			http*://*comicslate.org/*
// @exclude			/^https?://comicslate\.org\/.+publish
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSaveClicker.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSaveClicker.user.js
// ==/UserScript==

var wiki__text = document . querySelector ( ".comic.editpage #wiki__text" ),
	stop = document . querySelector ( "#dw__recent" ),
	save = document . querySelector ( "#edbtn__save" ),
	sum = document . querySelector ( "#edit__summary" ),
	autoeraser = 0, // для удаления текста - 1 !! ВНИМАНИЕ
	autosave = 1, // для сохранения - 1, для простого посещения страницы - 0
	autoclose = 1, // для NaviClicker - 0, для IndexEditLinker - 1
	timer = 4;

if ( wiki__text != null ) {
	if ( sum && sum . value != null ) {
		if ( sum . value != '' ) sum . value += ' / ';
		sum . value += 'ASC 2025.06.22';
	}
	if ( autoeraser ) wiki__text . value = '';
}
if ( save && autosave ) save . click ( );
// в Фаерфоксе требуется about:config -> dom.allow_scripts_to_close_windows -> true
if ( !stop && autoclose && timer > 2 ) setTimeout ( function ( ) { window . close ( ) }, timer * 1000 )
