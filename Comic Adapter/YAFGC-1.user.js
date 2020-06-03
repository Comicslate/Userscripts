// ==UserScript==
// @name			Comic Adapter: YAFGC-1
// @version			2020.06.03
// @description     Extract Info for Comicslate
// @include			http*://*yafgc.net*
// @icon			https://www.google.com/s2/favicons?domain=yafgc.net
// @grant			none
// @author			Rainbow-Spike
// ==/UserScript==

var prev = document.querySelector ( ".navi-prev" ),
	next = document.querySelector ( ".navi-next" );
prev.accessKey = "p";
next.accessKey = "n";

var put = document.querySelector ( "#menubar-wrapper" ),
	cont = document.querySelector ( ".post-content" ),
	titler = cont.querySelector ( "h2" ),
	chap = cont.querySelector ( ".comic-chapter" ),
	chapa = chap.querySelector ( "a" ),
	char = cont.querySelector ( ".comic-characters" ),
	loc = cont.querySelector ( ".comic-locations" ),
	ent = cont.querySelector ( ".entry" ),
	texter = '';

// SELECT
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

// ТИТУЛ
texter += titler.innerHTML.replace ( /^\d+:? (.*)$/, "**$1**" );

// ГЛАВА
if ( chap != null ) texter = texter.replace ( /^\*\*/, "**" + chapa.innerHTML + ": " );

// ПЕРСОНАЖИ
if ( char != null ) {
	texter += "<br><br>" + char.innerHTML
		.replace ( "Characters:", "Персонажи:" )
		.replace ( /\<a href="http:\/\/yafgc.net\/character\/[^"]+" rel="tag"\>([^\<]+)\<\/a>/g, "[[?do=search&id=ns%3Agamer%3Ayafgc+$1|$1]]" ); // мусор после href
}

// МЕСТНОСТЬ
if ( loc != null ) {
	texter += ( char != null ) ? "\\\\<br>" : "<br><br>";
	texter += loc.innerHTML
		.replace ( "Location:", "Местность:" )
		.replace ( /\<a href="http:\/\/yafgc.net\/location\/[^"]+" rel="tag"\>([^\<]+)\<\/a>/g, "[[?do=search&id=ns%3Agamer%3Ayafgc+$1|$1]]" ); // мусор после href
}

// ПРОЧЕЕ
if (ent != null) {
	texter += ( loc == null ) ? "<br>" : "";
	texter += "<br>" + ent.innerHTML
		.replace ( /\<br\>/g,"\\\\<br>" )
		.replace ( /\<a [^/>]+ href="([^"]+)"\>([^\<]+)\<\/a>/g, "[[$1|$2]]" ) // мусор до href
		.replace ( /\<img src="([^"]+)"[^/>]+\>/g, "{{$1}}" ) // после src идёт alt
		.replace ( /\<em>([^\<]+)\<\/em>/g, "//$1//" )
		.replace ( /\<strong>([^\<]+)\<\/strong>/g, "**$1**" ); // докувикификация
}

// put.setAttribute ( 'style', 'padding: 15px' );
put.innerHTML = texter;
selectblock ( put );
