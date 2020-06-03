// ==UserScript==
// @name			Comic Adapter: Sandra & Woo
// @version			2020.04.20
// @description		Extract Info for Comicslate
// @include			http*://*sandraandwoo.com*
// @author			Rainbow-Spike
// @namespace		https://greasyfork.org/users/7568
// @homepage		https://greasyfork.org/ru/users/7568-dr-yukon
// @icon			https://www.google.com/s2/favicons?domain=sandraandwoo.com
// @grant			none
// @run-at			document-end
// ==/UserScript==

var nav = document.querySelector ( ".nav" ), // навигация
	titler = document.querySelector ( ".post-comic h2" ), // поиск блока титула
	entry = document.querySelector ( ".entry" ), // поиск блока примечаний
	entry_p = document.querySelectorAll ( ".entry > p" ), // поиск параграфов в примечаниях
	entry_li = document.querySelectorAll ( ".entry > li" ), // поиск списков в примечаниях
	trans = document.querySelector ( ".transcript" ), // поиск блока транскрипта
	trans_li = document.querySelectorAll ( ".transcript li" ), // поиск списков в транскрипте
	tag_div = document.querySelector ( ".tags" ), // поиск блока тегов
		tag_a = tag_div.querySelectorAll ( "a" ), // список тегов
	texter = ''; // заготовка для транскрипта

nav.style.cssText += 'position: absolute; top: 200px;';

// ВЫДЕЛЕНИЕ
function selectblock ( name ) {
	var rng = document.createRange ();
	rng.selectNode ( name );
	var sel = window.getSelection ();
	sel.removeAllRanges ();
	sel.addRange ( rng );
}

// ТИТУЛ
texter += titler.innerHTML
	.replace ( /\[?(\d+)\]? (.*)/, "== Sandra and Woo $1 ==<br>**$2**<br><br>{cnav}<br>{{$1.png}}<br>" )
	.replace ( /^\[(\d+)\]$/, "== Sandra and Woo $1 ==<br><br>{cnav}<br>{{$1.png}}<br>" ); // запись титульной части вики-кода
titler.innerHTML = titler.innerHTML.replace ( /\[(\d+)\].*/, "$1" ); // зачистка титула до номера

// ПАРАГРАФЫ ПРИМЕЧАНИЙ
if ( entry_p.length !== undefined ) {
	for ( var i = 0; i < entry_p.length; i++ ) {
		texter += "<br>" + entry_p[i].innerHTML
			.replace ( /<a [^<]+ href="([^"]+)">([^<]+)<\/a>/g, "[[$1|$2]]" )
			.replace ( /<em>([^<]+)<\/em>/g, "//$1//" )
			.replace ( /<strong>([^<]+)<\/strong>/g, "**$1**" ) + "\\\\<br>"; // докувикификация и запись параграфов примечаний в вики-код
	}
}

// СПИСКИ ПРИМЕЧАНИЙ
if ( entry_li.length !== undefined ) {
	for ( var j = 0; j < entry_li.length; j++ ) {
		texter += "&nbsp;&nbsp;* "+entry_li[j].innerHTML
			.replace ( /<a [^"]+ href="([^"]+)">([^<]+)<\/a>/g, "[[$1|$2]]" )
			.replace ( /<em>([^<]+)<\/em>/g, "//$1//" )
			.replace ( /<strong>([^<]+)<\/strong>/g, "**$1**" ) + "<br>"; // докувикификация и запись списков примечаний в вики-код
	}
}

// ТРАНСКРИПТ
if ( trans !== null ) { // если блок транскрипта не пустой
	texter += "&lt;!--<br>"; // запись транскрипта в комментарий в вики-коде
	if ( trans_li.length !== undefined ) {
		for ( var k = 0; k < trans_li.length; k++ ) {
			texter += "&nbsp;&nbsp;* " + trans_li[k].innerHTML
				.replace ( /<strong>([^<]+)<\/strong>/g, "**$1**" ) + "<br>";
		}
	}
	texter += "--&gt;<br>";
}

// ТЕГИ
if ( tag_div !== null ) { // если блок тегов не пустой
	for ( var l = 0; l < tag_a.length; l++ ) {
 		tag_a[l].innerHTML = tag_a[l].innerHTML.replace ( / /g, "_" ); // обработка каждого тега
	}
	texter += tag_div.innerHTML
	.replace ( /, /g, " " )
	.replace ( /└ Tags: (.*) \s+/, "{{tag>$1}}<br>" ); // обработка строки с тегами и её запись в вики-код
	tag_div.parentNode.removeChild ( tag_div ); // удаление блока тегов
}

texter += "{cnav}"; // концовка вики-кода
texter = texter.replace ( "\\\\<br>&nbsp;&nbsp;*", "<br>&nbsp;&nbsp;*" ); // полировка
entry.innerHTML = texter; // запись собранного вики-кода вместо примечаний

selectblock ( entry );

var prev = document.querySelector ( '.nav-previous > a' ); prev.accessKey = "z";
var next = document.querySelector ( '.nav-next > a' ); if ( next != null ) next.accessKey = "x";
document.querySelector('#comic a').href = document.querySelector('#comic a img').src; // ссылка на картинку передвиг на вмещающий её линк - плюс в Gesturefy жест на сохранение ссылки
