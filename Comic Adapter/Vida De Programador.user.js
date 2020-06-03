// ==UserScript==
// @name            Comic Adapter: Vida De Programador
// @version         2019.10.03
// @description     Extract Info for Comicslate
// @include         http*://vidadeprogramador.com.br*
// @icon            https://www.google.com/s2/favicons?domain=vidadeprogramador.com.br
// @grant           none
// @author          Rainbow-Spike
// @namespace       https://greasyfork.org/users/7568
// @homepage        https://greasyfork.org/ru/users/7568-dr-yukon
// ==/UserScript==

var post = document.querySelectorAll ( ".post" ), // поиск выпусков
	texter, tir, title, number, trans, trans_p, tag, tag_a;

for ( var i = 0; i < post.length; i++ ) {
	texter = ''; // сборка опустошена
	tir = post[i].querySelector ( ".tirinha"); // поиск признака выпуска
	if ( tir != undefined ) { // если признак выпуска есть

		// ТИТУЛ
		title = post[i].querySelector ( 'a' ).innerHTML; // поиск названия
		number = tir.querySelector ( 'img' ).getAttribute ( 'src' ).replace ( /.*tirinha(\d+)\..*/g, "$1" ); // поиск номера
		if ( typeof ( number * 1 ) == "number" ) texter += "== Vida de Programador " + number + " ==<br>**" + title + "**<br><br>{cnav}<br>{{" + number + ".png}}<br>"; // приведение к числу и проверка, первая часть сборки

		// ТРАНСКРИПТ
		trans = post[i].querySelector ( ".transcription" ); // поиск зоны транскрипта
		if ( trans != undefined ) { // если она нашлась
			trans_p = trans.querySelector ( 'p' ); // поиск внутреннего тега
			if ( trans_p != undefined ) texter += '&lt;!--' + trans_p.innerHTML + '--&gt;<br>'; // вторая часть сборки
		}

		// ТЕГИ
		tag = post[i].querySelector ( ".postmetadata" ); // поиск зоны тегов
		if ( tag != undefined ) { // если она нашлась
			texter += '{{tag>'; // третья часть сборки
			tag_a = tag.querySelectorAll ( "a" ); // поиск отдельных тегов
			for ( var j = 0; j < tag_a.length; j++ ) {
				texter += tag_a[j].innerHTML.replace ( / /g, "_" ) + " "; // обработка тегов
			}
			texter = texter.replace ( / $/g, "}}<br>" ); // третья часть сборки
			tag.innerHTML = ''; // опустошение зоны тегов
		}

		trans.innerHTML = texter + "{cnav}"; // вставка сборки в зону транскрипта
	}
}
