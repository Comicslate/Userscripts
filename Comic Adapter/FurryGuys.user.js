// ==UserScript==
// @name			Comic Adapter: FurryGuys
// @version			2020.06.03
// @description		Extract Info for Comicslate
// @include			http*://*acomics.ru/~FurryGuys/*
// @icon			https://www.google.com/s2/favicons?domain=acomics.ru
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var title = document.querySelector ( ".issueName" ).innerHTML, // поиск титула
	number = document.querySelector ( ".issueNumber" ).innerHTML.split ( '/' )[ 0 ] * 1, // поиск номера
	pic = document.querySelector ( "#mainImage" ), // поиск подписи
	comm = document.querySelector ( ".description" ), // поиск комментария
	entry = document.querySelector ( "nav.serial" ), // место вставки
	texter = ''; // сборщик

// ВЫДЕЛЕНИЕ
function selectblock ( name ) {
	var rng = document.createRange ();
	rng.selectNode ( name );
	var sel = window.getSelection ();
	sel.removeAllRanges ();
	sel.addRange ( rng );
}

entry.style.cssText += "height: auto !important;";

if ( title.charAt ( 2 ) == '-' ) title = 'Выпуск ' + title;
texter += '== Furry Guys ' + number + ' ==<br>**' + title + '**<br><br>{cnav}<br>{{cotan>' + number + '.png}}<br>{{&lt;cotan}}<br>';

if ( pic !== null ) pic = pic.getAttribute ( "title" );
if ( comm !== null ) comm = comm.innerHTML;
if ( pic !== null ) {
	texter += '//' + pic + '//<br>';
	if ( comm !== null ) texter += '<br>';
};
if ( comm !== null ) {
	texter += comm
	.replace ( /<p>\s*(.+)\s*<\/p>/g, "$1" ) // удаление параграфов
	.replace ( ">&nbsp;<", "><") // без тупых пробелов
	.replace ( /<.?span[^>]*>/g, "" ) // удаление спанов
	.replace ( /(<br>&nbsp;)?У нас есть.+Вики-фур<\/a>(<br>)*/g, "" ) // удаление социал-ссылок
	.replace ( /<a[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g, "[[$1|$2]]" ) // [[ссылки]]
	.replace ( /<img[^>]*title="([^"]+)"[^>]*src="[^"]+emoticons[^"]+"[^>]*>/g, "$1" ) // смайлы
	.replace ( /<em[^>]*>([^<]+)<\/em>/g, "//$1//" ) // курсив
	.replace ( /<strong[^>]*>([^<]+)<\/strong>/g, "**$1**" ) // жирнота
	+ "<br>"; // докувикификация
}
texter += '{cnav}'; // концовка вики-кода
texter = texter.replace ( /<br>&nbsp;&nbsp;<br>/g, "<br>" ); // пустота

entry.innerHTML = texter; // запись собранного вики-кода

selectblock ( entry );
