// ==UserScript==
// @name			Comicslate MinorEdit
// @version			2020.06.04
// @description		"Minor changes" autocheck
// @description:ru	Автовыбор "малой правки"
// @include			http*://*comicslate.org/*do=*
// @exclude			http*://*comicslate.org/*news*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var lever = 0, /*	1 - галочить только повторы
					0 - галочить всех подряд (для генерации страниц-десятников)
					первая правка (создание) не может быть малой!! */
	mark = document.querySelector ( "#minoredit" ),
	gt = document.querySelector ( "#edit__summary" ).value.search ( /(створана|създадена|oprettet|angelegt|δημιουργήθηκε|created|kreita|creado|luotu|créée|נוצר|निर्मित|dibuat|creata|作成|만듦|utworzono|criação|создано|створено|创建)/ ),
	timer = 2000;

function minor ( ) {
	if ( ( gt == -1 && !mark.checked ) || ( gt != -1 && mark.checked ) ) mark.click ( );
}

if ( mark ) lever ? setTimeout ( minor, timer ) : mark.click ( );
