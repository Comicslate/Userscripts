// ==UserScript==
// @name			Comicslate AutoSaveClicker
// @version			2021.05.28
// @description		Автоклик сохранения
// @include			/comicslate.org.+(sci-fi|tlk|wolves|mlp|furry|gamer|other|interrobang)/
// @exclude			/^https?://comicslate\.org\/.+do=[^e]+/
// @exclude			/^https?://comicslate\.org\/.+publish
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSaveClicker.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoSaveClicker.user.js
// ==/UserScript==

var sum = document . querySelector ( "#edit__summary" ),

	autosave = 1,
	sv = document . querySelector ( "#edbtn__save" ),

	autoclose = 1, // для NaviClicker - 0, для IndexEditLinker - 1
	timer = 10;

if ( sum && sum . value != null ) {
	if ( sum . value != '' ) sum . value += ' / ';
	sum . value += 'AutoSaveClicker 2021.05.26';
}

( sv )
	? (
		( autosave )
			? sv . click ( )
			: ''
	)
	: (
		( autoclose && timer > 2 )
			? setTimeout ( function ( ) { window . close ( ) }, timer * 1000 ) // в Фаерфоксе требуется about:config -> dom.allow_scripts_to_close_windows -> true
			: ''
	)
