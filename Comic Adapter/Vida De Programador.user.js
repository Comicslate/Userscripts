// ==UserScript==
// @name            Comic Adapter: Vida De Programador
// @version         2020.06.03
// @description     Extract Info for Comicslate
// @include         http*://vidadeprogramador.com.br*
// @icon            https://www.google.com/s2/favicons?domain=vidadeprogramador.com.br
// @author          Rainbow-Spike
// @grant           none
// ==/UserScript==

var post = document.querySelectorAll ( ".post" ),
	texter, tir, title, number, trans, trans_p, tag, tag_a;

for ( var i = 0; i < post.length; i++ ) {
	texter = '';
	tir = post[i].querySelector ( ".tirinha");
	if ( tir != undefined ) {

		// ТИТУЛ
		title = post[i].querySelector ( 'a' ).innerHTML;
		number = tir.querySelector ( 'img' ).getAttribute ( 'src' ).replace ( /.*tirinha(\d+)\..*/g, "$1" );
		if ( typeof ( number * 1 ) == "number" ) texter += "== Vida de Programador " + number + " ==<br>**" + title + "**<br><br>{cnav}<br>{{" + number + ".png}}<br>";

		// ТРАНСКРИПТ
		trans = post[i].querySelector ( ".transcription" );
		if ( trans != undefined ) {
			trans_p = trans.querySelector ( 'p' );
			if ( trans_p != undefined ) texter += '&lt;!--' + trans_p.innerHTML + '--&gt;<br>';
		}

		// ТЕГИ
		tag = post[i].querySelector ( ".postmetadata" );
		if ( tag != undefined ) {
			texter += '{{tag>';
			tag_a = tag.querySelectorAll ( "a" );
			for ( var j = 0; j < tag_a.length; j++ ) {
				texter += tag_a[j].innerHTML.replace ( / /g, "_" ) + " ";
			}
			texter = texter.replace ( / $/g, "}}<br>" );
			tag.innerHTML = '';
		}

		trans.innerHTML = texter + "{cnav}";
	}
}
