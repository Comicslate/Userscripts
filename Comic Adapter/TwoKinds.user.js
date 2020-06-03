// ==UserScript==
// @name			Comic Adapter: TwoKinds
// @version			2020.06.03
// @description		Extract Info for Comicslate
// @include			http*://*twokinds.keenspot.com*
// @icon			https://www.google.com/s2/favicons?domain=twokinds.keenspot.com
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var titler1 = parseInt ( document.getElementsByTagName ( "title" )[0].innerHTML.split ( ': ' )[0] ), // номер
	titler2 = document.querySelector ( "h1" ).innerHTML.split ( ': ' )[1], // титул
	trans = document.querySelector ( ".transcript-content" ), // поиск блока транскрипта
	trans_p = trans.querySelectorAll ( "p" ), // поиск параграфов в транскрипте
	last_p = trans_p[trans_p.length-1], // последний параграф
	texter = ''; // заготовка для вики-кода

// SELECT
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

if ( titler1 < 1000 ) titler1 = "0" + titler1; // наращивание номера
texter += "== Twokinds " + titler1 + " ==<br>**" + titler2 + "**<br><br>{cnav}<br>{{" + titler1 + ".png}}<br>"; // запись титульной части вики-кода

// ТРАНСКРИПТ
if ( trans != null ) { // если блок транскрипта не пустой
	if ( last_p.innerHTML.match ( "Page transcript provided" ).length != 0 ) { // если есть примечание об авторстве
		trans.removeChild ( last_p ); // удаление
	}
	texter += "&lt;!--<br>" + trans.innerHTML
		.replace ( /<p>/g, '' )
		.replace ( /<\/p>/g, '<br>' )
/*		.replace ( /<em>([^<]+)<\/em>/g, "//$1//" )
		.replace ( /<strong>([^<]+)<\/strong>/g, "**$1**" )
		.replace ( /<em>([^<]+)<\/em>/g, "//$1//" ) // вложения жирных в курсивы обрабатываются снова */
		+ "--&gt;<br>"; // запись транскрипта в комментарий в вики-коде
}

texter += "{cnav}"; // концовка вики-кода
trans.innerHTML = texter; // запись собранного вики-кода вместо транскрипта

selectblock ( trans );
