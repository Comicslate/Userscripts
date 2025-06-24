// ==UserScript==
// @name			Comicslate AutoSaveClicker
// @version			2025.06.24
// @description		Автоклик сохранения + удалялка
// @match			http*://*comicslate.org/*
// @exclude			/^https?://comicslate\.org\/.+publish
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			window.close
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSaveClicker.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSaveClicker.user.js
// ==/UserScript==

// в Фаерфоксе требуется about:config -> dom.allow_scripts_to_close_windows -> true

const date = 'ASCBot 2025.06.24',
	cf = document . querySelector ( "#cf-wrapper" ),
	editor = document . querySelector ( ".comic.editpage" ),
	autoeraser = 0, // для удаления текста - 1 !! ВНИМАНИЕ
	autosave = 1, // для сохранения - 1, для простого посещения страницы - 0
	autoclose = 1, // для NaviClicker - 0, для IndexEditLinker - 1
	save_timer = 4,
	close_timer = 1;

// защита от ошибки 1015
if ( cf != null ) setTimeout ( function ( ) { location . reload ( ) }, 1000 );

if ( editor != null ) {
	let wiki__text = editor . querySelector ( "#wiki__text" );
	if ( wiki__text != null ) {
		const sum = editor . querySelector ( "#edit__summary" );
		if ( sum && sum . value != null ) {
			if ( sum . value != '' ) sum . value += ' / ';
			sum . value += date;
		}
		if ( autoeraser ) wiki__text . value = '';
		const save = editor . querySelector ( "#edbtn__save" );
		if ( autosave ) setTimeout ( function ( ) { save . click ( ) }, Math . max ( save_timer, 2 ) * 1000 )
	}
}
if ( editor == null ) {
	const stop = document . querySelector ( ".ui-admin, #dw__register, .idx, #dw__recent, #mediamanager__page, #page__revisions" );
	if ( autoclose && !stop ) setTimeout ( function ( ) { window . close ( ) }, Math . max ( close_timer, 1 ) * 1000 )
}
