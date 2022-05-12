// ==UserScript==
// @name			Comicslate MinorEdit
// @version			2021.04.26
// @description		Автовыбор "малой правки"
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=draft*
// @exclude			http*://*comicslate.org/*news*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/MinorEdit.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/MinorEdit.user.js
// ==/UserScript==

var lever = 1, /*	1 - галочить только исправления, создания не галочить
					0 - галочить всех подряд (для генерации страниц-десятников)
					первая правка (создание) не может быть малой!! */
	mark = document . querySelector ( "#minoredit" ),
	gt = document . querySelector ( "#edit__summary" ) . value . search ( /(створ(ана|ено)|създадена|oprettet|angelegt|δημιουργήθηκε|cr(ea(ted|do|ta)|éée|iação)|kreita|luotu|נוצר|निर्मित|dibuat|作成|만듦|utworzono|создано|创建)/ ),
	timer = 2;

function minor ( ) {
	if ( ( gt == -1 && !mark.checked ) || ( gt != -1 && mark.checked ) ) mark . click ( );
}

if ( mark ) lever ? setTimeout ( minor, timer * 1000 ) : mark . click ( );
